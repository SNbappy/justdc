import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import image from "../../images/WhoCanJoin.jpg";

const JoinSection = () => {
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
            transition: {
                duration: 0.3,
                type: "spring",
            },
        },
    };

    const cards = [
        {
            id: 1,
            title: "🎓 Who can join?",
            description:
                "Students from all departments who are eager to learn, debate, and grow are welcome to join! No experience is necessary—just a passion for learning and engaging in meaningful discussions.",
            gradient: "from-blue-500 to-blue-300",
        },
        {
            id: 2,
            title: "📅 How to Apply?",
            description: `1. Fill out the registration form (available at the JUSTDC Office)\n2. Join our introductory session on campus to learn more`,
            gradient: "from-teal-500 to-cyan-500",
        },
    ];

    return (
        <div
            ref={sectionRef}
            className="relative px-6 py-16 overflow-hidden bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50 lg:px-20"
        >
            {/* Animated Background Circles */}
            <div className="absolute z-0 rounded-full -top-20 -left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute z-0 rounded-full -bottom-20 -right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-30 blur-2xl animate-pulse"></div>

            {/* Title and Introductory Text */}
            <div className="relative z-10 space-y-6 text-center">
                <motion.h2
                    className="text-4xl font-extrabold tracking-tight text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    Ready to Take the Stage?
                </motion.h2>
                <motion.p
                    className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Join the JUST Debate Club and unlock your potential! Whether you're looking to enhance your public speaking skills, engage in thought-provoking discussions, or simply meet like-minded individuals, we’ve got a place for you.
                </motion.p>
            </div>

            {/* Content Section */}
            <div className="relative z-10 flex flex-col items-center gap-12 mt-10 lg:flex-row max-w-7xl">
                {/* Left Image Section */}
                <motion.div
                    className="w-full overflow-hidden shadow-lg lg:w-1/2 rounded-2xl"
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={image}
                        alt="Join JUSTDC"
                        className="object-cover w-full h-full"
                    />
                </motion.div>

                {/* Right Cards Section */}
                <div className="flex flex-col w-full gap-8 lg:w-1/2">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.id}
                            className={`relative p-8 shadow-xl rounded-xl bg-gradient-to-r ${card.gradient} text-white overflow-hidden`}
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
                            <h3 className="text-2xl font-semibold">{card.title}</h3>
                            <ul className="mt-4 text-lg whitespace-pre-line list-disc list-inside">
                                {card.description}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JoinSection;
