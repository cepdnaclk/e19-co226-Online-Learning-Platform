package com.learnedge.backend.controller;

import com.learnedge.backend.entity.Course;
import com.learnedge.backend.entity.User;
import com.learnedge.backend.request.LoginRequest;
import com.learnedge.backend.service.CourseService;
import com.learnedge.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/user")
public class UserController {
    @Autowired   //Dependancy Injection
    private UserService userService;

    @Autowired   //Dependancy Injection
    private CourseService courseService;

    //To add a user to the database table
    @PostMapping("/adduser")
    public User saveUser(@RequestBody User user){
        return userService.saveUser(user);
    }

    //To take all the users
    @GetMapping("/getusers")
    public List <User> fetchUsersList(){
        return userService.fetchUsersList();
    }

    //To take a user based on userId
    @GetMapping("/{id}")
    public User fetchUserById(@PathVariable("id") Long userId ){
        return userService.fetchUserById(userId);
    }

    //To take a user based on useremail
    @GetMapping("/email/{email}")
    public User fetchUserByEmail(@PathVariable("email") String email ){
        return userService.fetchUserByEmail(email);
    }

    //Take the courses which are not registered by the user
    //A user is Identified by the Email address
    @GetMapping("/notRegCourses/{id}")
    public List<Course> getNotRegCourses( @PathVariable("id") Long userId ){
        return courseService.findUnenrolledCourses(userId);
    }

    @GetMapping("/regCourses/{id}")
    public List<Course> getRegCourses( @PathVariable("id") Long userId ){
        return courseService.findEnrolledCourses(userId);
    }

    //Validate login of the user
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
        String userEmail = loginRequest.getUserEmail();
        String password = loginRequest.getPassword();

        if (userService.authenticateUser(userEmail, password)) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }





}
