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
                "Secured first place in the National Debate Championship 2023, showcasing teamwork and critical thinking.",
            icon: <FaTrophy className="text-4xl text-blue-600" />,
        },
        {
            title: "Best Speaker Awards",
            description:
                "Our members have earned prestigious Best Speaker awards in regional and national competitions.",
            icon: <FaStar className="text-4xl text-yellow-500" />,
        },
        {
            title: "International Recognition",
            description:
                "Represented our country at the International Debate Championship, ranking among the top 5 teams worldwide.",
            icon: <FaGlobe className="text-4xl text-green-500" />,
        },
        {
            title: "Social Impact Events",
            description:
                "Organized debates addressing global and local issues, earning widespread appreciation.",
            icon: <FaHandsHelping className="text-4xl text-purple-500" />,
        },
        {
            title: "Outstanding Debater",
            description:
                "One of our members was awarded Outstanding Debater of the Year at the National Debate Summit 2023.",
            icon: <FaMedal className="text-4xl text-red-500" />,
        },
        {
            title: "Debate Workshop Leaders",
            description:
                "Conducted workshops in schools and universities to inspire the next generation of debaters.",
            icon: <FaChalkboardTeacher className="text-4xl text-teal-500" />,
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
        <div className="px-6 py-20 lg:px-20">
            <div className="mx-auto space-y-16 max-w-7xl">
                {/* Heading */}
                <div className="space-y-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Our Achievements</h2>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
                        Over the years, our debate club has reached remarkable milestones, proving our dedication to excellence and impact.
                    </p>
                </div>

                {/* Achievement Cards */}
                <div
                    className="relative w-full h-[400px] sm:h-auto"
                    {...swipeHandlers}
                >
                    {/* Cards on Small Screens (1 Card visible at a time with stacked effect) */}
                    <div className="relative w-full h-full sm:hidden">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className={`absolute w-full transition-all duration-300 ease-in-out transform ${index === currentIndex
                                        ? "z-20 scale-100 opacity-100"
                                        : index > currentIndex
                                            ? "z-10 scale-90 opacity-70 translate-y-4"
                                            : "z-0 scale-85 opacity-50 translate-y-8"
                                    }`}
                                style={{
                                    background: "white",
                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                    borderRadius: "1rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    padding: "2rem",
                                }}
                            >
                                {/* Icon */}
                                <div className="inline-block p-6 rounded-full shadow-md bg-gradient-to-r from-blue-200 to-pink-100">
                                    {achievement.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                                    {achievement.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-2 leading-relaxed text-gray-600">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Cards on Large Screens (Grid layout with 3 cards per row) */}
                    <div className="hidden grid-cols-3 gap-10 sm:grid">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="p-8 space-y-4 text-center transition-all duration-500 transform bg-white shadow-lg rounded-xl hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-200"
                            >
                                {/* Icon */}
                                <div className="inline-block p-6 rounded-full shadow-md bg-gradient-to-r from-blue-200 to-pink-100">
                                    {achievement.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {achievement.title}
                                </h3>

                                {/* Description */}
                                <p className="leading-relaxed text-gray-600">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AchievementsSection;
