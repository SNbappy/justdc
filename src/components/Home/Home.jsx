import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import AchievementSlider from "./AchievementSlider";
import AboutSection from "./AboutSection";
import AchievmentsSection from "./AchievmentsSection";
import JoinSection from "./JoinSection";
import MeetTheTeam from "./MeetTheTeam";

const Home = () => {
    const [bgColor, setBgColor] = useState("#f3e8ff"); // Initial background color

    // Refs for sections
    const aboutRef = useRef(null);
    const achievementsRef = useRef(null);
    const joinRef = useRef(null);

    // Track visibility
    const isAboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
    const isAchievementsInView = useInView(achievementsRef, { margin: "-50% 0px -50% 0px" });
    const isJoinInView = useInView(joinRef, { margin: "-50% 0px -50% 0px" });

    // Update background color only when visibility changes
    useEffect(() => {
        if (isAboutInView) setBgColor("#f3e8ff"); // Light purple for About section
        else if (isAchievementsInView) setBgColor("#e0f7fa"); // Light cyan for Achievements section
        else if (isJoinInView) setBgColor("#fff3e0"); // Light orange for Join section
    }, [isAboutInView, isAchievementsInView, isJoinInView]); // Dependencies

    return (
        <motion.div
            className="relative min-h-screen overflow-hidden"
            animate={{ backgroundColor: bgColor }} // Animate the full background
            transition={{ duration: 0.6, ease: "easeInOut" }}
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

            {/* Page Content */}
            <div className="relative z-10 space-y-16">
                <AchievementSlider/>
                <div ref={aboutRef}>
                    <AboutSection />
                </div>
                <div ref={achievementsRef}>
                    <AchievmentsSection />
                </div>
                <div ref={joinRef}>
                    <JoinSection />
                </div>
                <MeetTheTeam/>
            </div>
        </motion.div>
    );
};

export default Home;
