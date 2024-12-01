import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import eventImage1 from "../../images/slide-1.jpg"; // Replace with actual image sources
import eventImage2 from "../../images/slide-1.jpg"; // Replace with actual image sources

const RecentEvents = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    const eventVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 120,
            },
        },
    };

    const events = [
        {
            id: 1,
            title: "Inter-College Debate Championship",
            date: "November 25, 2024",
            description: "A thrilling debate competition with participants from various colleges.",
            image: eventImage1,
        },
        {
            id: 2,
            title: "Public Speaking Workshop",
            date: "December 2, 2024",
            description: "A workshop designed to boost public speaking skills and confidence.",
            image: eventImage2,
        },
        {
            id: 3,
            title: "Public Speaking Workshop",
            date: "December 2, 2024",
            description: "A workshop designed to boost public speaking skills and confidence.",
            image: eventImage2,
        },
    ];

    return (
        <div
            ref={sectionRef}
            className="relative px-6 py-16 overflow-hidden text-white lg:px-20 bg-gradient-to-r from-blue-600 via-indigo-800 to-purple-900"
        >
            {/* Background Image and Blurring Effect */}
            <div className="absolute inset-0 z-0 bg-center bg-cover opacity-40" style={{ backgroundImage: 'url("https://scontent.fcgp7-1.fna.fbcdn.net/v/t39.30808-6/468914126_1019692373505531_5596690832860344782_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-vBFLNyeZcEQ7kNvgGncBwj&_nc_zt=23&_nc_ht=scontent.fcgp7-1.fna&_nc_gid=AXcdJPZ4yQv_XBWR5REYKDc&oh=00_AYDv3hgRr4Y4VSwNYL4989MkVuOMb2xwm3uZCCtZLRXWqw&oe=675232C3")' }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-900 to-transparent opacity-70"></div>

            {/* Background Circles */}
            <div className="absolute z-0 rounded-full -top-20 -left-10 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute z-0 rounded-full -bottom-20 -right-10 w-72 h-72 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-20 blur-2xl animate-pulse"></div>

            {/* Title and Introductory Text */}
            <div className="relative z-10 mb-12 space-y-4 text-center">
                <motion.h2
                    className="text-4xl font-extrabold tracking-tight"
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    Recent Events
                </motion.h2>
                <motion.p
                    className="max-w-3xl mx-auto text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Stay up-to-date with our exciting events and activities! Here are some of our recent gatherings and programs.
                </motion.p>
            </div>

            {/* Event Cards */}
            <div className="relative z-10 grid grid-cols-1 gap-12 mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl">
                {events.map((event, index) => (
                    <motion.div
                        key={event.id}
                        className="flex flex-col items-center p-6 text-gray-800 bg-white shadow-lg rounded-xl hover:shadow-2xl"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={eventVariants}
                    >
                        <img
                            src={event.image}
                            alt={event.title}
                            className="object-cover w-full h-64 mb-4 rounded-lg"
                        />
                        <h3 className="text-2xl font-semibold">{event.title}</h3>
                        <p className="text-sm text-gray-500">{event.date}</p>
                        <p className="mt-4 text-lg text-gray-600">{event.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default RecentEvents;
