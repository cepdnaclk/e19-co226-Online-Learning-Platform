package com.learnedge.backend.service;

import com.learnedge.backend.entity.Course;
import com.learnedge.backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService{
    @Autowired
    private CourseRepository courseRepository;

    //Take all the courses
    @Override
    public List<Course> fetchCoursesList() {
        return courseRepository.findAll();
    }

    //Take courses Based on the tutorId
    @Override
    public List<Course> fetchCoursesByTutorId(Long tutorId){
        return courseRepository.getCoursesByTutorId(tutorId);
    }

    @Override
    public Course saveCourse(Course course) {
        return courseRepository.save(course);
    }

    @Override
    public List <Course> findUnenrolledCourses(Long userId){
        return courseRepository.findUnenrolledCoursesByUserId(userId);
    }

    @Override
    public List <Course> findEnrolledCourses(Long userId){
        return courseRepository.findEnrolledCoursesByUserId(userId);
    }
}
