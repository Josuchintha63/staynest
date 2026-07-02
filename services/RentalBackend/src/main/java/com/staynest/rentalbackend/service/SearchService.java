package com.staynest.rentalbackend.service;


import org.springframework.stereotype.Service;

import com.staynest.rentalbackend.dto.PropertyResponse;
import com.staynest.rentalbackend.entity.Property;
import com.staynest.rentalbackend.repository.PropertyRepository;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SearchService {

    private final PropertyRepository propertyRepository;

    public SearchService(
            PropertyRepository propertyRepository) {

        this.propertyRepository = propertyRepository;
    }

    public List<PropertyResponse> search(
            String city, String propertyType, BigDecimal priceMax, String sort) {

        List<Property> properties = propertyRepository.findByStatus("ACTIVE");

        // Filter by city
        if (city != null && !city.trim().isEmpty()) {
            properties = properties.stream()
                .filter(p -> p.getCity().toLowerCase().contains(city.toLowerCase()))
                .collect(Collectors.toList());
        }

        // Filter by propertyType
        if (propertyType != null && !propertyType.trim().isEmpty()) {
            properties = properties.stream()
                .filter(p -> p.getPropertyType().equalsIgnoreCase(propertyType))
                .collect(Collectors.toList());
        }

        // Filter by priceMax
        if (priceMax != null) {
            properties = properties.stream()
                .filter(p -> p.getPricePerNight().compareTo(priceMax) <= 0)
                .collect(Collectors.toList());
        }

        // Sort results
        if (sort != null && !sort.trim().isEmpty()) {
            if (sort.contains("price") && sort.contains("asc")) {
                properties.sort((p1, p2) -> p1.getPricePerNight().compareTo(p2.getPricePerNight()));
            } else if (sort.contains("price") && sort.contains("desc")) {
                properties.sort((p1, p2) -> p2.getPricePerNight().compareTo(p1.getPricePerNight()));
            } else {
                properties.sort((p1, p2) -> p2.getId().compareTo(p1.getId()));
            }
        } else {
            properties.sort((p1, p2) -> p2.getId().compareTo(p1.getId()));
        }

        return properties.stream()
                .map(PropertyResponse::new)
                .collect(Collectors.toList());
    }
}