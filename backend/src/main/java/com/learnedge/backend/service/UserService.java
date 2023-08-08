package com.learnedge.backend.service;

import com.learnedge.backend.entity.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    List<User> fetchUsersList();

    User fetchUserById(Long userId);

    boolean authenticateUser(String userEmail, String password);

    User fetchUserByEmail(String email);
}
