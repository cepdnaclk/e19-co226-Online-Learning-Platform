import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

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
            <h1 className="text-3xl font-bold ">Homepage Under construction</h1>
            <h2 className="text-2xl font-bold ">List Of Courses:</h2>

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
        </>
    )
}

export default Homepage