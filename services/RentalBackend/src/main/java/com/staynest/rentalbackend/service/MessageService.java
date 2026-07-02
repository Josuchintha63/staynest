package com.staynest.rentalbackend.service;


import org.springframework.stereotype.Service;

import com.staynest.rentalbackend.dto.MessageRequest;
import com.staynest.rentalbackend.entity.Booking;
import com.staynest.rentalbackend.entity.Message;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.repository.BookingRepository;
import com.staynest.rentalbackend.repository.MessageRepository;
import com.staynest.rentalbackend.exception.BadRequestException;

import java.util.List;

@Service
public class MessageService {

    private final MessageRepository messageRepository;
    private final BookingRepository bookingRepository;

    public MessageService(
            MessageRepository messageRepository,
            BookingRepository bookingRepository) {

        this.messageRepository = messageRepository;
        this.bookingRepository = bookingRepository;
    }

    public Message sendMessage(
            MessageRequest request,
            User sender) {

        Booking booking =
                bookingRepository
                        .findById(request.getBookingId())
                        .orElseThrow(() ->
                                new BadRequestException(
                                        "Booking not found"));

        Message message = new Message();

        message.setBooking(booking);
        message.setSender(sender);
        message.setMessage(request.getMessage());

        return messageRepository.save(message);
    }

    public List<Message> getMessages(
            Long bookingId) {

        return messageRepository
                .findByBooking_IdOrderBySentAtAsc(
                        bookingId);
    }
}