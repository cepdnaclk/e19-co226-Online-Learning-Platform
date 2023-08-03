import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomepageNavbar from "./HomepageNavbar";
import Footer from "../Navbar_Files/Footer";

import ImageSlider from "./ImageSilder";
import SlickSlider from "../components/SlickSlider";

//Import Images
import generalImage from '../components/images/courseImages/default.jpg'  //Image when category cannot be identified
import ProgrammingImage from '../components/images/courseImages/programming.jpg'
import aiImage from '../components/images/courseImages/ai.jpg'
import LawImage from '../components/images/courseImages/law.jpg'
import MachineLearning from '../components/images/courseImages/machineLearning.jpg'
import WebImage from '../components/images/courseImages/web.jpg'
import HistoryImage from '../components/images/courseImages/history.jpg'

function Homepage() {

    //Set the Courses List

    const [courseList, setCourses] = useState([])

    useEffect(() => {
        loadCourses();
    }, [])

    const loadCourses = async () => {
        try {
            const listOfCourses = await axios.get("http://localhost:9081/course/getcourses");
            // console.log(listOfCourses.data);

            const mappedCourses = listOfCourses.data.map((course) => {

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

    // Navigation of signup button
    const registerPath = "/register"
    const navigate = useNavigate();

    const navigateSignup = (path) => {
        navigate(path);
    }

    return (
        <>
            <HomepageNavbar />
            {/* Add p-5 to add padding */}
            <div className="pb-20 select-none">
                {/* Webpage content goes inside this div */}

                {/* Top Most section */}
                <div className="flex flex-wrap p-5 pb-0">
                    <div className="w-full md:w-1/3">
                        <h1 className="text-7xl">LEARN ANYTIME ANYWHERE</h1>
                        <p className="py-5">
                            Start, switch, or advance your career with more than 2000 courses, Professional
                            Certificates, and degrees from world-class universities.
                        </p>
                        <p className="pb-5">
                            Are you eager to embark on a journey of continuous learning and self-improvement?
                            Look no further! <b>Join LearnEdge</b>🌟
                        </p>
                        <button
                            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                            onClick={() => navigateSignup(registerPath)} >
                            Sign Up</button>
                        <p className="mt-8"></p>
                    </div>
                    <div className="w-full md:w-1/3"></div>
                    <div className="w-full md:w-1/3">
                        <ImageSlider />
                    </div>
                </div>

                {/* Container: Find Courses for You  */}
                <div className="bg-gray-300 text-4xl px-5 py-6">
                    <div className="container mx-auto">
                        Find Courses for you:
                    </div>
                </div>

                {/* Slick Slider of courses */}
                <div className="px-5 pb-5">
                    <SlickSlider listOfItems={courseList} />
                </div>
                {/* Other content from here */}

            </div >
            <Footer />
        </>
    )
}

export default Homepage