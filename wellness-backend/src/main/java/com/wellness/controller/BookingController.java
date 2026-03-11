package com.wellness.controller;

import com.wellness.model.Booking;
import com.wellness.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingRepository bookingRepository;

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody Booking booking, Authentication authentication) {
        System.out.println("Creating booking for user: " + authentication.getName());
        System.out.println("Booking data: " + booking.getPractitionerName() + " on " + booking.getDateTime());
        booking.setUserEmail(authentication.getName());
        Booking saved = bookingRepository.save(booking);
        System.out.println("Booking saved with ID: " + saved.getId());
        return ResponseEntity.ok(saved);
    }

    @GetMapping("/my")
    public ResponseEntity<List<Booking>> getMyBookings(Authentication authentication) {
        String email = authentication.getName();
        return ResponseEntity.ok(bookingRepository.findByUserEmail(email));
    }
}
