import { useState } from "react";
import { motion } from "framer-motion";

const WhyJoinSection = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleCardClick = (clickedIndex) => {
        const centerIndex = positionIndexes.indexOf(0); // Current center index
        const shift = clickedIndex - centerIndex;

        setPositionIndexes((prevIndexes) =>
            prevIndexes.map((index) => (index - shift + 5) % 5)
        );
    };

    const handleSwipe = (direction) => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = [...prevIndexes];
            if (direction === "left") {
                updatedIndexes.push(updatedIndexes.shift()); // Move to next card
            } else if (direction === "right") {
                updatedIndexes.unshift(updatedIndexes.pop()); // Move to previous card
            }
            return updatedIndexes;
        });
    };

    const cards = [
        {
            id: 1,
            title: "Community of Thinkers",
            description:
                "Connect with like-minded individuals passionate about debating and intellectual growth.",
            bgGradient: "from-blue-500 to-indigo-600",
        },
        {
            id: 2,
            title: "Sharpen Your Skills",
            description:
                "Develop confidence, enhance critical thinking, and master persuasion in a supportive environment.",
            bgGradient: "from-green-500 to-teal-600",
        },
        {
            id: 3,
            title: "Celebrate Achievements",
            description:
                "Participate in exciting competitions and celebrate your progress as a debater.",
            bgGradient: "from-yellow-500 to-orange-600",
        },
        {
            id: 4,
            title: "Expand Your Knowledge",
            description:
                "Dive into diverse topics and explore new perspectives to broaden your worldview.",
            bgGradient: "from-purple-500 to-pink-600",
        },
        {
            id: 5,
            title: "Foster Creativity",
            description:
                "Learn to think on your feet and present ideas creatively, fostering innovation and adaptability.",
            bgGradient: "from-red-500 to-pink-500",
        },
    ];

    const positions = ["center", "left1", "left", "right", "right1"];

    const cardVariants = {
        center: { x: "0%", scale: 1, zIndex: 5, opacity: 1 },
        left1: { x: "-50%", scale: 0.8, zIndex: 3, opacity: 0.8 },
        left: { x: "-90%", scale: 0.6, zIndex: 2, opacity: 0.6 },
        right: { x: "90%", scale: 0.6, zIndex: 2, opacity: 0.6 },
        right1: { x: "50%", scale: 0.8, zIndex: 3, opacity: 0.8 },
    };

    return (
        <div
            className="relative flex flex-col items-center justify-start min-h-screen pt-12 overflow-hidden lg:pt-12 lg:pb-12 bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50"
        >
            {/* Animated Background Circles */}
            <div className="absolute rounded-full -top-20 -left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl animate-pulse"></div>
            <div className="absolute rounded-full -bottom-20 -right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-30 blur-2xl animate-pulse"></div>

            {/* Heading */}
            <div className="space-y-4 text-center mt-9">
                <h2 className="text-4xl font-extrabold text-gray-800">
                    About Us
                </h2>
                <p className="max-w-3xl mx-4 text-lg leading-relaxed text-gray-700">
                    It's a vibrant community where ideas flourish, skills sharpen, and leaders emerge. Joining our club means stepping into an environment that values critical thinking, persuasive communication, and intellectual growth.
                </p>
            </div>

            {/* Cards Section */}
            <div className="relative w-full max-w-[1200px] h-[60vh] sm:h-[70vh] flex justify-center items-center mt-[-50px] lg:mt-0">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className={`absolute w-[60%] sm:w-[50%] md:w-[400px] lg:w-[500px] h-[50%] sm:h-[60%] lg:h-[400px] md:h-[300px] p-4 sm:p-6 text-white rounded-xl shadow-lg bg-gradient-to-r ${card.bgGradient} flex flex-col items-center justify-center text-center cursor-pointer`}
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleCardClick(index)}
                        drag="x" // Enable dragging in the x direction
                        dragConstraints={{ left: 0, right: 0 }} // No hard constraints
                        onDragEnd={(event, info) => {
                            const threshold = 100; // Swipe threshold
                            const velocityThreshold = 0.5; // Velocity threshold
                            if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
                                handleSwipe("right"); // Swipe right to move to the previous card
                            } else if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
                                handleSwipe("left"); // Swipe left to move to the next card
                            }
                        }}
                    >
                        <h3 className="mb-2 text-base font-bold sm:text-lg lg:text-xl">
                            {card.title}
                        </h3>
                        <p className="text-xs leading-relaxed sm:text-sm lg:text-base">
                            {card.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default WhyJoinSection;
