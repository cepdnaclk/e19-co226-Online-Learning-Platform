import React from 'react'

import TutorNavbar from './TutorNavbar'
import Footer2 from "../Navbar_Files/Footer2";

function TutorContact() {
    return (
        <>
            <TutorNavbar />
            <div className='pb-20 p-5 select-none'>
                {/* content goes inside this div */}
                <div className="mx-auto max-w-screen-md">

                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Us</h2>
                    <p className="mb-3 lg:mb-7 font-light text-center sm:text-xl"> Got a question? Need assistance? We're here to help! </p>

                    <form action="#" className="space-y-6">

                        <div>
                            <label className="block mb-1.5 text-sm font-medium">Name:</label>
                            <input type="text"
                                id="name"
                                className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
                                placeholder="Enter Your Name"
                                required />
                        </div>

                        <div>
                            <label className="block mb-1.5 text-sm font-medium">Email:</label>
                            <input type="email"
                                id="email"
                                className="shadow-sm border border-gray-300 text-black text-sm rounded-lg focus:border-primary-500 block w-full p-2.5"
                                placeholder="Enter Your Email"
                                required />
                        </div>

                        <div className="sm:col-span-2">
                            <label className="block mb-1.5 text-sm font-medium">Message: </label>
                            <textarea id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:border-primary-500"
                                placeholder="Enter Your Message"
                                required></textarea>
                        </div>

                        <button type="submit"
                            className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-2 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
            <Footer2 />
        </>
    )
}

export default TutorContact
