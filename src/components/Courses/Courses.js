import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        const dataLoad = async () => {
            const res = await axios.get("courses.json");
            setCourses(res.data)
        }
        dataLoad()
    }, [])
    return (
      <div className='my-20'>
        <h2 className='text-4xl font-semibold text-gray-600 mb-6'>Offerd Courses</h2>
        <div className="grid grid-cols-3 gap-8 px-20">
          {courses.map((course) => (
            <Course course={course} key={course.id}></Course>
          ))}
        </div>
      </div>
    );
};

export default Courses;