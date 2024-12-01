import React, { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import image from "../../images/slide-3.jpg"; // Replace with your actual image source

const DebateClubAchievements = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div
            ref={ref}
            className="relative flex items-center justify-center min-h-screen overflow-hidden text-white"
        >
            {/* Background Image and Blurring Effect */}
            <div
                className="absolute inset-0 z-0 bg-center bg-cover opacity-40"
                style={{ backgroundImage: `url(${image})` }}
            ></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-transparent opacity-70"></div>

            {/* Background Circles */}
            <div className="absolute z-0 rounded-full w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 blur-3xl -top-10 -left-20 animate-pulse"></div>
            <div className="absolute z-0 rounded-full w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-20 blur-3xl -bottom-20 -right-10 animate-pulse"></div>

            {/* Content */}
            <div className="relative z-10 w-full p-10 mx-auto bg-white rounded-lg shadow-2xl bg-opacity-90 max-w-7xl">
                {/* Achievement Cards */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {/* Current Members */}
                    <motion.div
                        className="p-8 text-center transition duration-300 transform bg-blue-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Current Members</h2>
                        <p className="text-5xl font-bold text-blue-600">
                            <CountUp start={inView ? 0 : null} end={150} duration={3} />+
                        </p>
                    </motion.div>

                    {/* Workshops */}
                    <motion.div
                        className="p-8 text-center transition duration-300 transform bg-yellow-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Workshops</h2>
                        <p className="text-5xl font-bold text-yellow-600">
                            <CountUp start={inView ? 0 : null} end={150} duration={4} />+
                        </p>
                    </motion.div>

                    {/* Social Events */}
                    <motion.div
                        className="p-8 text-center transition duration-300 transform bg-purple-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.4 }}
                    >
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Social Events</h2>
                        <p className="text-5xl font-bold text-purple-600">
                            <CountUp start={inView ? 0 : null} end={30} duration={4} />+
                        </p>
                    </motion.div>

                    {/* Fund Raising */}
                    <motion.div
                        className="p-8 text-center transition duration-300 transform bg-red-100 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <h2 className="mb-4 text-xl font-medium text-gray-700">Fund Raising</h2>
                        <p className="text-5xl font-bold text-red-600">
                            <CountUp start={inView ? 0 : null} end={15} duration={5} />+
                        </p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default DebateClubAchievements;
