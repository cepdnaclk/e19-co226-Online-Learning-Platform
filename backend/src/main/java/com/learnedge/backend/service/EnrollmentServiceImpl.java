package com.learnedge.backend.service;

import com.learnedge.backend.entity.Enrollment;
import com.learnedge.backend.repository.EnrollmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EnrollmentServiceImpl implements EnrollmentService{
    @Autowired
    private EnrollmentRepository enrollmentRepository;


    @Override
    public Enrollment saveEnrollment(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }
}
