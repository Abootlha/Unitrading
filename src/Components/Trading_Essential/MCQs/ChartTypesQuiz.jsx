import React, { useState } from 'react';
import AlertBox from '../../Quiz_AlertBox/AlertBox.jsx';
import './../QuizCSS/Quiz.css'; 
import line from './../../../assets/images/line.png';
function ChartTypesQuiz() {
    const [selectedOption, setSelectedOption] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [answered, setAnswered] = useState(false);
  
    const quizData = [
      {
        questions: 'What kind of chart is this?',
        options: ['Candlestick Chart','Line Chart','Bar Chart'],
        answer: 'Line Chart',
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
    <>
    
    <div>
    <h1 className='Quiz'>Quiz</h1>
    <div className="quiz-container">
      <div className="quiz-content">
        {quizData.map((question, index) => (
          <div key={index}>
            <h3>{question.questions}</h3>
            <img src={line} alt="Line" className="line-image" />
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
    
    
    
    </>
  )
}

export default ChartTypesQuiz