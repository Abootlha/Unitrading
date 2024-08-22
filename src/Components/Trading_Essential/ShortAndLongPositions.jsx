import React from 'react'
import './heading.css'
import Mcqs from './MCQs/ShortAndLongQuiz.jsx'
function ShortAndLongPositions() {
  return (
    <>

    <div className='text'>
    <h1 className='heading'>Short and Long Positions</h1>
</div>

<div className="video-container"> {/* Apply the CSS class */}
  <video controls width="90%">
    <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/short-long-positions-SKVu3wnYpN5/EN.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<Mcqs/>
</>
  )
}

export default ShortAndLongPositions