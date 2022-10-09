import { faCirclePlay, faAddressBook, faBook, faGraduationCap, faCertificate, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CoursesInfo = ({coursesInfo}) => {
    const {name, icon, text} = coursesInfo;
    return (
      <div className="bg-sky-300 py-5 px-3">
        <FontAwesomeIcon icon={faAddressBook} />
        <h3 className="text-2xl text-white font-semibold mb-5">{name}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    );
};

export default CoursesInfo;
