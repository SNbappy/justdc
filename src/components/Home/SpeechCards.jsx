import { motion } from "framer-motion";
import image from "../../images/Ex-President.jpg";
import image1 from "../../images/President.jpg"

const LeaderSpeechSection = () => {
    const leaders = [
        {
            id: 1,
            name: "Md. Shahriar Kabir",
            title: "Ex-President, JUSTDC",
            image: image,
            speech:
                "At JUST Debate Club, I have witnessed firsthand how our members grow into confident speakers, leaders, and critical thinkers, all while fostering a spirit of respectful debate.",
        },
        {
            id: 2,
            name: "Ayman Faiyaz",
            title: "President",
            image: image1,
            speech:
                "The club has always been a space for intellectual exchange, where diverse ideas converge, allowing students to challenge their perspectives and shape the future with informed voices.",
        },
    ];

    return (
        <div className="py-16 text-gray-200 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
            <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-50">
                Our Visionary Leaders
            </h2>
            {leaders.map((leader) => (
                <motion.div
                    key={leader.id}
                    className="relative max-w-4xl px-4 mx-auto mb-12 sm:px-6 md:px-8"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Glowing Background Behind Card */}
                    <div className="absolute inset-0 opacity-50 -z-10 rounded-2xl bg-gradient-to-br from-blue-700 via-purple-600 to-indigo-700 blur-xl"></div>

                    {/* Main Card */}
                    <div className="relative overflow-hidden bg-gray-900 shadow-lg bg-opacity-90 rounded-2xl">
                        <div className="flex flex-col items-center sm:flex-row">
                            {/* Image Section with Circular Shape */}
                            <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] p-8">
                                <div className="relative w-full h-full overflow-hidden border-4 border-blue-400 rounded-full">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                            {/* Speech and Info Section */}
                            <div className="relative flex flex-col justify-center p-8 text-gray-50 sm:w-[60%]">
                                {/* Decorative Element */}
                                <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-red-400 blur-2xl opacity-30"></div>

                                <p className="relative mb-6 text-lg italic leading-relaxed sm:text-xl font-handwriting">
                                    <span className="absolute font-serif text-5xl text-blue-400 -top-4 -left-6">
                                        “
                                    </span>
                                    {leader.speech}
                                    <span className="absolute font-serif text-5xl text-blue-400 -bottom-4 -right-6">
                                        ”
                                    </span>
                                </p>
                                <h3 className="text-3xl font-bold text-blue-400">
                                    {leader.name}
                                </h3>
                                <p className="text-lg text-gray-400">{leader.title}</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default LeaderSpeechSection;
