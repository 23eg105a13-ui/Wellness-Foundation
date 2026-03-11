package com.wellness.repository;

import com.wellness.model.User;
import org.springframework.stereotype.Component;

import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

@Component
public class UserRepository {
    private final Map<String, User> usersByEmail = new ConcurrentHashMap<>();
    private final AtomicLong idGenerator = new AtomicLong(1);

    public User save(User user) {
        if (user.getId() == null) {
            user.setId(idGenerator.getAndIncrement());
            System.out.println("Generating new ID: " + user.getId() + " for user: " + user.getEmail());
        }
        usersByEmail.put(user.getEmail(), user);
        System.out.println("Saved user to memory: " + user.getEmail() + ". Total users: " + usersByEmail.size());
        return user;
    }

    public Optional<User> findByEmail(String email) {
        System.out.println("Looking up user by email: " + email);
        return Optional.ofNullable(usersByEmail.get(email));
    }

    public Optional<User> findById(Long id) {
        return usersByEmail.values().stream()
                .filter(u -> u.getId().equals(id))
                .findFirst();
    }

    public void delete(User user) {
        usersByEmail.remove(user.getEmail());
    }
}
