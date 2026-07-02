package com.staynest.rentalbackend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;

public class ReviewRequest {

	@NotNull
	private Long bookingId;

	@Min(1)
	@Max(5)
	private Integer cleanliness;

	@Min(1)
	@Max(5)
	private Integer accuracy;

	@Min(1)
	@Max(5)
	private Integer checkInRating;

	@Min(1)
	@Max(5)
	private Integer communication;

	@Min(1)
	@Max(5)
	private Integer location;

	@Min(1)
	@Max(5)
	private Integer value;

	private String comment;

	public ReviewRequest() {
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public Integer getCleanliness() {
		return cleanliness;
	}

	public void setCleanliness(Integer cleanliness) {
		this.cleanliness = cleanliness;
	}

	public Integer getAccuracy() {
		return accuracy;
	}

	public void setAccuracy(Integer accuracy) {
		this.accuracy = accuracy;
	}

	public Integer getCheckInRating() {
		return checkInRating;
	}

	public void setCheckInRating(Integer checkInRating) {
		this.checkInRating = checkInRating;
	}

	public Integer getCommunication() {
		return communication;
	}

	public void setCommunication(Integer communication) {
		this.communication = communication;
	}

	public Integer getLocation() {
		return location;
	}

	public void setLocation(Integer location) {
		this.location = location;
	}

	public Integer getValue() {
		return value;
	}

	public void setValue(Integer value) {
		this.value = value;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
}