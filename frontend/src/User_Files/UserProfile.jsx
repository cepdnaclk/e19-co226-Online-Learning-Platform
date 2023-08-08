import React, { useState, useEffect } from "react";
import axios from "axios";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

function UserProfile() {

    const userEmail = localStorage.getItem('userEmail');

    const [userDetails, setUserDetails] = useState([])

    //Take the User Details from backend
    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        try {
            const url = `http://localhost:9081/user/email/${userEmail}`;
            const user = await axios.get(url);
            //console.log(user);
            setUserDetails(user.data);
        }
        catch (error) {
            console.error("Error fetching User Details:", error);
        }
    };

    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}
                <h1 className='text-2xl text-center'>My Profile</h1>

                <h1>Your User ID is: {userDetails.userId}</h1>
                <h1>First Name: {userDetails.firstName}</h1>
                <h1>Last Name: {userDetails.lastName}</h1>
                <h1>Phone Number: {userDetails.phoneNumber}</h1>
                <h1>Email: {userDetails.userEmail}</h1>
                <h1>Date Of Birth: {userDetails.dateOfBirth}</h1>
                <h1>Date Registered to LearnEdge: {userDetails.dateRegistered}</h1>

            </div>
            <Footer2 />
        </>
    )
}

export default UserProfile