import React from 'react';
import './CoursesInfo.css';

const CoursesInfo = ({coursesInfo}) => {
    const {name, icon, text} = coursesInfo;
    return (
      <div className="py-6 px-3 courses-info rounded-md hover:bg-fuchsia-300 border border-fuchsia-300">
        <i className={icon}></i>
        <h3 className="text-2xl text-white font-semibold mb-5">{name}</h3>
        <p className="text-gray-600">{text}</p>
        <button className='mt-3 text-white'>Read More</button>
      </div>
    );
};

export default CoursesInfo;
