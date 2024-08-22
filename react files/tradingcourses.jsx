import CoursesBgLarge from './../assets/images/CoursesBg.svg'
import CoursesBgSmall from './../assets/images/courses-bg-sm.svg'
import './css/tradingcourses.css'
import React, { useState, useEffect } from 'react';



function tradingcourses() {


  const [bgImage, setBgImage] = useState(window.innerWidth > 988 ? CoursesBgLarge : CoursesBgSmall);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth > 988 ? CoursesBgLarge : CoursesBgSmall);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
    
    <div className="custom-container">
      <img src={bgImage} className="custom-background" alt="courses svg" />
      <div className="custom-heading-container">
        <h1 className="custom-heading">Our trading courses will show you to:</h1>
      </div>
    </div>
    
    
    </>
  )
}

export default tradingcourses