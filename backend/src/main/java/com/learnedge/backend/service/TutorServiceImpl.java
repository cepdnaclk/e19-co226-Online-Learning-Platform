package com.learnedge.backend.service;

import com.learnedge.backend.entity.Tutor;
import com.learnedge.backend.repository.TutorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TutorServiceImpl implements TutorService{
    @Autowired
    private TutorRepository tutorRepository;

    @Override
    public Tutor saveTutor(Tutor tutor) {
        return tutorRepository.save(tutor);
    }

    @Override
    public Tutor fetchTutorByEmail(String email) {
        return tutorRepository.findByTutorEmail(email);
    }

    @Override
    public boolean authenticateUser(String tutorEmail, String password) {
        Tutor tutor = tutorRepository.findByTutorEmail(tutorEmail);
        return tutor != null && tutor.getPassword().equals(password);
    }

}
