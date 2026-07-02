package com.staynest.rentalbackend.controller;

import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.staynest.rentalbackend.dto.ReviewRequest;
import com.staynest.rentalbackend.entity.Review;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.security.UserDetailsImpl;
import com.staynest.rentalbackend.service.ReviewService;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

	private final ReviewService reviewService;

	public ReviewController(ReviewService reviewService) {

		this.reviewService = reviewService;
	}

	@PostMapping
	public Review create(@Valid @RequestBody ReviewRequest request,
			@AuthenticationPrincipal UserDetailsImpl principal) {

		User user = new User();
		user.setId(principal.getId());

		return reviewService.createReview(request, user);
	}
}
