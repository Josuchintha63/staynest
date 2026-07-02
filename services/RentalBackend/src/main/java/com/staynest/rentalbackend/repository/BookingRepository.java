package com.staynest.rentalbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.staynest.rentalbackend.entity.Booking;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {

	List<Booking> findByGuest_Id(Long guestId);

	List<Booking> findByProperty_Id(Long propertyId);

	List<Booking> findByStatus(String status);

	@Query("""
			SELECT CASE
			WHEN COUNT(b)>0
			THEN true
			ELSE false
			END
			FROM Booking b
			WHERE b.property.id=:propertyId
			AND b.status='CONFIRMED'
			AND (
			    b.checkIn < :checkOut
			    AND
			    b.checkOut > :checkIn
			)
			""")
	boolean existsOverlappingBooking(Long propertyId, LocalDate checkIn, LocalDate checkOut);
}
