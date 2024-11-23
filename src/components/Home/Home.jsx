import AboutSection from "./AboutSection";
import AchievementSlider from "./AchievementSlider";
import AchievementsSection from "./AchievmentsSection";
import JoinSection from "./JoinSection";

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-animation">
            <AchievementSlider />
            <AboutSection />
            <AchievementsSection />
            <JoinSection />
        </div>
    );
};

export default Home;
