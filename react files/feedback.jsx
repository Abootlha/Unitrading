import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import feedbackData from './data.json';

function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    setFeedbackList(feedbackData);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const feedbackStyle = {
    color: '#616D7A',
    fontWeight: '800',
    fontSize: '30px',
    fontFamily: 'sans-serif',
    textAlign: 'center',
    margin: '20px 0',
  };

  const paragraphStyle = {
    textAlign: 'center',
    color: '#2C2F32',
    margin: '0 20px 20px',
    minHeight: '120px',
    fontSize: '17px',
  };

  const infoStyle = {
    textAlign: 'center',
    color: '#616D7A',
    margin: '0 20px',
    fontSize: '20px',
    fontWeight: '600',
  };

  return (
    <div className="feedback-container">
      <Slider {...settings}>
        {feedbackList.map((feedback) => (
          <div key={feedback.id}>
            <div style={{ borderRadius: '15px', width: '765px', height: '392.23px', border: '1px solid #0B86FF', padding: '20px', marginRight: '20px' }}>
              <p style={feedbackStyle}>{feedback.feedback}</p>
              <p style={paragraphStyle}>{feedback.feedbackParagraph}</p>
              <p style={infoStyle}>
                {feedback.Trading_Experience} {feedback.Preferred_markets}
              </p>
              <p style={infoStyle}>{feedback.name}</p>
              <p style={infoStyle}>{feedback.professions} {feedback.Country}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Feedback;
