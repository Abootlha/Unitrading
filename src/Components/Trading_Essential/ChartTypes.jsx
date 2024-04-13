import React from 'react'
import './heading.css'
import Mcqs from './MCQs/ChartTypesQuiz.jsx'
function ChartTypes() {
  return (
    <>
    
    <div className='text'>
    <h1 className='heading'>Chart Types</h1>
</div>

<div className="video-container"> {/* Apply the CSS class */}
  <video controls width="90%">
    <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/chart-types-ibKr3y2qTWJ/EN.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<Mcqs/>
    
    </>
  )
}

export default ChartTypes