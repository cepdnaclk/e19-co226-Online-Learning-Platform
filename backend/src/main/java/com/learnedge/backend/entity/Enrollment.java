package com.learnedge.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Enrollment {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        private Long enrollmentId;

        @ManyToOne
        @JoinColumn(name = "userId")
        private User user;

        @ManyToOne
        @JoinColumn(name = "courseId")
        private Course course;

        private Date enrollmentDate;
}
