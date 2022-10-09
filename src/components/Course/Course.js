import React from 'react';
import './Course.css';

const Course = ({course}) => {
    const {name, img, cover, price, courseName, designation} = course;
    return (
      <div className="border border-gray-200 p-5 hover:bg-gray-100">
        <img className="h-48 w-full" src={cover} alt="" />
        <img
          className="w-20 h-20 rounded-full mx-auto mt-[-50px] border-2 z-10"
          src={img}
          alt=""
        />
        <p className="font-semibold text-gray-600">{name}</p>
        <p className="text-gray-500">{designation}</p>
        <p className="text-xl font-semibold text-gray-600 mt-4">{courseName}</p>
        <div className='mx-5 border-t mt-5'>
          <p className="text-2xl text-gray-500 font-bold mt-4">${price}</p>
        </div>
      </div>
    );
};

export default Course;