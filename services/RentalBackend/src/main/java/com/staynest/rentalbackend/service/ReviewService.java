package com.staynest.rentalbackend.service;

import org.springframework.stereotype.Service;

import com.staynest.rentalbackend.dto.ReviewRequest;
import com.staynest.rentalbackend.entity.Booking;
import com.staynest.rentalbackend.entity.Review;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.exception.BadRequestException;
import com.staynest.rentalbackend.repository.BookingRepository;
import com.staynest.rentalbackend.repository.ReviewRepository;

@Service
public class ReviewService {

	private final ReviewRepository reviewRepository;
	private final BookingRepository bookingRepository;

	public ReviewService(ReviewRepository reviewRepository, BookingRepository bookingRepository) {

		this.reviewRepository = reviewRepository;
		this.bookingRepository = bookingRepository;
	}

	public Review createReview(ReviewRequest request, User user) {

		Booking booking = bookingRepository.findById(request.getBookingId())
				.orElseThrow(() -> new BadRequestException("Booking not found"));

		if (reviewRepository.existsByBooking_Id(request.getBookingId())) {

			throw new BadRequestException("Review already submitted");
		}

		Review review = new Review();

		review.setBooking(booking);
		review.setProperty(booking.getProperty());
		review.setGuest(user);

		review.setCleanliness(request.getCleanliness());

		review.setAccuracy(request.getAccuracy());

		review.setCheckInRating(request.getCheckInRating());

		review.setCommunication(request.getCommunication());

		review.setLocation(request.getLocation());

		review.setValue(request.getValue());

		review.setComment(request.getComment());

		return reviewRepository.save(review);
	}
}