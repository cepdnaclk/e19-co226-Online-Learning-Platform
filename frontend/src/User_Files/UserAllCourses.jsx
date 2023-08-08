import React from 'react'

import { Link } from "react-router-dom";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

function UserAllCourses() {
    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}
                <h1 className='text-xl mb-5'>Add courses here:</h1>
                <Link to="/course" className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>
                    Add
                </Link>
            </div>
            <Footer2 />
        </>
    )
}

export default UserAllCourses