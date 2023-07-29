package com.learnedge.backend.service;

import com.learnedge.backend.entity.User;

import java.util.List;

public interface UserService {
    public User saveUser(User user);

    public List<User> fetchUsersList();

    public User fetchUserById(Long userId);
}
