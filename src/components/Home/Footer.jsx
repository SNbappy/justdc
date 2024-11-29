import facebook from "../../images/facebook.png"
import x_icon from "../../images/x icon.png"
import youtube from "../../images/youtube.png"
import instagram from "../../images/instagram.png"

const Footer = () => {
    return (
        <footer className="py-12 text-white bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <div className="container grid grid-cols-1 gap-8 px-5 mx-auto lg:w-10/12 md:grid-cols-3">
                {/* About the Club */}
                <div>
                    <h2 className="mb-4 text-2xl font-extrabold text-pink-400">JUST Debate Club</h2>
                    <p className="leading-relaxed text-gray-300">
                        Empowering students to excel in public speaking, critical thinking, and competitive debating.
                        Join us and find your voice!
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-blue-400">Quick Links</h3>
                    <ul className="space-y-3">
                        <li>
                            <a
                                href="#about"
                                className="flex items-center transition-all duration-300 ease-in-out hover:text-pink-400"
                            >
                                <i className="mr-2 fas fa-info-circle"></i> About Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#events"
                                className="flex items-center transition-all duration-300 ease-in-out hover:text-pink-400"
                            >
                                <i className="mr-2 fas fa-calendar-alt"></i> Upcoming Events
                            </a>
                        </li>
                        <li>
                            <a
                                href="#join"
                                className="flex items-center transition-all duration-300 ease-in-out hover:text-pink-400"
                            >
                                <i className="mr-2 fas fa-users"></i> Join Us
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="flex items-center transition-all duration-300 ease-in-out hover:text-pink-400"
                            >
                                <i className="mr-2 fas fa-envelope"></i> Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="mb-4 text-xl font-bold text-green-400">Contact Us</h3>
                    <p className="text-gray-300">
                        <i className="mr-2 fas fa-map-marker-alt"></i> JUST Debate Club Office
                    </p>
                    <p className="text-gray-300">
                        <i className="mr-2 fas fa-envelope"></i>
                        <a href="mailto:justdc@university.com" className="hover:text-pink-400">
                            justdebateclub2018@gmail.com
                        </a>
                    </p>
                    <p className="text-gray-300">
                        <i className="mr-2 fas fa-phone"></i> +123 456 789
                    </p>
                    <div className="flex mt-2 space-x-4">
                        <img className="w-[30px] h-[30px]" src={facebook} alt="" />
                        <img className="w-[30px] h-[30px]" src={x_icon} alt="" />
                        <img className="w-[30px] h-[30px]" src={youtube} alt="" />
                        <img className="w-[30px] h-[30px]" src={instagram} alt="" />
                    </div>
                </div>
            </div>
            {/* Bottom Bar */}
            <div className="pt-6 mt-12 text-sm text-center text-gray-500 border-t border-gray-700">
                <p>© 2024 JUST Debate Club. All Rights Reserved.</p>
                <p className="mt-2">
                    Designed with ❤️ by <a href="https://enthusiastit.com" className="hover:text-pink-400">Bappy</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
