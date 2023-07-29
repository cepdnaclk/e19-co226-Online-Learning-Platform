package com.learnedge.backend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Tutor {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long tutorId;

    private String password;
    private String tutorName;
    private String tutorEmail;
    private String phoneNumber;


}
