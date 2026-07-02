package com.staynest.rentalbackend.controller;

import jakarta.validation.Valid;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import com.staynest.rentalbackend.dto.BookingRequest;
import com.staynest.rentalbackend.dto.BookingResponse;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.security.UserDetailsImpl;
import com.staynest.rentalbackend.service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(
            BookingService bookingService) {

        this.bookingService = bookingService;
    }

    @PostMapping
    public BookingResponse create(
            @Valid @RequestBody BookingRequest request,
            @AuthenticationPrincipal UserDetailsImpl principal) {

        User guest = new User();
        guest.setId(principal.getId());

        return bookingService.createBooking(
                request,
                guest);
    }

    @GetMapping("/my")
    public List<BookingResponse> myBookings(
            @AuthenticationPrincipal UserDetailsImpl principal) {

        return bookingService.getGuestBookings(
                principal.getId());
    }

    @PutMapping("/{id}/cancel")
    public BookingResponse cancel(
            @PathVariable Long id,
            @AuthenticationPrincipal UserDetailsImpl principal) {

        User user = new User();
        user.setId(principal.getId());

        return bookingService.cancelBooking(
                id,
                user);
    }
}
