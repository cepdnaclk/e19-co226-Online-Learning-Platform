package com.learnedge.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.learnedge.backend.service.UserService;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;
    @GetMapping
    public String back(){
        return userService.back();
    }
    @GetMapping("/profile")
    public String Hello(){
        return "Profile is under API development process";
    }

}
