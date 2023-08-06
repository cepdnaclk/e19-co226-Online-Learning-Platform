package com.learnedge.backend.service;

import com.learnedge.backend.entity.User;
import com.learnedge.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }
    @Override
    public List<User> fetchUsersList() {
        return userRepository.findAll();
    }
    @Override
    public User fetchUserById(Long userId) {
        return userRepository.findById(userId).get();
    }

    @Override
    public boolean authenticateUser(Long userId, String password) {
        User user = userRepository.findByUserId(userId);
        return user != null && user.getPassword().equals(password);
    }
}
