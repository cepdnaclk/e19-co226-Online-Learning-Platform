import React from 'react';

import { useNavigate } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    const homePath = "/"

    const navigateHome = (path) => {
        navigate(path);
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">
                                Login
                            </h1>
                        </div>
                        <div className="divide-y divide-gray-200">

                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="relative">
                                    <input
                                        autoComplete="off"
                                        id="userId"
                                        name="userId"
                                        type="text"
                                        className="mb-4 peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="User ID"
                                    />
                                    <label
                                        htmlFor="userId"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        User ID
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        autoComplete="off"
                                        id="password"
                                        name="password"
                                        type="password"
                                        className=" peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                                        placeholder="User Password"
                                    />
                                    <label
                                        htmlFor="password"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        User Password
                                    </label>
                                </div>
                                <div className="relative">
                                    <button
                                        className="mt-3 bg-blue-500 text-white rounded-md px-5 py-1">
                                        Submit
                                    </button>
                                </div>
                                <div className="relative">
                                    <button
                                        className="bg-green-500 text-white rounded-md px-5 py-1"
                                        onClick={() => navigateHome(homePath)}>
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

export default LoginForm;
