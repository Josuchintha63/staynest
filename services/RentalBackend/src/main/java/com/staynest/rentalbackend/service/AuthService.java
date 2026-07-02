package com.staynest.rentalbackend.service;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.staynest.rentalbackend.dto.AuthRequest;
import com.staynest.rentalbackend.dto.AuthResponse;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.exception.BadRequestException;
import com.staynest.rentalbackend.repository.UserRepository;
import com.staynest.rentalbackend.security.JwtTokenProvider;
import com.staynest.rentalbackend.security.UserDetailsImpl;

import java.time.LocalDateTime;

@Service
public class AuthService {

	private final AuthenticationManager authenticationManager;
	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtTokenProvider jwtTokenProvider;

	public AuthService(AuthenticationManager authenticationManager, UserRepository userRepository,
			PasswordEncoder passwordEncoder, JwtTokenProvider jwtTokenProvider) {

		this.authenticationManager = authenticationManager;
		this.userRepository = userRepository;
		this.passwordEncoder = passwordEncoder;
		this.jwtTokenProvider = jwtTokenProvider;
	}

	public void register(User user) {

		if (userRepository.existsByEmail(user.getEmail())) {
			throw new BadRequestException("Email already exists");
		}

		user.setPassword(passwordEncoder.encode(user.getPassword()));

		userRepository.save(user);
	}

	public AuthResponse login(AuthRequest request) {

		Authentication authentication = authenticationManager
				.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

		UserDetailsImpl principal = (UserDetailsImpl) authentication.getPrincipal();

		String accessToken = jwtTokenProvider.generateAccessToken(principal);

		String refreshToken = jwtTokenProvider.generateRefreshToken(principal);

		User user = userRepository.findByEmail(principal.getUsername()).orElseThrow();

		user.setRefreshToken(refreshToken);
		user.setRefreshTokenExpiry(LocalDateTime.now().plusDays(7));

		userRepository.save(user);

		return new AuthResponse(accessToken, refreshToken, principal.getId(), principal.getUsername(),
				principal.getFullName(), principal.getRole());
	}
}