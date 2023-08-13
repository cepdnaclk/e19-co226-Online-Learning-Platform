package com.learnedge.backend.service;

import com.learnedge.backend.entity.Course;

import java.util.List;

public interface CourseService {
    List<Course> fetchCoursesList();

    List<Course> fetchCoursesByTutorId(Long tutorId);

    Course saveCourse(Course course);

    List <Course> findUnenrolledCourses(Long userId);

    List <Course> findEnrolledCourses(Long userId);
}
