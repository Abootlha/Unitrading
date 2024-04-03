import React from 'react';
import './AlertBox.css'; // Import your CSS file
import correct from './../../assets/images/correct.svg';
import incorrect from './../../assets/images/incorrect.svg';

const AlertBox = ({ type, message }) => {
  // Determine the class name based on the type of alert
  const alertClassName = type === 'correct' ? 'quiz-alert correct-alert' : 'quiz-alert incorrect-alert';

  // Render the alert box
  return (
    <div className={alertClassName}>
      {/* Use correct or incorrect SVG based on the type */}
      <img className="emoji" src={type === 'correct' ? correct : incorrect} width="48" height="48" alt={type === 'correct' ? 'Happy Face' : 'Sad Face'} />
      <div className="message">{message}</div>
    </div>
  );
};

export default AlertBox;
