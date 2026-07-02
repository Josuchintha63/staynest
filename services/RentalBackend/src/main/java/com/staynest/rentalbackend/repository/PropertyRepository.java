package com.staynest.rentalbackend.repository;




import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.staynest.rentalbackend.entity.Property;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface PropertyRepository extends JpaRepository<Property, Long> {

	List<Property> findByHost_Id(Long hostId);

    List<Property> findByStatus(String status);

    List<Property> findByCityContainingIgnoreCase(String city);

    List<Property> findByPropertyType(String propertyType);


    
    List<Property> findByPricePerNightBetween(
            BigDecimal min,
            BigDecimal max);

    List<Property> findByStatusAndCityContainingIgnoreCase(
            String status,
            String city);
}
