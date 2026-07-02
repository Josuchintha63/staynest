package com.staynest.rentalbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.staynest.rentalbackend.entity.HostApplication;

import java.util.List;

@Repository
public interface HostApplicationRepository
        extends JpaRepository<HostApplication, Long> {

    List<HostApplication> findByStatus(
            String status);

    List<HostApplication> findByUser_Id(
            Long userId);
}
