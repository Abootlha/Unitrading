import React from 'react'
import './heading.css'

function NotFollowingAPlan() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>Not Following a Plan</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/not-following-a-plan-n9P4shKXaRr/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    
    </>
  )
}

export default NotFollowingAPlan