package com.learnedge.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long tutorId;

    private String password;
    private String tutorName;
    private String tutorEmail;
    private String phoneNumber;

    //Getters and Setters
    public Long getTutorId() {
        return tutorId;
    }

    public void setTutorId(Long tutorId) {
        this.tutorId = tutorId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTutorName() {
        return tutorName;
    }

    public void setTutorName(String tutorName) {
        this.tutorName = tutorName;
    }

    public String getTutorEmail() {
        return tutorEmail;
    }

    public void setTutorEmail(String tutorEmail) {
        this.tutorEmail = tutorEmail;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    //Constructor
    public Tutor(Long tutorId, String password, String tutorName, String tutorEmail, String phoneNumber) {
        this.tutorId = tutorId;
        this.password = password;
        this.tutorName = tutorName;
        this.tutorEmail = tutorEmail;
        this.phoneNumber = phoneNumber;
    }
    public Tutor(){

    }
}
