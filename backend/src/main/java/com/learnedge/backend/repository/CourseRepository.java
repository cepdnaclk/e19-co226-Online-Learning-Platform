package com.learnedge.backend.repository;

import com.learnedge.backend.entity.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Long> {
    @Query(
            value = "SELECT c.* FROM course c WHERE c.tutor_id=:tutorId",
            nativeQuery = true
    )
    List<Course> getCoursesByTutorId(Long tutorId);

    @Query(
            value = "SELECT c.* FROM course c " +
                    "LEFT JOIN enrollment e ON c.course_id = e.course_id AND e.user_id = :userId " +
                    "WHERE e.course_id IS NULL",
            nativeQuery = true
    )
    List<Course> findUnenrolledCoursesByUserId(@Param("userId") Long userId);

    @Query(
            value = "SELECT c.* FROM course c " +
                    "INNER JOIN enrollment e ON c.course_id = e.course_id AND e.user_id = :userId",
            nativeQuery = true
    )
    List<Course> findEnrolledCoursesByUserId(@Param("userId") Long userId);

}