package com.staynest.rentalbackend.dto;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import com.staynest.rentalbackend.entity.Property;
import com.staynest.rentalbackend.entity.PropertyAmenity;
import com.staynest.rentalbackend.entity.PropertyPhoto;

public class PropertyResponse {

	private Long id;
	private String title;
	private String description;
	private String address;
	private String city;
	private String country;
	private Double latitude;
	private Double longitude;
	private String propertyType;
	private BigDecimal pricePerNight;
	private BigDecimal cleaningFee;
	private String status;
	private Long hostId;

	private List<String> photoUrls;
	private List<String> amenities;

	public PropertyResponse() {
	}

	public PropertyResponse(Property property) {

		this.id = property.getId();
		this.title = property.getTitle();
		this.description = property.getDescription();
		this.address = property.getAddress();
		this.city = property.getCity();
		this.country = property.getCountry();
		this.latitude = property.getLatitude();
		this.longitude = property.getLongitude();
		this.propertyType = property.getPropertyType();
		this.pricePerNight = property.getPricePerNight();
		this.cleaningFee = property.getCleaningFee();
		this.status = property.getStatus();

		if (property.getHost() != null) {
			this.hostId = property.getHost().getId();
		}
	}

	// Getters and Setters

	public Long getId() {
		return id;
	}

	public String getTitle() {
		return title;
	}

	public String getDescription() {
		return description;
	}

	public String getAddress() {
		return address;
	}

	public String getCity() {
		return city;
	}

	public String getCountry() {
		return country;
	}

	public Double getLatitude() {
		return latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public String getPropertyType() {
		return propertyType;
	}

	public BigDecimal getPricePerNight() {
		return pricePerNight;
	}

	public BigDecimal getCleaningFee() {
		return cleaningFee;
	}

	public String getStatus() {
		return status;
	}

	public Long getHostId() {
		return hostId;
	}

	public List<String> getPhotoUrls() {
		return photoUrls;
	}

	public List<String> getAmenities() {
		return amenities;
	}
}