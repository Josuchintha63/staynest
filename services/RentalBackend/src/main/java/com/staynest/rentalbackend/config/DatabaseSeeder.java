package com.staynest.rentalbackend.config;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.staynest.rentalbackend.entity.HostApplication;
import com.staynest.rentalbackend.entity.Property;
import com.staynest.rentalbackend.entity.User;
import com.staynest.rentalbackend.repository.HostApplicationRepository;
import com.staynest.rentalbackend.repository.PropertyRepository;
import com.staynest.rentalbackend.repository.UserRepository;

import java.math.BigDecimal;

@Component
public class DatabaseSeeder implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PropertyRepository propertyRepository;
    private final HostApplicationRepository hostApplicationRepository;
    private final PasswordEncoder passwordEncoder;

    public DatabaseSeeder(UserRepository userRepository,
                          PropertyRepository propertyRepository,
                          HostApplicationRepository hostApplicationRepository,
                          PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.propertyRepository = propertyRepository;
        this.hostApplicationRepository = hostApplicationRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            // Seed Users
            User admin = new User(
                "admin@staynest.com",
                passwordEncoder.encode("password"),
                "Alice Admin",
                "SUPER_ADMIN",
                "ACTIVE"
            );
            admin.setEmailVerified(true);
            userRepository.save(admin);

            User guest = new User(
                "guest@staynest.com",
                passwordEncoder.encode("password"),
                "John Guest",
                "GUEST",
                "ACTIVE"
            );
            guest.setEmailVerified(true);
            userRepository.save(guest);

            User host = new User(
                "host@staynest.com",
                passwordEncoder.encode("password"),
                "Harry Host",
                "HOST",
                "ACTIVE"
            );
            host.setEmailVerified(true);
            userRepository.save(host);

            // Seed Properties
            Property prop1 = new Property();
            prop1.setTitle("Luxury Beach Villa");
            prop1.setDescription("Scenic oceanfront villa in Goa with private pool");
            prop1.setAddress("Candolim Beach Road");
            prop1.setCity("Goa");
            prop1.setCountry("India");
            prop1.setLatitude(15.5164);
            prop1.setLongitude(73.7632);
            prop1.setPropertyType("Villa");
            prop1.setPricePerNight(new BigDecimal("12000.00"));
            prop1.setCleaningFee(new BigDecimal("1500.00"));
            prop1.setServiceFeeRate(new BigDecimal("0.05"));
            prop1.setStatus("ACTIVE");
            prop1.setHost(host);
            propertyRepository.save(prop1);

            Property prop2 = new Property();
            prop2.setTitle("Mountain View Cabin");
            prop2.setDescription("Cozy wooden chalet overlooking the snow peaks of Manali");
            prop2.setAddress("Mall Road Alpine Heights");
            prop2.setCity("Manali");
            prop2.setCountry("India");
            prop2.setLatitude(32.2396);
            prop2.setLongitude(77.1887);
            prop2.setPropertyType("Cabin");
            prop2.setPricePerNight(new BigDecimal("8500.00"));
            prop2.setCleaningFee(new BigDecimal("1000.00"));
            prop2.setServiceFeeRate(new BigDecimal("0.05"));
            prop2.setStatus("ACTIVE");
            prop2.setHost(host);
            propertyRepository.save(prop2);

            Property prop3 = new Property();
            prop3.setTitle("Downtown City Apartment");
            prop3.setDescription("Modern studio apartment in the center of Hyderabad");
            prop3.setAddress("Jubilee Hills Rd 36");
            prop3.setCity("Hyderabad");
            prop3.setCountry("India");
            prop3.setLatitude(17.4325);
            prop3.setLongitude(78.4071);
            prop3.setPropertyType("Apartment");
            prop3.setPricePerNight(new BigDecimal("5000.00"));
            prop3.setCleaningFee(new BigDecimal("500.00"));
            prop3.setServiceFeeRate(new BigDecimal("0.05"));
            prop3.setStatus("ACTIVE");
            prop3.setHost(host);
            propertyRepository.save(prop3);

            Property prop4 = new Property();
            prop4.setTitle("Penthouse overlooking Marine Drive");
            prop4.setDescription("Luxury penthouse with panoramic views of the Arabian Sea");
            prop4.setAddress("Marine Drive Near Air India Bldg");
            prop4.setCity("Mumbai");
            prop4.setCountry("India");
            prop4.setLatitude(18.9284);
            prop4.setLongitude(72.8230);
            prop4.setPropertyType("Apartment");
            prop4.setPricePerNight(new BigDecimal("18000.00"));
            prop4.setCleaningFee(new BigDecimal("2000.00"));
            prop4.setServiceFeeRate(new BigDecimal("0.05"));
            prop4.setStatus("ACTIVE");
            prop4.setHost(host);
            propertyRepository.save(prop4);

            // Seed Host Applications
            HostApplication app1 = new HostApplication();
            app1.setUser(guest);
            app1.setJustification("I own 3 villas in Kerala and want to start hosting tourists.");
            app1.setStatus("PENDING");
            hostApplicationRepository.save(app1);

            HostApplication app2 = new HostApplication();
            app2.setUser(host);
            app2.setJustification("Boutique hotel manager seeking to list deluxe suites in Shimla.");
            app2.setStatus("PENDING");
            hostApplicationRepository.save(app2);

            System.out.println("StayNest seed data loaded successfully!");
        }
    }
}
