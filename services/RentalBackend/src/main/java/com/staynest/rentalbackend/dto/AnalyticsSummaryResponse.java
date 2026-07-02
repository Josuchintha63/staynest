package com.staynest.rentalbackend.dto;

import java.math.BigDecimal;

public class AnalyticsSummaryResponse {

	private Long activeListings;

	private Long bookingsThisMonth;

	private BigDecimal platformRevenue;

	private BigDecimal hostPayouts;

	public AnalyticsSummaryResponse() {
	}

	public AnalyticsSummaryResponse(Long activeListings, Long bookingsThisMonth, BigDecimal platformRevenue,
			BigDecimal hostPayouts) {

		this.activeListings = activeListings;
		this.bookingsThisMonth = bookingsThisMonth;
		this.platformRevenue = platformRevenue;
		this.hostPayouts = hostPayouts;
	}

	public Long getActiveListings() {
		return activeListings;
	}

	public void setActiveListings(Long activeListings) {
		this.activeListings = activeListings;
	}

	public Long getBookingsThisMonth() {
		return bookingsThisMonth;
	}

	public void setBookingsThisMonth(Long bookingsThisMonth) {
		this.bookingsThisMonth = bookingsThisMonth;
	}

	public BigDecimal getPlatformRevenue() {
		return platformRevenue;
	}

	public void setPlatformRevenue(BigDecimal platformRevenue) {
		this.platformRevenue = platformRevenue;
	}

	public BigDecimal getHostPayouts() {
		return hostPayouts;
	}

	public void setHostPayouts(BigDecimal hostPayouts) {
		this.hostPayouts = hostPayouts;
	}
}