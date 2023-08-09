package com.learnedge.backend.controller;

import com.learnedge.backend.entity.Enrollment;
import com.learnedge.backend.service.EnrollmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/enroll")
public class EnrollmentController {

    @Autowired
    private EnrollmentService enrollmentService;

    @PostMapping("/addenroll")
    public Enrollment saveEnrollment(@RequestBody Enrollment enrollment){
        return enrollmentService.saveEnrollment(enrollment);
    }
}
