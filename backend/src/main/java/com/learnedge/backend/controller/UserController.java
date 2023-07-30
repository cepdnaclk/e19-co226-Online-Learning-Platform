package com.learnedge.backend.controller;

import com.learnedge.backend.entity.User;
import com.learnedge.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/user")
public class UserController {
    @Autowired   //Dependancy Injection
    private UserService userService;

    @GetMapping("/profile")
    public String Hello(){
        return "Profile is under API development process";
    }
    @PostMapping("/adduser")  //To add a user to the database table
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }
    @GetMapping("/getusers")
    public List <User> fetchUsersList(){
        return userService.fetchUsersList();
    }
    @GetMapping("/{id}")
    public User fetchUserById(@PathVariable("id") Long userId ){
        return userService.fetchUserById(userId);
    }
}
