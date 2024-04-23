import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Video_linear_card from './video_linear_card.jsx';
import './css/TradingEssential.css'
import Checkbox from './../../assets/images/checklesson.svg'
import './css/TradingEssential.css'
import ProgressBar from './ProgressBar.jsx';
// import ProgressBar from './ProgressBar.jsx';

function MetaTrader4() {
    const { state } = useLocation();
    const { title } = state;

    const titles = ['Terminal Window', 'Opening an Order','Creating a Pending Order','Closing an Order','Setting a Stop Loss and Take Profit','Using a Trailing Stop','One-Click Trading','Adding Indicators to the Chart']; 
    
  return (
    <>
    <div className='Container'>
            <h1 className='title'>{title}</h1><br />
            <ProgressBar />
            <div>
                <h3 className='Course'>Course Content</h3>
                <div className='content'>
                    {/* dynamic content */}
                    {titles.map((title, index) => (
                        <Video_linear_card key={index} title={title} imgUrl={Checkbox} onClick={() => handleClick(title)} />
                    ))}
                </div>
            </div>
        </div>
    
    
    
    </>
  )
}

export default MetaTrader4