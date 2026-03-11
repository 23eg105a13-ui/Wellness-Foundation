package com.wellness.controller;

import com.wellness.model.User;
import com.wellness.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/me")
    public ResponseEntity<User> getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        return userRepository.findByEmail(email)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/profile")
    public ResponseEntity<User> updateProfile(@RequestBody User profileUpdate, Authentication authentication) {
        System.out
                .println("Updating profile for user: " + (authentication != null ? authentication.getName() : "null"));
        if (authentication == null) {
            return ResponseEntity.status(401).build();
        }
        String email = authentication.getName();
        return userRepository.findByEmail(email).map(user -> {
            System.out.println("Found user: " + user.getEmail() + ". Updating fields.");
            user.setName(profileUpdate.getName());
            user.setBio(profileUpdate.getBio());
            user.setHealthFocus(profileUpdate.getHealthFocus());
            user.setLocation(profileUpdate.getLocation());
            user.setAge(profileUpdate.getAge());
            user.setGender(profileUpdate.getGender());
            userRepository.save(user);
            return ResponseEntity.ok(user);
        }).orElse(ResponseEntity.notFound().build());
    }
}
