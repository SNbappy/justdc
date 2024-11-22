const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="lg:w-10/12 mx-auto container px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* About the Club */}
                <div>
                    <h2 className="text-xl font-bold mb-4">JUST Debate Club</h2>
                    <p className="text-gray-400">
                        Empowering students to excel in public speaking, critical thinking, and competitive debating.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#events"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Upcoming Events
                            </a>
                        </li>
                        <li>
                            <a
                                href="#join"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Join Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-gray-300 transition duration-300"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                    <p className="text-gray-400">JUST Debate Club Office</p>
                    <p className="text-gray-400">Email: justdc@university.com</p>
                    <p className="text-gray-400">Phone: +123 456 789</p>
                    <div className="flex space-x-4 mt-4">
                        {/* Social Media Icons */}
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-300 transition duration-300"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-300 transition duration-300"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-300 transition duration-300"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-400 hover:text-gray-300 transition duration-300"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
                © 2024 JUST Debate Club. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
