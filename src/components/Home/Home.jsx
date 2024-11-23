import AboutSection from "./AboutSection";
import AchievementSlider from "./AchievementSlider";
import AchievementsSection from "./AchievmentsSection";
import Footer from "./Footer";
import JoinSection from "./JoinSection";
import NavBar from "./NavBar";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <AchievementSlider></AchievementSlider>
            <AboutSection></AboutSection>
            <AchievementsSection></AchievementsSection>
            <JoinSection></JoinSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;