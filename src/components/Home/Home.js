import React from 'react';
import Courses from '../Courses/Courses';
import CoursesInfos from '../CoursesInfos/CoursesInfos';
import Hero from '../Hero/Hero';
import LearnEdu from '../LearnEdu/LearnEdu';

const Home = () => {
    return (
      <div>
        <Hero></Hero>
        <LearnEdu></LearnEdu>
        <CoursesInfos></CoursesInfos>
        <Courses></Courses>
      </div>
    );
};

export default Home;