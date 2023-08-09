package com.learnedge.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;
import java.util.ArrayList;

import java.util.Date;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long userId;

    private String password;
    private String firstName;
    private String lastName;
    private String userEmail;
    private String phoneNumber;
    private Date dateRegistered; //JSON Date Format: YYYY-MM-DD
    private Date dateOfBirth; //JSON Date Format: YYYY-MM-DD


}