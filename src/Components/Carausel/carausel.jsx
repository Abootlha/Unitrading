import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './../css/HomePage.css';
import Data from './data.json';
import Slider from "react-slick"; 


function Carousel() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setFeedbackData(Data); 
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index); 
  };

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const headingStyle = {
    fontSize: '45px',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
  };

  return (
    <section id="testimonials" className="feedback text-center">
      <h2 className='heading' style={headingStyle}>Student Feedback</h2>
      <div className="container" style={{ paddingBottom: '70px' }}>
        <div className="">
          <Slider {...settings}> {/* Use Slider component with provided settings */}
            {Data.map((Carausel, index) => (
              <div key={index} className="feedback__item">
                <h3 className="feedback__heading" style={{ fontSize: '30px', fontWeight: '800'}}>{Carausel.feedback}</h3><br />
                <p className="feedback__text">{Carausel.feedbackParagraph}</p>
                <p className="feedback__work" style={{fontWeight: '700'}}>{Carausel.Trading_Experience}{Carausel.Preferred_markets}</p><br />
                <p className="feedback__name">{Carausel.name}</p><br />
                <p className="feedback__country">{Carausel.professions}{Carausel.Country}</p><br />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
