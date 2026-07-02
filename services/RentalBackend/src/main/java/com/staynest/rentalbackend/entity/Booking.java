package com.staynest.rentalbackend.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;


import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "bookings")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "property_id", nullable = false)
	private Property property;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "guest_id", nullable = false)
	private User guest;

	@NotNull
	@Column(name = "check_in", nullable = false)
	private LocalDate checkIn;

	@NotNull
	@Column(name = "check_out", nullable = false)
	private LocalDate checkOut;

	@NotNull
	@Column(name = "total_guests", nullable = false)
	private int totalGuests;

	@NotBlank
	@Pattern(regexp = "^(PENDING|CONFIRMED|COMPLETED|CANCELLED)$")
	@Column(nullable = false, length = 30)
	private String status;

	@NotNull
	@DecimalMin("0.00")
	@Column(name = "price_per_night", nullable = false, precision = 10, scale = 2)
	private BigDecimal pricePerNight;

	@NotNull
	@Column(name = "num_nights", nullable = false)
	private int numNights;

	@NotNull
	@DecimalMin("0.00")
	@Column(name = "cleaning_fee", nullable = false, precision = 10, scale = 2)
	private BigDecimal cleaningFee;

	@NotNull
	@DecimalMin("0.00")
	@Column(name = "service_fee", nullable = false, precision = 10, scale = 2)
	private BigDecimal serviceFee;

	@NotNull
	@DecimalMin("0.00")
	@Column(name = "tax_amount", nullable = false, precision = 10, scale = 2)
	private BigDecimal taxAmount;

	@NotNull
	@DecimalMin("0.00")
	@Column(name = "total_price", nullable = false, precision = 10, scale = 2)
	private BigDecimal totalPrice;

	@DecimalMin("0.00")
	@Column(name = "refund_amount", precision = 10, scale = 2)
	private BigDecimal refundAmount = BigDecimal.ZERO;

	@Column(name = "created_at", updatable = false)
	private LocalDateTime createdAt = LocalDateTime.now();

	public Booking() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Property getProperty() {
		return property;
	}

	public void setProperty(Property property) {
		this.property = property;
	}

	public User getGuest() {
		return guest;
	}

	public void setGuest(User guest) {
		this.guest = guest;
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

	public int getTotalGuests() {
		return totalGuests;
	}

	public void setTotalGuests(int totalGuests) {
		this.totalGuests = totalGuests;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public BigDecimal getPricePerNight() {
		return pricePerNight;
	}

	public void setPricePerNight(BigDecimal pricePerNight) {
		this.pricePerNight = pricePerNight;
	}

	public int getNumNights() {
		return numNights;
	}

	public void setNumNights(int numNights) {
		this.numNights = numNights;
	}

	public BigDecimal getCleaningFee() {
		return cleaningFee;
	}

	public void setCleaningFee(BigDecimal cleaningFee) {
		this.cleaningFee = cleaningFee;
	}

	public BigDecimal getServiceFee() {
		return serviceFee;
	}

	public void setServiceFee(BigDecimal serviceFee) {
		this.serviceFee = serviceFee;
	}

	public BigDecimal getTaxAmount() {
		return taxAmount;
	}

	public void setTaxAmount(BigDecimal taxAmount) {
		this.taxAmount = taxAmount;
	}

	public BigDecimal getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(BigDecimal totalPrice) {
		this.totalPrice = totalPrice;
	}

	public BigDecimal getRefundAmount() {
		return refundAmount;
	}

	public void setRefundAmount(BigDecimal refundAmount) {
		this.refundAmount = refundAmount;
	}

	public LocalDateTime getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDateTime createdAt) {
		this.createdAt = createdAt;
	}
	
	

}
