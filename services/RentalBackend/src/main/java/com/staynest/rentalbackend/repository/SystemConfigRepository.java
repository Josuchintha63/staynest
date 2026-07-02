package com.staynest.rentalbackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.staynest.rentalbackend.entity.SystemConfig;

import java.util.Optional;

@Repository
public interface SystemConfigRepository
        extends JpaRepository<SystemConfig, Long> {

    Optional<SystemConfig> findByConfigKey(
            String configKey);
}