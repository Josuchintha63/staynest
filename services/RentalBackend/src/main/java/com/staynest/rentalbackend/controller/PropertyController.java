package com.staynest.rentalbackend.controller;

import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.staynest.rentalbackend.dto.PropertyRequest;
import com.staynest.rentalbackend.dto.PropertyResponse;
import com.staynest.rentalbackend.entity.Property;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.security.UserDetailsImpl;
import com.staynest.rentalbackend.service.PropertyService;

import java.util.List;

@RestController
@RequestMapping("/properties")
public class PropertyController {

	private final PropertyService propertyService;

	public PropertyController(PropertyService propertyService) {
		this.propertyService = propertyService;
	}

	@PostMapping
	public PropertyResponse create(
	        @Valid @RequestBody PropertyRequest request,
	        @AuthenticationPrincipal UserDetailsImpl principal) {

	    User host = new User();
	    host.setId(principal.getId());

	    return propertyService.createProperty(request, host);
	}

	@GetMapping("/{id}")
	public PropertyResponse getById(@PathVariable Long id) {

		return propertyService.getPropertyById(id);
	}

	@GetMapping("/host/{hostId}")
	public List<PropertyResponse> hostProperties(@PathVariable Long hostId) {

		return propertyService.getHostProperties(hostId);
	}

	@PostMapping("/{id}/submit")
	public PropertyResponse submit(@PathVariable Long id, @AuthenticationPrincipal UserDetailsImpl principal) {

		User host = new User();
		host.setId(principal.getId());

		return propertyService.submitForApproval(id, host);
	}
}
