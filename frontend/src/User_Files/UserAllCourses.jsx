import React from 'react'
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

function UserAllCourses() {

    //Take the User Id from the Local Storage
    const userID = localStorage.getItem('userID');

    //Set the Courses List
    const [courseList, setCourses] = useState([])

    useEffect(() => {
        loadUnregCourses();
    }, [])

    const loadUnregCourses = async () => {
        try {
            //Take the List of Not registered Courses
            const listOfNotRegCourses = await axios.get(`http://localhost:9081/user/notRegCourses/${userID}`);

            const mappedCourses = listOfNotRegCourses.data.map((course) => {

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

            setCourses(mappedCourses);
        }

        catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none grid grid-cols-4 gap-4'>
                {/* content goes inside this div */}

                {courseList.map((course, index) => (
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






                {/* Course 1 card*/}
                {/* <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/machineLearning">
                        <img class=" rounded-t-lg" src={img1} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                        <a href="/machineLearning">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Data Analytics Professional Certificate</h5>
                            <span class="text-l font-extralight text-gray-900 dark:text-white">Course Catagory: Data Science</span>
                        </a>
                        <div class="flex items-center justify-between pt-5">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/machineLearning" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enroll</a>
                        </div>
                    </div>
                </div> */}


                {/* Course 2 card */}
                {/* 
                <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="/pythonProgramming">
                        <img class="rounded-t-lg" src={img2} alt="product image" />
                    </a>
                    <div class="px-5 pb-5">
                        <a href="/pythonProgramming">
                            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Python 3 Programming Specialization</h5>
                            <span class="text-l font-extralight text-gray-900 dark:text-white">Course Catagory: Programming</span>
                        </a>

                        <div class="flex items-center justify-between">
                            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                            <a href="/pythonProgramming" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enroll</a>
                        </div>
                    </div>
                </div> */}




            </div>
            <Footer2 />
        </>
    )
}

export default UserAllCourses