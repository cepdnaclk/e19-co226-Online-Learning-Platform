package com.learnedge.backend.controller;

import com.learnedge.backend.entity.Tutor;
import com.learnedge.backend.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/tutor")
public class TutorController {
    @Autowired
    private TutorService tutorService;

    @PostMapping("/addtutor") //To add a tutor to the database
    public Tutor addTutor(@RequestBody Tutor tutor){
        return tutorService.saveTutor(tutor);
    }
}
