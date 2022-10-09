import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CoursesInfo from '../CoursesInfo/CoursesInfo';

const CoursesInfos = () => {
    const [coursesInfos, setCoursesInfos] = useState([]);
    useEffect( () => {
        const loadCoursesInfos = async () => {
            const res = await axios.get(
              "coursesinfodata.json"
            );
            setCoursesInfos(res.data)
        } 
        loadCoursesInfos()
    }, [])
    return (
      <div className="grid grid-cols-3 gap-5 px-20 bg-fuchsia-400 py-14">
        {coursesInfos.map((coursesInfo) => (
          <CoursesInfo
            key={coursesInfo.id}
            coursesInfo={coursesInfo}
          ></CoursesInfo>
        ))}
      </div>
    );
};

export default CoursesInfos;