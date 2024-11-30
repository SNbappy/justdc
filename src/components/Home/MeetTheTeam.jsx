import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Slider from "react-slick";
import { useState } from "react";
import dp from "../../images/slide-1.jpg";

const executiveMembers = [
    { name: "Daniel Brown", position: "President", image: dp },
    { name: "John Doe", position: "Vice President", image: dp },
    { name: "Jane Smith", position: "Secretary", image: dp },
    // Add more members as needed
    { name: "Daniel Brown", position: "President", image: dp },
    { name: "John Doe", position: "Vice President", image: dp },
    { name: "Jane Smith", position: "Secretary", image: dp },
    // Add more members as needed
    { name: "Daniel Brown", position: "President", image: dp },
    { name: "John Doe", position: "Vice President", image: dp },
    { name: "Jane Smith", position: "Secretary", image: dp },
    // Add more members as needed
    { name: "Daniel Brown", position: "President", image: dp },
    { name: "John Doe", position: "Vice President", image: dp },
    { name: "Jane Smith", position: "Secretary", image: dp },
    // Add more members as needed
];

const MeetTheTeam = () => {
    const [hoveredMember, setHoveredMember] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section className="py-16">
            <div className="container px-6 mx-auto text-center">
                <h2 className="mb-8 text-4xl font-extrabold text-gray-800">Meet The Team</h2>
                <p className="mb-12 text-lg text-gray-600">
                    Get to know the talented executives behind the JUST Debate Club!
                </p>

                <Slider {...settings} className="space-x-4">
                    {executiveMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="relative flex flex-col items-center justify-center p-6 mx-4 transition-all duration-300 ease-in-out transform shadow-lg bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl group"
                            onMouseEnter={() => setHoveredMember(member.name)}
                            onMouseLeave={() => setHoveredMember(null)}
                            whileHover={{ scale: 1.05 }}
                        >
                            {/* Card Image */}
                            <div className="relative w-full mb-4 h-72">
                                <div className="relative w-full h-full overflow-hidden">
                                    {/* Irregular Shape Using SVG */}
                                    <svg
                                        className="absolute inset-0 w-full h-full"
                                        viewBox="0 0 300 300"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <defs>
                                            <clipPath id={`clip-path-${index}`}>
                                                <path
                                                    d="M150 0 C200 20, 300 70, 270 150 
                                                       C240 230, 100 280, 30 210 
                                                       C-20 160, 70 50, 150 0 Z"
                                                />
                                            </clipPath>
                                        </defs>
                                        <image
                                            x="0"
                                            y="0"
                                            width="100%"
                                            height="100%"
                                            href={member.image}
                                            clipPath={`url(#clip-path-${index})`}
                                            preserveAspectRatio="xMidYMid slice"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Name and Position */}
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-sm text-gray-700">{member.position}</p>
                            </div>

                            {/* Hover Info - Detailed View */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredMember === member.name ? 1 : 0 }}
                                className="absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ease-in-out opacity-0 bg-gradient-to-t from-black to-transparent group-hover:opacity-90 rounded-xl"
                            >
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-sm text-gray-300">{member.position}</p>
                                <p className="mt-4 text-sm text-gray-300">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut velit eu lorem aliquet sodales.
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </Slider>

                {/* Button */}
                <button className="px-6 py-3 mt-8 text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-green-500 to-teal-500 hover:from-teal-500 hover:to-green-500">
                    See Details
                </button>
            </div>
        </section>
    );
};

export default MeetTheTeam;
