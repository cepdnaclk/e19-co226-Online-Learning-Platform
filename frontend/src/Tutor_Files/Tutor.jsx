import React, { useState, useEffect } from "react";
import axios from "axios";

import TutorNavbar from './TutorNavbar'
import Footer2 from "../Navbar_Files/Footer2";

function Tutor() {

    const tutorEmail = localStorage.getItem('tutorEmail');

    const [tutorDetails, setTutorDetails] = useState([])

    useEffect(() => {
        loadDetails();
    }, [])

    const loadDetails = async () => {
        try {
            const url = `http://localhost:9081/tutor/email/${tutorEmail}`;
            const tutor = await axios.get(url);
            //console.log(tutor.data);
            setTutorDetails(tutor.data);
        }
        catch (error) {
            console.error("Error fetching User Details:", error);
        }
    };

    return (
        <>
            <TutorNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}
                <h1 className='text-2xl'>Welcome {tutorDetails.tutorName}</h1>




            </div>
            <Footer2 />
        </>
    )
}

export default Tutor