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
            bgClass: "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
        },
        {
            title: "Best Speaker Awards",
            description:
                "Our members have earned prestigious Best Speaker awards in regional and national competitions.",
            icon: <FaStar className="text-4xl text-yellow-500" />,
            bgClass: "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500",
        },
        {
            title: "International Recognition",
            description:
                "Represented our country at the International Debate Championship, ranking among the top 5 teams worldwide.",
            icon: <FaGlobe className="text-4xl text-green-500" />,
            bgClass: "bg-gradient-to-r from-green-500 via-teal-500 to-blue-500",
        },
        {
            title: "Social Impact Events",
            description:
                "Organized debates addressing global and local issues, earning widespread appreciation.",
            icon: <FaHandsHelping className="text-4xl text-purple-500" />,
            bgClass: "bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500",
        },
        {
            title: "Outstanding Debater",
            description:
                "One of our members was awarded Outstanding Debater of the Year at the National Debate Summit 2023.",
            icon: <FaMedal className="text-4xl text-red-500" />,
            bgClass: "bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500",
        },
        {
            title: "Debate Workshop Leaders",
            description:
                "Conducted workshops in schools and universities to inspire the next generation of debaters.",
            icon: <FaChalkboardTeacher className="text-4xl text-teal-500" />,
            bgClass: "bg-gradient-to-r from-teal-500 via-green-500 to-blue-500",
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
        <div className="px-6 py-20 mt-[-80px] lg:mt-0 lg:px-20">
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
                                className={`relative p-8 text-white shadow-lg rounded-xl overflow-hidden ${achievement.bgClass} hover:scale-105 transition-all`}
                            >
                                {/* Icon */}
                                <div className="inline-block p-6 bg-white rounded-full shadow-md">
                                    {achievement.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold">
                                    {achievement.title}
                                </h3>

                                {/* Description */}
                                <p className="leading-relaxed">
                                    {achievement.description}
                                </p>

                                {/* Animated Effect */}
                                <div className="absolute inset-0 opacity-20 animate-spin-slow bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-white to-transparent"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS for Animations */}
            <style jsx>{`
                @keyframes spin-slow {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .animate-spin-slow {
                    animation: spin-slow 10s linear infinite;
                }
            `}</style>
        </div>
    );
};

export default AchievementsSection;