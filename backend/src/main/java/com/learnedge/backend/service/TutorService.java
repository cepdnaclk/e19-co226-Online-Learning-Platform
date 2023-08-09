package com.learnedge.backend.service;

import com.learnedge.backend.entity.Tutor;
import com.learnedge.backend.entity.User;

public interface TutorService {
    public Tutor saveTutor(Tutor tutor);

    Tutor fetchTutorByEmail(String email);

    boolean authenticateUser(String tutorEmail, String password);
}
