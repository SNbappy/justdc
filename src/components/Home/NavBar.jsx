import { useState } from "react";
import logo from "../../images/logo.jpg";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="sticky top-0 z-50 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600">
            <div className="container flex items-center justify-between px-4 py-4 mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2 text-2xl font-bold text-white">
                    <img className="w-[30px] h-[30px] rounded-full" src={logo} alt="Logo" />
                    <a href="/" className="hover:text-gray-200">
                        JUST<span className="text-yellow-400">DC</span>
                    </a>
                </div>

                {/* Nav Links */}
                <div className="items-center hidden space-x-6 md:flex">
                    <a
                        href="/"
                        className="relative text-white transition duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Home
                    </a>
                    <a
                        href="#about"
                        className="relative text-white transition duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        About
                    </a>
                    <a
                        href="#events"
                        className="relative text-white transition duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Events
                    </a>
                    <a
                        href="#contact"
                        className="relative text-white transition duration-300 hover:text-yellow-400 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                        Contact
                    </a>
                    <a
                        href="#join"
                        className="px-4 py-2 text-white transition duration-300 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500"
                    >
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
                                className="w-6 h-6"
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
                                className="w-6 h-6"
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
                <div className="bg-white shadow-md md:hidden">
                    <div className="flex flex-col px-6 py-4 space-y-4">
                        <a href="/" className="text-gray-800 transition duration-300 hover:text-blue-600">
                            Home
                        </a>
                        <a href="#about" className="text-gray-800 transition duration-300 hover:text-blue-600">
                            About
                        </a>
                        <a href="#events" className="text-gray-800 transition duration-300 hover:text-blue-600">
                            Events
                        </a>
                        <a href="#contact" className="text-gray-800 transition duration-300 hover:text-blue-600">
                            Contact
                        </a>
                        <a
                            href="#join"
                            className="px-4 py-2 text-white transition duration-300 bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500"
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
