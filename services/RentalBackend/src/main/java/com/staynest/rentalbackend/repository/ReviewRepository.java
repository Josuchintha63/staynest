package com.staynest.rentalbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.staynest.rentalbackend.entity.Review;

import java.util.List;

@Repository
public interface ReviewRepository
        extends JpaRepository<Review, Long> {

    List<Review> findByProperty_Id(Long propertyId);

    List<Review> findByGuest_Id(Long guestId);

    boolean existsByBooking_Id(Long bookingId);
}