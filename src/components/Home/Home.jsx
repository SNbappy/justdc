import React from 'react';
import AchievementSlider from './AchievementSlider';
import WhyJoinSection from './WhyJoinSection';
import SpeechCards from './SpeechCards';
import WhatWeProvide from './WhatWeProvide';
import AchievementsSection from './AchievmentsSection';
import DebateClubAchievements from './DebateClubAchievements';
import JoinSection from './JoinSection';
import Gallery from './Gallery';
import RecentEventSection from './RecentEventSection';
import RecentEvents from './RecentEvents';

const Home = () => {
    return (
        <div>
            <AchievementSlider></AchievementSlider>
            <WhyJoinSection></WhyJoinSection>
            <SpeechCards></SpeechCards>
            <WhatWeProvide></WhatWeProvide>
            <RecentEvents></RecentEvents>
            {/* <RecentEventSection></RecentEventSection> */}
            <AchievementsSection></AchievementsSection>
            <DebateClubAchievements></DebateClubAchievements>
            <JoinSection></JoinSection>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;