import React from 'react'
import './heading.css'
import Mcqs from './MCQs/ForexMcqs.jsx'

function Forex() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>What is Forex?</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src="https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/what-is-forex-KJNWmj7aPVg/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    <Mcqs/>
    
    </>
  )
}

export default Forex