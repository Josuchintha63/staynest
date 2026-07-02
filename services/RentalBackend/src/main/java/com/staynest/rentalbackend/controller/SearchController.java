package com.staynest.rentalbackend.controller;

import org.springframework.web.bind.annotation.*;

import com.staynest.rentalbackend.dto.PropertyResponse;
import com.staynest.rentalbackend.service.SearchService;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/search")
public class SearchController {

	private final SearchService searchService;

	public SearchController(SearchService searchService) {

		this.searchService = searchService;
	}

	@GetMapping
	public List<PropertyResponse> search(
			@RequestParam(required = false) String city,
			@RequestParam(required = false) String propertyType,
			@RequestParam(required = false) BigDecimal priceMax,
			@RequestParam(required = false) String sort) {

		return searchService.search(city, propertyType, priceMax, sort);
	}
}