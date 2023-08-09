package com.learnedge.backend.controller;

import com.learnedge.backend.entity.Tutor;
import com.learnedge.backend.request.LoginRequestTutor;
import com.learnedge.backend.service.TutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @GetMapping("/email/{email}")
    public Tutor fetchTutorByEmail(@PathVariable("email") String email ){
        return tutorService.fetchTutorByEmail(email);
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequestTutor loginRequestTutor) {
        String TutorEmail = loginRequestTutor.getTutorEmail();
        String password = loginRequestTutor.getPassword();

        if (tutorService.authenticateUser(TutorEmail, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
