package com.learnedge.backend.service;

import com.learnedge.backend.entity.Course;

import java.util.List;

public interface CourseService {
    List<Course> fetchCoursesList();

    Course saveCourse(Course course);
}
