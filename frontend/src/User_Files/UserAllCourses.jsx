import React from 'react'

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

function UserAllCourses() {
    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none grid grid-cols-4 gap-4'>
                {/* content goes inside this div */}
                123
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