package com.staynest.rentalbackend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.staynest.rentalbackend.constant.BookingStatuses;
import com.staynest.rentalbackend.dto.BookingRequest;
import com.staynest.rentalbackend.dto.BookingResponse;
import com.staynest.rentalbackend.entity.Booking;
import com.staynest.rentalbackend.entity.Property;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.exception.BadRequestException;
import com.staynest.rentalbackend.repository.BookingRepository;
import com.staynest.rentalbackend.repository.PropertyRepository;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class BookingService {

	private final BookingRepository bookingRepository;
	private final PropertyRepository propertyRepository;

	public BookingService(BookingRepository bookingRepository, PropertyRepository propertyRepository) {

		this.bookingRepository = bookingRepository;

		this.propertyRepository = propertyRepository;
	}

	public BookingResponse createBooking(BookingRequest request, User guest) {

		Property property = propertyRepository.findById(request.getPropertyId())
				.orElseThrow(() -> new BadRequestException("Property not found"));

		if (!"ACTIVE".equals(property.getStatus())) {

			throw new BadRequestException("Property not active");
		}

		long nights = ChronoUnit.DAYS.between(request.getCheckIn(), request.getCheckOut());

		if (nights <= 0) {

			throw new BadRequestException("Invalid booking dates");
		}

		boolean overlap = bookingRepository.existsOverlappingBooking(property.getId(), request.getCheckIn(),
				request.getCheckOut());

		if (overlap) {

			throw new BadRequestException("Property already booked");
		}

		BigDecimal basePrice = property.getPricePerNight().multiply(BigDecimal.valueOf(nights));

		BigDecimal cleaningFee = property.getCleaningFee();

		BigDecimal serviceFee = basePrice.multiply(property.getServiceFeeRate()).setScale(2, RoundingMode.HALF_UP);

		BigDecimal subtotal = basePrice.add(cleaningFee).add(serviceFee);

		BigDecimal tax = subtotal.multiply(new BigDecimal("0.12")).setScale(2, RoundingMode.HALF_UP);

		BigDecimal total = subtotal.add(tax);

		Booking booking = new Booking();

		booking.setProperty(property);
		booking.setGuest(guest);

		booking.setCheckIn(request.getCheckIn());

		booking.setCheckOut(request.getCheckOut());

		booking.setTotalGuests(request.getTotalGuests());

		booking.setStatus(BookingStatuses.CONFIRMED);

		booking.setPricePerNight(property.getPricePerNight());

		booking.setNumNights((int) nights);

		booking.setCleaningFee(cleaningFee);

		booking.setServiceFee(serviceFee);

		booking.setTaxAmount(tax);

		booking.setTotalPrice(total);

		booking.setRefundAmount(BigDecimal.ZERO);

		Booking saved = bookingRepository.save(booking);

		return new BookingResponse(saved);
	}

	@Transactional(readOnly = true)
	public List<BookingResponse> getGuestBookings(Long guestId) {

		return bookingRepository.findByGuest_Id(guestId).stream().map(BookingResponse::new)
				.collect(Collectors.toList());
	}

	public BookingResponse cancelBooking(Long bookingId, User user) {

		Booking booking = bookingRepository.findById(bookingId)
				.orElseThrow(() -> new BadRequestException("Booking not found"));

		boolean authorized = booking.getGuest().getId().equals(user.getId())
				|| booking.getProperty().getHost().getId().equals(user.getId());

		if (!authorized) {

			throw new BadRequestException("Unauthorized request");
		}

		booking.setStatus(BookingStatuses.CANCELLED);

		booking.setRefundAmount(
				booking.getTotalPrice().multiply(new BigDecimal("0.80")).setScale(2, RoundingMode.HALF_UP));

		return new BookingResponse(bookingRepository.save(booking));
	}
}