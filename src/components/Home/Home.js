import React from 'react';
import CoursesInfos from '../CoursesInfos/CoursesInfos';
import Hero from '../Hero/Hero';
import LearnEdu from '../LearnEdu/LearnEdu';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <LearnEdu></LearnEdu>
            <CoursesInfos></CoursesInfos>
        </div>
    );
};

export default Home;