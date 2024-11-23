import { FaTrophy, FaStar, FaGlobe, FaHandsHelping, FaMedal, FaChalkboardTeacher } from "react-icons/fa";

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

    return (
        <div className="px-6 py-20 lg:px-20">
            <div className="mx-auto space-y-16 max-w-7xl">
                {/* Heading */}
                <div className="space-y-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Our Achievements
                    </h2>
                    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600">
                        Over the years, our debate club has reached remarkable milestones, proving our dedication to excellence and impact.
                    </p>
                </div>

                {/* Achievement Cards */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {achievements.map((achievement, index) => (
                        <div
                            key={index}
                            className="p-8 space-y-4 text-center transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
                        >
                            {/* Icon */}
                            <div className="inline-block p-4 bg-gray-100 rounded-full">
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
    );
};

export default AchievementsSection;
