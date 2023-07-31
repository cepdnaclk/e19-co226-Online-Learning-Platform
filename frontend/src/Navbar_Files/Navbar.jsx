import React, { useState } from 'react';
import Logo from "../components/images/logo.png"
import { CgMenu } from 'react-icons/cg';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gray-800 text-white pt-4 pb-2 select-none">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div>
                    <div className="inline-block">
                        <img src={Logo} width="30" className="inline-block transform -translate-y-2" alt="Logo" />
                    </div>
                    <span
                        className="text-2xl sm:text-4xl font-mono inline-block">
                        Learn<span className="text-red-600">E</span>dge
                    </span>
                </div>

                <div
                    className={`nav-links bg-gray-800 duration-500 md:static absolute md:min-h-fit min-h-[45vh] left-0 ${isMenuOpen ? 'top-[11%] bg-gray-600' : 'top-[-100%] bg-gray-800'
                        } md:w-auto w-full flex items-center px-5`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">About</li>
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer">Contact</li>
                    </ul>
                </div>

                <div
                    className="flex items-center gap-6">
                    <button
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Log In
                    </button>
                    <span
                        onClick={toggleMenu} name={isMenuOpen ? 'close' : 'menu'} className="text-3xl cursor-pointer md:hidden">
                        <CgMenu />
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
