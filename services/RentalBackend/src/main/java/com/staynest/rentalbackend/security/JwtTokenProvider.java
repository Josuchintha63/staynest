package com.staynest.rentalbackend.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Component
public class JwtTokenProvider {

	private final Key key;
	private final long jwtExpirationMs;
	private final long jwtRefreshExpirationMs;

	public JwtTokenProvider(@Value("${app.jwt.secret}") String jwtSecret,
			@Value("${app.jwt.expiration-ms}") long jwtExpirationMs,
			@Value("${app.jwt.refresh-expiration-ms}") long jwtRefreshExpirationMs) {

		this.key = Keys.hmacShaKeyFor(jwtSecret.getBytes(StandardCharsets.UTF_8));

		this.jwtExpirationMs = jwtExpirationMs;

		this.jwtRefreshExpirationMs = jwtRefreshExpirationMs;
	}

	public String generateAccessToken(UserDetailsImpl userPrincipal) {

		return generateTokenFromUsername(userPrincipal.getUsername(), jwtExpirationMs);
	}

	public String generateRefreshToken(UserDetailsImpl userPrincipal) {

		return generateTokenFromUsername(userPrincipal.getUsername(), jwtRefreshExpirationMs);
	}

	public String generateTokenFromUsername(String username, long expirationMs) {

		return Jwts.builder().setSubject(username).setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis() + expirationMs))
				.signWith(key, SignatureAlgorithm.HS256).compact();
	}

	public String getUsernameFromJwtToken(String token) {

		Claims claims = Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();

		return claims.getSubject();
	}

	public boolean validateJwtToken(String authToken) {

		try {

			Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(authToken);

			return true;

		} catch (JwtException | IllegalArgumentException e) {

			return false;
		}
	}
}