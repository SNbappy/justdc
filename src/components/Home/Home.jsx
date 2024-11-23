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
    const sliderRef = useRef(null);
    const aboutRef = useRef(null);
    const achievementsRef = useRef(null);
    const joinRef = useRef(null);
    const meetTeamRef = useRef(null);

    // Track visibility
    const isSliderInView = useInView(sliderRef, { margin: "-50% 0px -50% 0px" });
    const isAboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
    const isAchievementsInView = useInView(achievementsRef, { margin: "-50% 0px -50% 0px" });
    const isJoinInView = useInView(joinRef, { margin: "-50% 0px -50% 0px" });
    const isMeetTeamInView = useInView(meetTeamRef, { margin: "-50% 0px -50% 0px" });

    // Update background color only when visibility changes
    useEffect(() => {
        if (isSliderInView) setBgColor("#fce4ec"); // Light pink for AchievementSlider
        else if (isAboutInView) setBgColor("#f3e8ff"); // Light purple for About section
        else if (isAchievementsInView) setBgColor("#e0f7fa"); // Light cyan for Achievements section
        else if (isJoinInView) setBgColor("#fff3e0"); // Light orange for Join section
        else if (isMeetTeamInView) setBgColor("#e8f5e9"); // Light green for Meet The Team section
    }, [isSliderInView, isAboutInView, isAchievementsInView, isJoinInView, isMeetTeamInView]); // Dependencies

    return (
        <motion.div
            className="relative min-h-screen overflow-hidden"
            animate={{ backgroundColor: bgColor }} // Animate the full background
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            {/* Animated Background Circles */}
            <motion.div
                className="absolute rounded-full -top-20 -left-10 w-96 h-96 bg-gradient-to-r from-blue-300 to-purple-300 opacity-40 blur-2xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 20, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                }}
            ></motion.div>
            <motion.div
                className="absolute rounded-full -bottom-20 -right-10 w-96 h-96 bg-gradient-to-r from-pink-300 to-yellow-300 opacity-40 blur-2xl"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, -20, 20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                }}
            ></motion.div>
            <motion.div
                className="absolute w-64 h-64 rounded-full top-1/3 left-1/4 bg-gradient-to-r from-green-300 to-teal-300 opacity-30 blur-xl"
                animate={{
                    scale: [1, 1.5, 1],
                    x: [-10, 10, -10],
                    y: [-10, 10, -10],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                }}
            ></motion.div>
            {/* Additional Circles */}
            <motion.div
                className="absolute w-32 h-32 rounded-full top-10 right-1/3 bg-gradient-to-r from-red-300 to-orange-300 opacity-20 blur-xl"
                animate={{
                    scale: [1, 1.8, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            ></motion.div>
            <motion.div
                className="absolute w-48 h-48 rounded-full opacity-25 bottom-32 left-10 bg-gradient-to-r from-purple-300 to-indigo-300 blur-lg"
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                }}
            ></motion.div>
            <motion.div
                className="absolute w-20 h-20 rounded-full bottom-10 right-20 bg-gradient-to-r from-yellow-400 to-pink-400 opacity-30 blur-md"
                animate={{
                    x: [-5, 5, -5],
                    y: [5, -5, 5],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
            ></motion.div>

            {/* Page Content */}
            <div className="relative z-10 space-y-16">
                <div ref={sliderRef}>
                    <AchievementSlider />
                </div>
                <div ref={aboutRef}>
                    <AboutSection />
                </div>
                <div ref={achievementsRef}>
                    <AchievmentsSection />
                </div>
                <div ref={joinRef}>
                    <JoinSection />
                </div>
                <div ref={meetTeamRef}>
                    <MeetTheTeam />
                </div>
            </div>
        </motion.div>
    );
};

export default Home;
