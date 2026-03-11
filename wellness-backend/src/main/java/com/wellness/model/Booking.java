package com.wellness.model;

import java.time.LocalDateTime;

public class Booking {
    private Long id;
    private String userEmail;
    private String practitionerName;
    private String practitionerTitle;
    private String dateTime;
    private String type; // video, phone, inperson
    private String status; // UPCOMING, COMPLETED, CANCELLED
    private LocalDateTime createdAt;

    public Booking() {
        this.createdAt = LocalDateTime.now();
        this.status = "UPCOMING";
    }

    public Booking(Long id, String userEmail, String practitionerName, String practitionerTitle, String dateTime,
            String type) {
        this.id = id;
        this.userEmail = userEmail;
        this.practitionerName = practitionerName;
        this.practitionerTitle = practitionerTitle;
        this.dateTime = dateTime;
        this.type = type;
        this.status = "UPCOMING";
        this.createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getPractitionerName() {
        return practitionerName;
    }

    public void setPractitionerName(String practitionerName) {
        this.practitionerName = practitionerName;
    }

    public String getPractitionerTitle() {
        return practitionerTitle;
    }

    public void setPractitionerTitle(String practitionerTitle) {
        this.practitionerTitle = practitionerTitle;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
