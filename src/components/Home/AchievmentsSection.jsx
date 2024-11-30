import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import {
    FaTrophy,
    FaStar,
    FaGlobe,
    FaHandsHelping,
    FaMedal,
    FaChalkboardTeacher,
} from "react-icons/fa";

const AchievementsSection = () => {
    const achievements = [
        {
            title: "National Champions",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate eos, at earum corporis reprehenderit?",
            icon: <FaTrophy className="text-4xl text-yellow-500" />,
            bgClass: "bg-gradient-to-r from-pink-600 via-red-600 to-yellow-600",
        },
        {
            title: "Best Speaker Awards",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate eos, at earum corporis reprehenderit?",
            icon: <FaStar className="text-4xl text-yellow-400" />,
            bgClass: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
        },
        {
            title: "International Recognition",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate eos, at earum corporis reprehenderit?",
            icon: <FaGlobe className="text-4xl text-green-400" />,
            bgClass: "bg-gradient-to-r from-green-600 via-teal-600 to-blue-600",
        },
        {
            title: "Social Impact Events",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate eos, at earum corporis reprehenderit?",
            icon: <FaHandsHelping className="text-4xl text-purple-400" />,
            bgClass: "bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600",
        },
        {
            title: "Outstanding Debater",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate eos, at earum corporis reprehenderit?",
            icon: <FaMedal className="text-4xl text-red-500" />,
            bgClass: "bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600",
        },
        {
            title: "Debate Workshop Leaders",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptate eos, at earum corporis reprehenderit?",
            icon: <FaChalkboardTeacher className="text-4xl text-teal-400" />,
            bgClass: "bg-gradient-to-r from-teal-600 via-green-600 to-blue-600",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () =>
            setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, achievements.length - 1)),
        onSwipedRight: () =>
            setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)),
    });

    return (
        <div className="px-6 mt-[-100px] lg:mt-0 lg:pt-20 lg:px-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-black py-20">
            <div className="mx-auto space-y-16 max-w-7xl">
                {/* Heading */}
                <div className="space-y-6 text-center text-white">
                    <h2 className="text-4xl font-bold">Our Achievements</h2>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-400">
                        Over the years, our debate club has reached remarkable milestones, proving our dedication to excellence and impact.
                    </p>
                </div>

                {/* Achievement Cards */}
                <div className="relative w-full h-[400px] sm:h-auto" {...swipeHandlers}>
                    {/* Cards on Small Screens (Original Swipe Effect) */}
                    <div className="relative w-full h-full sm:hidden">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`absolute w-full transition-all duration-300 ease-in-out transform ${index === currentIndex
                                    ? "z-20 scale-100 opacity-100 rotate-0"
                                    : index > currentIndex
                                        ? "z-10 scale-90 opacity-70 translate-y-4 rotate-3"
                                        : "z-0 scale-85 opacity-50 translate-y-8 -rotate-3"
                                    }`}
                                style={{
                                    background: "white",
                                    boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)",
                                    borderRadius: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "2rem",
                                }}
                            >
                                {/* Icon */}
                                <div className="inline-block p-6 rounded-full shadow-md bg-gradient-to-r from-blue-500 to-pink-500">
                                    {achievement.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-4 text-2xl font-semibold text-gray-800">{achievement.title}</h3>

                                {/* Description */}
                                <p className="mt-2 leading-relaxed text-gray-600">{achievement.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Cards on Large Screens (Grid layout with gradient overlay) */}
                    <div className="hidden grid-cols-3 gap-10 sm:grid">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`relative p-8 text-white shadow-xl rounded-xl overflow-hidden ${achievement.bgClass} hover:scale-105 hover:shadow-2xl transition-all transform`}
                            >
                                {/* Light Gradient Overlay */}
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 via-white/5 to-transparent rounded-xl"></div>

                                {/* Icon */}
                                <div className="relative z-10 inline-block p-6 bg-white rounded-full shadow-md">
                                    {achievement.icon}
                                </div>

                                {/* Title */}
                                <h3 className="relative z-10 text-2xl font-semibold">{achievement.title}</h3>

                                {/* Description */}
                                <p className="relative z-10 leading-relaxed">{achievement.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsSection;
