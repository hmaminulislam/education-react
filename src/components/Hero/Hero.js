import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
      <div className="hero-container">
        <div className="w-6/12 mx-auto flex items-center justify-center h-full">
          <div>
            <h3 className="text-4xl text-orange-400 mb-5">Premeum Quality</h3>
            <h2 className="text-5xl text-white font-semibold mb-4">
              EDUCATION PLUS FOR FUTURES
            </h2>
            <p className="text-gray-300 mb-6">
              Aentegers sollicitudin molestie ante et dictum laoreet we are the
              Excilent. Nascetur ridiculus mus. Proin porta lectus eleifend.
            </p>
            <button className="rounded-md bg-orange-400 text-white py-3 px-5 font-semibold mr-4">
              REGINTRATION
            </button>
            <button className="rounded-md bg-transparent text-orange-400 border border-orange-400 py-3 px-5 font-semibold">
              ALL COURSES
            </button>
          </div>
        </div>
      </div>
    );
};

export default Hero;