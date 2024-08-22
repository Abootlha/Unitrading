import React from 'react'
import './heading.css'
import Mcqs from './MCQs/BalanceAndEquityQuiz.jsx'
function BalanceAndEquity() {
  return (
    <>
    

    <div className='text'>
        <h1 className='heading'>Balance and Equity</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/balance-and-equity-p3VNQ7ZaOec/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <Mcqs/>
    
    </>
  )
}

export default BalanceAndEquity