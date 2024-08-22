import React from 'react'
import './heading.css'
import Mcqs from './MCQs/LotsQuiz.jsx'
function Lots() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>Lots</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/lots-zigJFQtJ0pJ/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    <Mcqs/>
    </>
  )
}

export default Lots