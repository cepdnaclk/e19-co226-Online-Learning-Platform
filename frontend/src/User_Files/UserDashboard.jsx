import React, { useState, useEffect } from "react";
import axios from "axios";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

function UserDashboard() {

    const userId = localStorage.getItem('userId');

    const [userDetails, setUserDetails] = useState([])

    //Take the User Details from backend
    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        try {
            const url = `http://localhost:9081/user/${userId}`;
            const user = await axios.get(url);
            console.log(user.data);
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
                <h1 className='text-2xl'>User My courses content</h1>
                <p>Welcome: {userDetails.firstName}</p>









            </div>
            <Footer2 />
        </>
    )
}

export default UserDashboard