import React from 'react'
import './heading.css'

function RiskOfInvestingInCrypto() {
  return (
    <>
    
    <div className='text'>
        <h1 className='heading'>Risks of Investing in Crypto</h1>
    </div>

    <div className="video-container"> {/* Apply the CSS class */}
      <video controls width="90%">
        <source src=" https://wtcuniversity8712.s3.eu-west-1.amazonaws.com/lessons/risks-of-investing-in-crypto-8hTpXNMkfN6/EN.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
    
    
    </>
  )
}

export default RiskOfInvestingInCrypto