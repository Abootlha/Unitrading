import React from 'react'
import './heading.css'
function TradeMarketOpens() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>How to Trade Market Opens</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src="https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/how-to-trade-market-opens-C3c8WPi2pBq/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    </>
  )
}

export default TradeMarketOpens