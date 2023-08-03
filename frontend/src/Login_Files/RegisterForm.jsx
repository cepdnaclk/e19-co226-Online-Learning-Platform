import React from 'react';

import { useNavigate } from "react-router-dom";

import { FiUser } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdPassword } from 'react-icons/md';
import { BsTelephoneInbound } from 'react-icons/bs';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { TiArrowBack } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';

import User from '../components/images/registerImages/user.png'

function RegisterForm() {

    const navigate = useNavigate();

    const homePath = "/"

    const navigateHome = (path) => {
        navigate(path);
    }

    return (
        <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
            <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: "1000px" }}>
                <div className="md:flex w-full">
                    <div className="hidden md:block w-1/2 bg-indigo-500 py-12 px-4 ">
                        <img src={User} className="mt-10" />
                    </div>
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-10">
                            <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                            <p>Enter your information to register</p>
                        </div>
                        <div>
                            {/* First Name and Last Name */}
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-3">
                                    <label htmlFor="" className="text-xs font-semibold px-1">First Name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <FiUser />
                                        </div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="John" />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-3">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Last Name</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <FiUser />
                                        </div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="Smith" />
                                    </div>
                                </div>
                            </div>

                            {/* Phone number and Birth Date */}
                            <div className="flex -mx-3">
                                <div className="w-1/2 px-3 mb-3">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Phone Number</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <BsTelephoneInbound />
                                        </div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="+1xxxxxxxxxx" />
                                    </div>
                                </div>
                                <div className="w-1/2 px-3 mb-3">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Date of Birth</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <LiaBirthdayCakeSolid />
                                        </div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="01/01/2000" />
                                    </div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-2">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <HiOutlineMail />
                                        </div>
                                        <input type="email" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="johnsmith@example.com" />
                                    </div>
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-8">
                                    <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                                            <MdPassword />
                                        </div>
                                        <input type="password"
                                            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                                            placeholder="************" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex -mx-3 mb-5">
                                <div className="w-full">
                                    <button
                                        className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
                                        <FiLogIn className='inline mr-2 mb-1' fontSize={25} />
                                        Register
                                    </button>
                                </div>
                            </div>

                            <div className="flex -mx-3">
                                <div className="w-full">
                                    <button
                                        className="block w-full max-w-xs mx-auto bg-green-400 hover:bg-green-600 focus:bg-green-700 text-white rounded-lg px-3 py-3 font-semibold"
                                        onClick={() => navigateHome(homePath)}>
                                        <TiArrowBack className='inline mr-1 mb-1' fontSize={25} />
                                        Back
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
