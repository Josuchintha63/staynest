package com.staynest.rentalbackend.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.staynest.rentalbackend.constant.PropertyStatuses;
import com.staynest.rentalbackend.dto.PropertyRequest;
import com.staynest.rentalbackend.dto.PropertyResponse;
import com.staynest.rentalbackend.entity.Property;
import com.staynest.rentalbackend.entity.PropertyAmenity;
import com.staynest.rentalbackend.entity.PropertyPhoto;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.exception.BadRequestException;
import com.staynest.rentalbackend.repository.PropertyRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class PropertyService {

	private final PropertyRepository propertyRepository;

	public PropertyService(PropertyRepository propertyRepository) {

		this.propertyRepository = propertyRepository;
	}

	public PropertyResponse createProperty(PropertyRequest request, User host) {

		Property property = new Property();

		property.setTitle(request.getTitle());

		property.setDescription(request.getDescription());

		property.setAddress(request.getAddress());

		property.setCity(request.getCity());

		property.setCountry(request.getCountry());

		property.setLatitude(request.getLatitude());

		property.setLongitude(request.getLongitude());

		property.setPropertyType(request.getPropertyType());

		property.setPricePerNight(request.getPricePerNight());

		property.setCleaningFee(request.getCleaningFee());

		property.setServiceFeeRate(new BigDecimal("0.05"));

		property.setStatus(PropertyStatuses.DRAFT);

		property.setHost(host);

		if (request.getPhotoUrls() != null) {

			for (int i = 0; i < request.getPhotoUrls().size(); i++) {

				PropertyPhoto photo = new PropertyPhoto(property, request.getPhotoUrls().get(i), i);

				property.getPhotos().add(photo);
			}
		}

		if (request.getAmenities() != null) {

			for (String amenity : request.getAmenities()) {

				PropertyAmenity propertyAmenity = new PropertyAmenity(property, amenity);

				property.getAmenities().add(propertyAmenity);
			}
		}

		Property saved = propertyRepository.save(property);

		return new PropertyResponse(saved);
	}

	@Transactional(readOnly = true)
	public PropertyResponse getPropertyById(Long id) {

		Property property = propertyRepository.findById(id)
				.orElseThrow(() -> new BadRequestException("Property not found"));

		return new PropertyResponse(property);
	}

	@Transactional(readOnly = true)
	public List<PropertyResponse> getHostProperties(Long hostId) {

		return propertyRepository.findByHost_Id(hostId).stream().map(PropertyResponse::new)
				.collect(Collectors.toList());
	}

	public PropertyResponse submitForApproval(Long propertyId, User host) {

		Property property = propertyRepository.findById(propertyId)
				.orElseThrow(() -> new BadRequestException("Property not found"));

		if (!property.getHost().getId().equals(host.getId())) {

			throw new BadRequestException("Unauthorized host");
		}

		if (!PropertyStatuses.DRAFT.equals(property.getStatus())) {

			throw new BadRequestException("Only draft properties can be submitted");
		}

		property.setStatus(PropertyStatuses.PENDING);

		return new PropertyResponse(propertyRepository.save(property));
	}

	@Transactional(readOnly = true)
	public List<PropertyResponse> getAllActiveProperties() {

		return propertyRepository.findByStatus(PropertyStatuses.ACTIVE).stream().map(PropertyResponse::new)
				.collect(Collectors.toList());
	}
}