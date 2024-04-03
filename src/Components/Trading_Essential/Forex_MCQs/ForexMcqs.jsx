import React, { useState } from 'react';
import AlertBox from './../../Quiz_AlertBox/AlertBox.jsx';
import './Quiz.css'; 

const ForexMcqs = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);
  const [answered, setAnswered] = useState(false);

  const quizData = [
    {
      questions: 'When you buy EUR/USD, you are basically…',
      options: ['Selling euros and buying U.S. dollars', 'Borrowing in euros and buying U.S. dollars', 'Selling U.S. dollars and buying euros', 'Buying euros and U.S. dollars'],
      answer: 'Selling U.S. dollars and buying euros',
    },
    
  ];

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckAnswer = () => {
    if (answered) return;
    const currentQuestion = quizData.find((question) => question.answer === selectedOption);
    if (currentQuestion) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setAnswered(true);
  };

  return (

   <div>
    <h1 className='Quiz'>Quiz</h1>
    <div className="quiz-container">
      <div className="quiz-content">
        {quizData.map((question, index) => (
          <div key={index}>
            <h3>{question.questions}</h3>
            <div className="options-container">
              {question.options.map((option, idx) => (
                <div key={idx} className="option">
                  <input
                    type="radio"
                    id={option}
                    name={`option-${index}`} // Use unique name for each question's options
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    disabled={answered}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button className="check-answer-button" onClick={handleCheckAnswer} disabled={answered}>Next</button>
        {isCorrect !== null && (
          <AlertBox
            type={isCorrect ? 'correct' : 'incorrect'}
            message={isCorrect ? 'Correct' : 'Incorrect'}
          />
        )}
      </div>
    </div>
    </div>
  );
};

export default ForexMcqs;
