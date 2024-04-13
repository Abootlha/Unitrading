import React from 'react'
import './heading.css'
import Mcqs from './MCQs/ECNBrokkersDifferentQuiz.jsx'
function EcnBrokersDifferent() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>How are ECN Brokers Different?</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/how-are-ecn-brokers-different-Z2cwc9tJdvr/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <Mcqs/>
    </>
  )
}

export default EcnBrokersDifferent