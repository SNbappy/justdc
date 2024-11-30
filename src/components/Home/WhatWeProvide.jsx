import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../images/slide-1.jpg";  // Adjust to your image source

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

    const cards = [
        {
            id: 1,
            title: "Skill Development",
            description:
                "Improve your public speaking, critical thinking, and argumentation skills.",
            image: image,
            gradient: "from-blue-500 to-blue-300",
        },
        {
            id: 2,
            title: "Team Competitions",
            description:
                "Collaborate with others in exciting inter-university and international competitions.",
            image: image,
            gradient: "from-purple-500 to-pink-500",
        },
        {
            id: 3,
            title: "Leadership Opportunities",
            description:
                "Take on leadership roles within the club and represent JUST at major events.",
            image: image,
            gradient: "from-teal-500 to-cyan-500",
        },
        {
            id: 4,
            title: "Networking Events",
            description:
                "Meet like-minded individuals, debate enthusiasts, and professionals.",
            image: image,
            gradient: "from-green-500 to-teal-600",
        },
        {
            id: 5,
            title: "Public Speaking Practice",
            description:
                "Gain confidence and experience in public speaking through regular practice sessions.",
            image: image,
            gradient: "from-orange-500 to-yellow-600",
        },
        {
            id: 6,
            title: "Intellectual Growth",
            description:
                "Engage in discussions on diverse topics, broadening your knowledge and perspective.",
            image: image,
            gradient: "from-red-500 to-pink-500",
        },
    ];

    return (
        <div
            ref={sectionRef}
            className="relative px-6 py-16 overflow-hidden bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50 lg:px-20"
        >
            {/* Animated Gradient Circles (Replicating Join Section Background) */}
            <div className="absolute rounded-full -top-20 -left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute rounded-full -bottom-20 -right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-30 blur-2xl animate-pulse"></div>

            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="space-y-4 text-center">
                    <motion.h2
                        className="text-4xl font-extrabold tracking-tight text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        What We Provide
                    </motion.h2>
                    <motion.p
                        className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Join our debate club and experience a wide range of opportunities to enhance your skills, engage in exciting debates, and grow as an intellectual. Here's what we offer!
                    </motion.p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`relative p-8 shadow-xl rounded-xl bg-gradient-to-r ${card.gradient} text-white overflow-hidden flex flex-col items-center`}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            whileHover="hover"
                            custom={index}
                            variants={cardVariants}
                        >
                            {/* Background Decoration */}
                            <motion.div
                                className="absolute w-40 h-40 bg-white rounded-full opacity-10 -top-10 -left-10"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 15, -15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                }}
                            />
                            <motion.div
                                className="absolute w-40 h-40 bg-white rounded-full opacity-10 -bottom-10 -right-10"
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, -15, 15, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                }}
                            />
                            {/* Card Image */}
                            <div className="w-full h-40 mb-4 overflow-hidden rounded-lg">
                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <h3 className="text-2xl font-semibold">{card.title}</h3>
                            <p className="mt-4 text-lg">{card.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWeProvide;
