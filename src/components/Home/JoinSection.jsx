import { useState } from "react";
import { motion } from "framer-motion";

const CardSlider = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleCardClick = (clickedIndex) => {
        const centerIndex = positionIndexes.indexOf(0); // Current center index
        const shift = clickedIndex - centerIndex;

        setPositionIndexes((prevIndexes) =>
            prevIndexes.map((index) => (index - shift + 5) % 5)
        );
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

    // Handle swipe actions
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

    return (
        <div className="flex items-center justify-center h-screen overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-50">
            <div className="relative w-full max-w-[1200px] h-[80vh] sm:h-[70vh] flex justify-center items-center">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className={`absolute w-[90%] sm:w-[70%] lg:w-[300px] max-w-[300px] h-[50%] sm:h-[55%] lg:h-[400px] p-4 sm:p-6 text-white rounded-xl shadow-lg bg-gradient-to-r ${card.bgGradient} flex flex-col items-center justify-center text-center cursor-pointer`}
                        initial="center"
                        animate={positions[positionIndexes[index]]}
                        variants={cardVariants}
                        transition={{ duration: 0.5 }}
                        onClick={() => handleCardClick(index)} // Move clicked card to the center
                        drag="x" // Enable dragging in the x direction
                        dragConstraints={{ left: -200, right: 200 }} // Set constraints for dragging
                        onDragEnd={(event, info) => {
                            // Detect swipe direction based on drag offset
                            if (info.offset.x > 100) {
                                handleSwipe("right"); // Swipe right to move to the previous card
                            } else if (info.offset.x < -100) {
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

export default CardSlider;
