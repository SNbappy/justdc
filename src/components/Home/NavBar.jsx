import { useState } from "react";
import logo from "../../images/logo.jpg"

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="text-white text-2xl font-bold flex items-center gap-2">
                    <img className="w-[30px] h-[30px]" src={logo} alt="" />
                    <a href="/" className="hover:text-gray-200">
                        JUST<span className="text-yellow-400">DC</span>
                    </a>
                </div>

                {/* Nav Links */}
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="/" className="text-white hover:text-gray-200 transition duration-300">
                        Home
                    </a>
                    <a href="#about" className="text-white hover:text-gray-200 transition duration-300">
                        About
                    </a>
                    <a href="#events" className="text-white hover:text-gray-200 transition duration-300">
                        Events
                    </a>
                    <a href="#contact" className="text-white hover:text-gray-200 transition duration-300">
                        Contact
                    </a>
                    <a href="#join" className="text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg shadow-md transition duration-300">
                        Join Now
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-md">
                    <div className="flex flex-col space-y-4 px-6 py-4">
                        <a href="/" className="text-gray-800 hover:text-blue-600 transition duration-300">
                            Home
                        </a>
                        <a href="#about" className="text-gray-800 hover:text-blue-600 transition duration-300">
                            About
                        </a>
                        <a href="#events" className="text-gray-800 hover:text-blue-600 transition duration-300">
                            Events
                        </a>
                        <a href="#contact" className="text-gray-800 hover:text-blue-600 transition duration-300">
                            Contact
                        </a>
                        <a
                            href="#join"
                            className="text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg shadow-md transition duration-300"
                        >
                            Join Now
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
