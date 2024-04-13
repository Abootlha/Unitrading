import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You need Axios or any other library for fetching data
import './../css/HomePage.css'
import Data from './data.json';
// import './slick.js'

function carousel() {
  const [feedbackData, setFeedbackData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setFeedbackData(Data); // Set initial data when component mounts
  }, []);

  // Function to handle dot click event
  const handleDotClick = (index) => {
    setActiveIndex(index); // Update active slide index
  };

  return (
    <section id="testimonials" className="feedback text-center">
      <h2>Student Feedback</h2>
      <div className="container">
        <div className="">
          <div className="feedback__slider slick-initialized slick-slider slick-dotted">
            <div className="slick-list draggable">
              <div className="slick-track">
                {Data.map((Carausel, index) => (
                  <div key={index} className="slick-slide">
                    <div className="feedback__item" style={{ width: '100%', display: 'flex' }}>
                      <h3 className="feedback__heading">{Carausel.feedback}</h3>
                      <p className="feedback__text">{Carausel.feedbackParagraph}</p>
                      <p className="feedback__work">{Carausel.Trading_Experience}{Carausel.Preferred_markets}</p>
                      <p className="feedback__name">{Carausel.name}</p>
                      <p className="feedback__country">{Carausel.professions}{Carausel.Country}</p>
                    
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <ul className="slick-dots">
              {Data.map((_, index) => (
                <li key={index} role="presentation">
                  <button
                    type="button"
                    role="tab"
                    id={`slick-slide-control${index}`}
                    aria-controls={`slick-slide0${index}`}
                    aria-label={`${index + 1} of ${Data.length}`}
                    tabIndex={index === activeIndex ? '0' : '-1'}
                    className={index === activeIndex ? 'slick-active' : ''}
                    onClick={() => handleDotClick(index)} // Call handleDotClick on dot click
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default carousel;
