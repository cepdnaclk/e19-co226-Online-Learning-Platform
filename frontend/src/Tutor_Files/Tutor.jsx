import React from "react";

import TutorNavbar from './TutorNavbar'
import Footer2 from "../Navbar_Files/Footer2";

function Tutor() {

    return (
        <>
            <TutorNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}
                <h1 className='text-2xl'>Tutor: Published courses content</h1>




            </div>
            <Footer2 />
        </>
    )
}

export default Tutor