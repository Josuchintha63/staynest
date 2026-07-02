package com.staynest.rentalbackend.dto;

import java.math.BigDecimal;
import java.time.LocalDate;

import com.staynest.rentalbackend.entity.Booking;

public class BookingResponse {

	private Long id;

	private Long propertyId;

	private Long guestId;

	private LocalDate checkIn;

	private LocalDate checkOut;

	private Integer totalGuests;

	private String status;

	private Integer numNights;

	private BigDecimal pricePerNight;

	private BigDecimal cleaningFee;

	private BigDecimal serviceFee;

	private BigDecimal taxAmount;

	private BigDecimal totalPrice;

	private BigDecimal refundAmount;

	public BookingResponse() {
	}

	public BookingResponse(Booking booking){

	    this.id = booking.getId();
	    this.propertyId =
	            booking.getProperty().getId();

	    this.guestId =
	            booking.getGuest().getId();

	    this.checkIn =
	            booking.getCheckIn();

	    this.checkOut =
	            booking.getCheckOut();

	    this.totalGuests =
	            booking.getTotalGuests();

	    this.status =
	            booking.getStatus();

	    this.totalPrice =
	            booking.getTotalPrice();
	}

	public Long getId() {
		return id;
	}

	public Long getPropertyId() {
		return propertyId;
	}

	public Long getGuestId() {
		return guestId;
	}

	public LocalDate getCheckIn() {
		return checkIn;
	}

	public LocalDate getCheckOut() {
		return checkOut;
	}

	public Integer getTotalGuests() {
		return totalGuests;
	}

	public String getStatus() {
		return status;
	}

	public Integer getNumNights() {
		return numNights;
	}

	public BigDecimal getPricePerNight() {
		return pricePerNight;
	}

	public BigDecimal getCleaningFee() {
		return cleaningFee;
	}

	public BigDecimal getServiceFee() {
		return serviceFee;
	}

	public BigDecimal getTaxAmount() {
		return taxAmount;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public BigDecimal getRefundAmount() {
		return refundAmount;
	}
}