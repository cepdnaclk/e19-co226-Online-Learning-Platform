import React from "react";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

import generalImage from '../components/images/courseImages/default.jpg'  //Image when category cannot be identified
import ProgrammingImage from '../components/images/courseImages/programming.jpg'
import aiImage from '../components/images/courseImages/ai.jpg'
import LawImage from '../components/images/courseImages/law.jpg'
import MachineLearning from '../components/images/courseImages/machineLearning.jpg'
import WebImage from '../components/images/courseImages/web.jpg'
import HistoryImage from '../components/images/courseImages/history.jpg'

import Card from '../components/Card';

function UserDashboard() {

    const userEmail = localStorage.getItem('userEmail');

    //To Store User Details
    const [userDetails, setUserDetails] = useState([])

    //To store Registered Course Details
    const [regCourseList, setRegCourses] = useState([])

    //Take the User Details from backend
    useEffect(() => {
        loadUserDetails();

    }, [])

    const loadUserDetails = async () => {
        try {
            const url = `http://localhost:9081/user/email/${userEmail}`;
            const user = await axios.get(url);

            setUserDetails(user.data);
            localStorage.setItem('userID', user.data.userId);
            loadRegCourses(user.data.userId);
        }
        catch (error) {
            console.error("Error fetching User Details:", error);
        }
    };

    const loadRegCourses = async (userId) => {
        try {
            const listOfRegCourses = await axios.get(`http://localhost:9081/user/regCourses/${userId}`);

            const mappedCourses = listOfRegCourses.data.map((course) => {

                //Change image based on the course category
                let imageSource;
                switch (course.courseCategory) {
                    case "Programming":
                        imageSource = ProgrammingImage;
                        break;
                    case "Artificial Intelligence":
                        imageSource = aiImage;
                        break;
                    case "History":
                        imageSource = HistoryImage;
                        break;
                    case "Machine Learning":
                        imageSource = MachineLearning;
                        break;
                    case "Law":
                        imageSource = LawImage;
                        break;
                    case "Web Development":
                        imageSource = WebImage;
                        break;
                    default:
                        imageSource = generalImage;
                        break;
                }

                return {
                    courseName: course.courseName,
                    category: course.courseCategory,
                    price: course.price,
                    buttonText: "View",
                    imageSrc: imageSource
                };
            });

            setRegCourses(mappedCourses);
        }

        catch (error) {
            console.error("Error fetching Registered Courses:", error);
        }
    };

    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}

                <h1 className='text-2xl'>User My courses content</h1>
                <p>Welcome: {userDetails.firstName}</p>

                {regCourseList.map((course, index) => (
                    <div className='p-2' key={index}>
                        <Card
                            imageSrc={course.imageSrc}
                            title={course.courseName}
                            subTitle={course.category}
                            greenText={course.price}
                            buttonText={course.buttonText}
                        />
                    </div>
                ))}






            </div>
            <Footer2 />
        </>
    )
}

export default UserDashboard