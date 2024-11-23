import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AchievementSlider from "./AchievementSlider";
import AboutSection from "./AboutSection"
import AchievmentsSection from "./AchievmentsSection"

const Home = () => {
    const sectionRef = useRef(null);
    // const isInView = useInView(sectionRef, { once: true });

    return (
        <div
            ref={sectionRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-r from-indigo-100 via-purple-50 to-pink-50"
        >
            {/* Animated Background Circles */}
            <motion.div
                className="absolute rounded-full -top-20 -left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 opacity-30 blur-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 15, -15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
            ></motion.div>
            <motion.div
                className="absolute rounded-full -bottom-20 -right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-30 blur-2xl"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -15, 15, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                }}
            ></motion.div>

            {/* Content */}
            {/* <motion.div
                className="relative z-10 px-6 py-16 mx-auto space-y-16 text-center max-w-7xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="text-4xl font-extrabold tracking-tight text-gray-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    Welcome to Home Page
                </motion.h1>
                <motion.p
                    className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    Experience a beautifully crafted home page with dynamic animations
                    and engaging design, tailored to replicate the JoinSection.
                </motion.p>
            </motion.div> */}
            <AchievementSlider></AchievementSlider>
            <AboutSection></AboutSection>
            <AchievmentsSection></AchievmentsSection>
        </div>
    );
};

export default Home;
