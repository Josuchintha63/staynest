package com.staynest.rentalbackend.dto;

import jakarta.validation.constraints.*;

import java.time.LocalDate;

public class BookingRequest {

	@NotNull
	private Long propertyId;

	@NotNull
	private LocalDate checkIn;

	@NotNull
	private LocalDate checkOut;

	@Min(1)
	private Integer totalGuests;

	public BookingRequest() {
	}

	public Long getPropertyId() {
		return propertyId;
	}

	public void setPropertyId(Long propertyId) {
		this.propertyId = propertyId;
	}

	public LocalDate getCheckIn() {
		return checkIn;
	}

	public void setCheckIn(LocalDate checkIn) {
		this.checkIn = checkIn;
	}

	public LocalDate getCheckOut() {
		return checkOut;
	}

	public void setCheckOut(LocalDate checkOut) {
		this.checkOut = checkOut;
	}

	public Integer getTotalGuests() {
		return totalGuests;
	}

	public void setTotalGuests(Integer totalGuests) {
		this.totalGuests = totalGuests;
	}
}