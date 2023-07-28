package com.learnedge.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;
@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studentId;

    private String password;
    private String firstName;
    private String lastName;
    private String studentEmail;
    private String phoneNumber;
    private Date dateRegistered;
    private Date dateOfBirth;

}
