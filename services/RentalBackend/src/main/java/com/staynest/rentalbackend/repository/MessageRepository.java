package com.staynest.rentalbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.staynest.rentalbackend.entity.Message;

import java.util.List;

@Repository
public interface MessageRepository
        extends JpaRepository<Message, Long> {

    List<Message> findByBooking_IdOrderBySentAtAsc(
            Long bookingId);
}
