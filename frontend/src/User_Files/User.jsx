import React, { useState } from "react";

import UserNavbar from "./UserNavbar";
import Footer2 from "../Navbar_Files/Footer2";

function User() {

    return (
        <>
            <UserNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}
                <h1 className='text-2xl'>User My courses content</h1>




            </div>
            <Footer2 />
        </>
    )
}

export default User