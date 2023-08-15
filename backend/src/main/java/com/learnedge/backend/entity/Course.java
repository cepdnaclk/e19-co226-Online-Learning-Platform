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
    //Programming, Artificial Intelligence, History, Machine Learning, Law, Web Development, Science, other(default) --> Update this with more categories
    private String price;

    private String courseDescription;

    @ManyToOne(
            cascade = CascadeType.MERGE,
            fetch = FetchType.EAGER   //IMPORTANT
    )
    @JoinColumn(
            name = "tutorId",
            referencedColumnName = "tutorId"
    )
    private Tutor tutor;
}
