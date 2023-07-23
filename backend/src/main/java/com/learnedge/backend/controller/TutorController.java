package com.learnedge.backend.controller;

import com.learnedge.backend.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tutor")
public class TutorController {
    @Autowired
    TutorService tutorService;
    @GetMapping
    public String back(){
        return tutorService.hello();
    }
    @GetMapping("/profile")
    public String Hello(){
        return "Profile is under development process";
    }
}
