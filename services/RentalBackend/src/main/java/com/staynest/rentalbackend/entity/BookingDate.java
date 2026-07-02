package com.staynest.rentalbackend.entity;


import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "booking_dates")
public class BookingDate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "property_id")
    private Long propertyId;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private boolean booked = true;

    public BookingDate() {
    }

    public BookingDate(Long propertyId,
                       LocalDate date) {
        this.propertyId = propertyId;
        this.date = date;
        this.booked = true;
    }

    public Long getId() {
        return id;
    }

    public Long getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(Long propertyId) {
        this.propertyId = propertyId;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public boolean isBooked() {
        return booked;
    }

    public void setBooked(boolean booked) {
        this.booked = booked;
    }
}
