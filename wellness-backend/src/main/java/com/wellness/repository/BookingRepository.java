package com.wellness.repository;

import com.wellness.model.Booking;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Component
public class BookingRepository {
    private final Map<Long, Booking> bookings = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(1);

    public Booking save(Booking booking) {
        if (booking.getId() == null) {
            booking.setId(idGenerator.getAndIncrement());
        }
        System.out.println("Saving booking to map: " + booking.getId());
        bookings.put(booking.getId(), booking);
        return booking;
    }

    public List<Booking> findByUserEmail(String email) {
        return bookings.values().stream()
                .filter(b -> b.getUserEmail().equals(email))
                .collect(Collectors.toList());
    }

    public List<Booking> findAll() {
        return new ArrayList<>(bookings.values());
    }
}
