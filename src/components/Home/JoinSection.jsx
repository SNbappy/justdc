import { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
            title: "🎓 Who can join?",
            description:
                "Students from all departments who are eager to learn, debate, and grow are welcome to join! No experience is necessary—just a passion for learning and engaging in meaningful discussions.",
            gradient: "from-blue-500 to-blue-300",
        },
        {
            id: 2,
            title: "🌟 Why join JUSTDC?",
            description: `
        * Boost your confidence and communication skills
        * Engage in exciting debates and discussions
        * Meet like-minded individuals and build lifelong friendships
        * Represent JUST in inter-university and World debate competitions`,
            gradient: "from-purple-500 to-pink-500",
        },
        {
            id: 3,
            title: "📅 How to Apply?",
            description: `
        1. Fill out the registration form (available at the JUSTDC Office)
        2. Join our introductory session on campus to learn more`,
            gradient: "from-teal-500 to-cyan-500",
            link: {
                text: "Register Now",
                href: "#",
            },
        },
    ];

    return (
        <div
            ref={sectionRef}
            className="relative px-6 py-16 overflow-hidden lg:px-20"
        >
            {/* Animated Background Circles */}
            <div className="absolute rounded-full -top-20 -left-10 w-96 h-96 opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute rounded-full -bottom-20 -right-10 w-96 h-96 opacity-30 blur-2xl animate-pulse"></div>

            <div className="mx-auto max-w-7xl">
                {/* Heading */}
                <div className="space-y-4 text-center">
                    <motion.h2
                        className="text-4xl font-extrabold tracking-tight text-gray-800"
                        initial={{ opacity: 0, y: -50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1 }}
                    >
                        Join the Debate Revolution!
                    </motion.h2>
                    <motion.p
                        className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.3 }}
                    >
                        Become part of the most dynamic and impactful debate club on campus.
                        Ready to boost your confidence, enhance your communication skills,
                        and make lifelong connections? Join us today!
                    </motion.p>
                </div>

                {/* Cards Section */}
                <div className="relative mt-16 space-y-8">
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
                            {card.link ? (
                                <>
                                    <p className="mt-4 text-lg">{card.description}</p>
                                    <a
                                        href={card.link.href}
                                        className="inline-block px-6 py-2 mt-6 font-semibold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
                                    >
                                        {card.link.text}
                                    </a>
                                </>
                            ) : (
                                <ul className="mt-4 text-lg whitespace-pre-line list-disc list-inside">
                                    {card.description}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default JoinSection;