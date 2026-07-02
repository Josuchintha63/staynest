package com.staynest.rentalbackend.entity;


import jakarta.persistence.*;

@Entity
@Table(name = "property_amenities")
public class PropertyAmenity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "property_id", nullable = false)
    private Property property;

    @Column(name = "amenity_name", nullable = false)
    private String amenityName;

    public PropertyAmenity() {
    }

    public PropertyAmenity(Property property,
                           String amenityName) {
        this.property = property;
        this.amenityName = amenityName;
    }

    public Long getId() {
        return id;
    }

    public Property getProperty() {
        return property;
    }

    public void setProperty(Property property) {
        this.property = property;
    }

    public String getAmenityName() {
        return amenityName;
    }

    public void setAmenityName(String amenityName) {
        this.amenityName = amenityName;
    }
}