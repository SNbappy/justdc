import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../images/whatWeProvide.jpg"; // Adjust to your image source

const WhatWeProvide = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const cardVariants = {
        hidden: { opacity: 0, y: 100, scale: 0.9 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                delay: index * 0.3, // Stagger for engaging animation
                duration: 0.8,
                type: "spring",
                stiffness: 120,
            },
        }),
        hover: {
            scale: 1.05,
            rotate: 2, // Slight rotation for depth
            transition: {
                duration: 0.3,
                type: "spring",
            },
        },
    };

    const pointsCard1 = [
        "Enhance public speaking skills.",
        "Learn effective argumentation.",
        "Participate in debates.",
    ];
    const pointsCard2 = [
        "Connect with like-minded peers.",
        "Develop critical thinking.",
        "Experience leadership growth.",
    ];

    return (
        <div
            ref={sectionRef}
            className="relative px-6 py-16 overflow-hidden bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-50 lg:px-20"
        >
            {/* Animated Gradient Circles */}
            <div className="absolute z-0 rounded-full -top-20 -left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute z-0 rounded-full -bottom-20 -right-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-30 blur-2xl animate-pulse"></div>

            {/* Title and Introductory Text */}
            <div className="relative z-10 mb-12 space-y-4 text-center">
                <motion.h2
                    className="text-4xl font-extrabold tracking-tight text-gray-800"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    Unlock Your Potential
                </motion.h2>
                <motion.p
                    className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Dive into a world of endless possibilities. Whether it's enhancing your communication skills, building meaningful connections, or stepping into leadership roles, our club provides the perfect platform to thrive and grow.
                </motion.p>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-12 mx-auto max-w-7xl lg:flex-row">
                {/* Left Image Section */}
                <motion.div
                    className="w-full overflow-hidden shadow-lg lg:w-1/2 rounded-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={image}
                        alt="What We Provide"
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Right Cards Section */}
                <motion.div
                    className="flex flex-col w-full gap-8 lg:w-1/2"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Card 1 */}
                    <motion.div
                        className="flex flex-col gap-4 p-8 text-white shadow-lg bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl"
                        whileHover="hover"
                        custom={0}
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-semibold">Skill Development</h3>
                        <ul className="space-y-2">
                            {pointsCard1.map((point, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-white rounded-full"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        className="flex flex-col gap-4 p-8 text-white shadow-lg bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl"
                        whileHover="hover"
                        custom={1}
                        variants={cardVariants}
                    >
                        <h3 className="text-2xl font-semibold">Networking and Leadership</h3>
                        <ul className="space-y-2">
                            {pointsCard2.map((point, index) => (
                                <li key={index} className="flex items-center gap-2">
                                    <span className="w-3 h-3 bg-white rounded-full"></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default WhatWeProvide;
