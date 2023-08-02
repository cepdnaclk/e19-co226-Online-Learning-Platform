import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import HomepageNavbar from "./HomepageNavbar";
import Footer from "../Navbar_Files/Footer";
import homepageimage1 from "../components/images/homepageimage1.png"

function Homepage() {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        loadCourses();
    }, [])

    const loadCourses = async () => {
        const listOfCourses = await axios.get("http://localhost:9081/course/getcourses")
        //console.log(listOfCourses.data)
        setCourses(listOfCourses.data)
    }

    return (
        <>
            <HomepageNavbar />
            {/* Add p-5 to add padding */}
            <div className="pb-20 select-none">
                {/* Webpage content goes inside this div */}

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
                            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Sign
                            Up</button>
                        <p className="mt-8"></p>
                    </div>
                    <div className="w-full md:w-1/3"></div>
                    <div className="w-full md:w-1/3">
                        <img src={homepageimage1} alt="Image" className="w-full h-auto" />
                    </div>
                </div>

                <div className="bg-gray-300 text-4xl px-5 py-6">
                    <div className="container mx-auto">
                        Find Courses for you:
                    </div>
                </div>

                <div className="p-5">
                    <table>
                        <thead>
                            <tr>
                                <th>Course Id</th>
                                <th>Course Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((e) => {
                                return (
                                    <tr key={e.courseId}>
                                        <td>{e.courseId}</td>
                                        <td>{e.courseName}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table >

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum sunt numquam quo consectetur doloremque maiores quas delectus molestias. Reprehenderit eius accusantium eaque vel perspiciatis maxime neque in, corrupti totam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum sunt numquam quo consectetur doloremque maiores quas delectus molestias. Reprehenderit eius accusantium eaque vel perspiciatis maxime neque in, corrupti totam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatum sunt numquam quo consectetur doloremque maiores quas delectus molestias. Reprehenderit eius accusantium eaque vel perspiciatis maxime neque in, corrupti totam!</p>
                </div>





            </div >
            <Footer />
        </>
    )
}

export default Homepage