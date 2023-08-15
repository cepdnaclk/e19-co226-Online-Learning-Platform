---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e19-co226-Online-Learning-Platform
title: LearnEdge
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# LearnEdge - <i>Learn Anytime Anywhere</i>
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/448e60c5-6893-4546-8547-f66f5e59c317"/>

## Team
-  E/19/095, Edirisinghe E.M.L.K., [email](mailto:e19095@eng.pdn.ac.lk)
-  E/19/253, Narasinghe N.K.B.I.U., [email](mailto:e19253@eng.pdn.ac.lk)
-  E/19/306, Rajakaruna M.M.P.N., [email](mailto:e19306@eng.pdn.ac.lk)

## Table of Contents
1. [Introduction](#introduction)
2. [ER Diagram](#er-diagram)
3. [Relational Mapping](#relational-mapping)
4. [Tech Stack](#tech-stack)
5. [Connecting Spring Boot with React](#connecting-spring-boot-with-react)
6. [User Interface](#user-interface)
7. [Additional Features](#additional-features)
8. [Links](#links)

---

## Introduction
### About 🌐
Our online learning platform is a cutting-edge educational hub that aims to revolutionize the way people acquire knowledge and skills. With a user-friendly interface and a vast array of courses, we provide learners of all ages and backgrounds with the opportunity to explore diverse subjects and foster personal growth. Our mission is to make education accessible, engaging, and enjoyable, empowering individuals to achieve their full potential. <b>Learn Anytime Anywhere</b>

### Problem 🔍
Traditional education often presents barriers to learning, such as limited access to quality courses, rigid schedules, and high costs. Additionally, the fast-paced nature of modern life demands flexible learning options that can accommodate various lifestyles. Furthermore, the lack of interactivity and personalized teaching in conventional settings can hinder students' understanding and motivation. Our online learning platform was born to address these challenges and bridge the gap between knowledge seekers and high-quality education.

### Solution 💡
Our online learning platform offers a revolutionary solution to the drawbacks of traditional education. By providing a vast library of courses spanning various disciplines, learners can pick subjects that genuinely interest them and learn at their own pace. The platform also features interactive elements, including discussion forums, assignments, fostering a dynamic learning community. Additionally, our affordable pricing model ensures that cost is not a barrier to obtaining valuable knowledge and skills. Through cutting-edge technology and a dedication to excellence, we are redefining the future of learning, empowering learners to shape their educational journey according to their unique needs and aspirations.

## ER Diagram
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/dd3f3b1f-d20f-49ce-b9b8-9ec2444617cc" width=1200 />

## Relational Mapping
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115540884/21819c86-4076-4266-adce-1dda2c7bd65f" width=800 />

## Tech Stack

### <u>Front End</u>

Technologies Used: React, Javascript, HTML5, TailwindCSS

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/ad663d60-b7bd-4703-9b33-7a2b4837e536" width=250 />

#### React :
- React is a popular JavaScript library for building user interfaces.
- It allows developers to create reusable UI components and efficiently manage the dynamic rendering of data-driven views in web applications.

#### JavaScript :
- JavaScript is a versatile programming language primarily used for web development.
- It enables interactive and dynamic content on websites, offering capabilities for both front-end and back-end development through frameworks like <b>Node.js.</b>

#### Tailwind CSS :
- Tailwind CSS is a utility-first CSS framework that streamlines web development by providing a set of pre-designed classes to style elements.
- It enables rapid UI design and customization while promoting consistency in styling across projects.

#### HTML5 :
- HTML5 is the latest version of Hypertext Markup Language, used to structure and present content on the web.
- It introduces new features like semantic elements, multimedia support, and improved forms for enhanced user experiences.

### <u>Back End</u>

Technologies Used: Springboot, Node.js, MySQL

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/050b5fe8-890d-455f-9cdc-f91d0f410445" width=350 />

#### Spring Boot :
- Spring Boot is a Java-based framework that simplifies the process of building production-ready web applications.
- It provides a set of tools and conventions for rapid development and easy configuration.

#### Node.js :
- Node.js is a server-side JavaScript runtime environment.
- It allows developers to build scalable and high-performance network applications, making it well-suited for creating real-time web applications.

#### MySQL :
- MySQL is an open-source relational database management system.
- It is widely used for storing and managing structured data in various types of applications, from small websites to large enterprise systems.

## Connecting Spring Boot with React:

1. API Endpoints:
- Spring Boot defines a set of API endpoints that the React frontend can call.
- These endpoints are usually implemented using controllers and mapped to specific URLs.
- Each endpoint corresponds to a specific action, such as retrieving data, updating information, or submitting forms.

2. HTTP Requests:
- React frontend uses various HTTP methods (such as GET, POST, PUT, DELETE) to send requests to the Spring Boot backend.
- For instance, when fetching data, React sends a GET request to the appropriate endpoint. When submitting a form, it might send a POST request with the form data.

3. Data Transfer:
- Data is transferred between the frontend and backend using JSON (JavaScript Object Notation) format.
- Spring Boot serializes and deserializes JSON data to Java objects, while React uses JavaScript objects to work with the data.

4. CORS (Cross-Origin Resource Sharing):
- Due to security restrictions in web browsers, frontend and backend may be hosted on different domains.
- CORS headers need to be properly configured on the backend to allow cross-origin requests from the React frontend.

5. State Management:
- React manages its own state using tools like React's built-in state or third-party libraries like Redux.
- The backend manages its own state and data storage, such as in a database.

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/ea614eb1-698f-4089-9148-f1010d3e7758" width=300/>

## User Interface

1. Home Page

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/ca1dec5a-a2bf-4236-8724-9f8ccb7a5202" width=1200/> 
<br><br><br>

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/3e111129-d0cc-4250-ae3d-be674c3871b3" width=1200/> 
<br><br><br>

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/87104de8-0421-4b32-b426-2b548c56954c" width=1200/> 
<br><br><br>

2. User Page

- User Login Page
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/175935b0-0787-4320-bff0-67d4c8ee0ebf" width=1200/>
<br><br>

- User Dashboard 
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/0af6b642-1119-4f7e-a775-564584a62e3c" width=1200/>
<br><br>

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/65a8d192-1c72-40fe-bff8-7b8af6e0d6ea" width=1200/>
<br><br>

3. Tutor Page

- Tutor Login Page
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/2c9a3357-dfeb-42f5-9223-a126ab0eccc4" width=1200/>
<br><br>

- Tutor Dashboard 
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/f41d9750-eeed-4a5b-9314-4a784145c56c" width=1200/>
<br><br>

<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/2586cc94-c990-4fba-a7bf-7ac24df37243" width=1200/>
<br><br>

## Additional Features
- Upon the completion and submission of the 'Contact Us' form, a mail is send with the form details

### "Contact Us form"
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/39701b13-211b-4f1d-aa88-1c9388d4a43f" width=1200/>

### Email
<img src="https://github.com/cepdnaclk/e19-co226-Online-Learning-Platform/assets/115539769/ac4dbc5d-44b8-4e15-add1-076f9dc5b0be" width=600/>

## Links
- [Project Repository](https://github.com/cepdnaclk/{{ page.repository-name }}){:target="_blank"}
- [Project Page](https://cepdnaclk.github.io/{{ page.repository-name}}){:target="_blank"}
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
