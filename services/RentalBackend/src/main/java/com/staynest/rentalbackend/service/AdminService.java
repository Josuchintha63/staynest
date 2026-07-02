package com.staynest.rentalbackend.service;

import org.springframework.stereotype.Service;
import com.staynest.rentalbackend.dto.AnalyticsSummaryResponse;
import com.staynest.rentalbackend.entity.HostApplication;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.exception.BadRequestException;
import com.staynest.rentalbackend.repository.BookingRepository;
import com.staynest.rentalbackend.repository.HostApplicationRepository;
import com.staynest.rentalbackend.repository.PropertyRepository;
import com.staynest.rentalbackend.repository.UserRepository;

import java.math.BigDecimal;
import java.util.List;

@Service
public class AdminService {

	private final PropertyRepository propertyRepository;
	private final BookingRepository bookingRepository;
	private final HostApplicationRepository hostRepository;
	private final UserRepository userRepository;

	public AdminService(PropertyRepository propertyRepository, BookingRepository bookingRepository,
			HostApplicationRepository hostRepository, UserRepository userRepository) {

		this.propertyRepository = propertyRepository;

		this.bookingRepository = bookingRepository;

		this.hostRepository = hostRepository;
		
		this.userRepository = userRepository;
	}

	public AnalyticsSummaryResponse getAnalytics() {

		long activeListings = propertyRepository.findByStatus("ACTIVE").size();

		long bookings = bookingRepository.findAll().size();

		return new AnalyticsSummaryResponse(activeListings, bookings, BigDecimal.ZERO, BigDecimal.ZERO);
	}

	public HostApplication approveHost(Long applicationId) {

		HostApplication app = hostRepository.findById(applicationId)
				.orElseThrow(() -> new BadRequestException("Application not found"));

		app.setStatus("APPROVED");

		return hostRepository.save(app);
	}

	public List<User> getUsers() {
		return userRepository.findAll();
	}

	public User updateUserStatus(Long id, String status) {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new BadRequestException("User not found"));
		user.setStatus(status);
		return userRepository.save(user);
	}
}