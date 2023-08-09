package com.learnedge.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long courseId;

    private String courseName;
    private String courseCategory;
    //Programming, Artificial Intelligence, History, Machine Learning, Law, Web Development, other(default) --> Update this with more categories
    private String price;

    @ManyToOne(
            cascade = CascadeType.MERGE,
            fetch = FetchType.LAZY
    )
    @JoinColumn(
            name = "tutorId",
            referencedColumnName = "tutorId"
    )
    private Tutor tutor;
}
