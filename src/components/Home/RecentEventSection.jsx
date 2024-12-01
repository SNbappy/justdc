import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import eventImage from "../../images/slide-1.jpg";

const RecentEventSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
        <div
            ref={sectionRef}
            className="relative px-6 py-16 overflow-hidden bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-100 lg:px-20"
        >
            {/* Animated Background Circles */}
            <div className="absolute rounded-full -top-20 -left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute rounded-full -bottom-20 -right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-30 blur-2xl animate-pulse"></div>

            {/* Section Title */}
            <div className="relative z-10 space-y-6 text-center">
                <motion.h2
                    className="text-4xl font-extrabold tracking-tight text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    Recent Event Spotlight
                </motion.h2>
                <motion.p
                    className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Here’s a glimpse of our latest debate extravaganza! Witness how our members shine as they tackle challenging topics and showcase their skills.
                </motion.p>
            </div>

            {/* Event Details */}
            <div className="relative z-10 flex flex-col items-center gap-12 mt-10 lg:flex-row max-w-7xl">
                {/* Left Image Section */}
                <motion.div
                    className="w-full overflow-hidden shadow-lg lg:w-1/2 rounded-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={eventImage}
                        alt="Recent Event"
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Right Event Description */}
                <motion.div
                    className="flex flex-col w-full gap-4 p-8 text-white shadow-xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl lg:w-1/2"
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <h3 className="text-3xl font-semibold">JUST Debate Championship 2024</h3>
                    <p className="text-lg leading-relaxed">
                        Our latest event brought together over 50 participants from various departments to debate pressing global issues. The energy, insights, and passion displayed by everyone made it an unforgettable experience!
                    </p>
                    <ul className="pl-6 space-y-2 list-disc">
                        <li>🏆 Winners: Team A - Representing CSE Department</li>
                        <li>🎙️ Best Speaker: John Doe</li>
                        <li>📍 Venue: JUST Auditorium</li>
                    </ul>
                    <a
                        href="#"
                        className="inline-block px-6 py-2 mt-4 font-semibold text-purple-600 transition bg-white rounded-lg hover:bg-gray-100"
                    >
                        View Full Event Gallery
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default RecentEventSection;
