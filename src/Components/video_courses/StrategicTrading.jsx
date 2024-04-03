import React from 'react'
import { useLocation } from 'react-router-dom';
import Video_linear_card from './video_linear_card.jsx';
import './css/TradingEssential.css'
import Checkbox from './../../assets/images/checklesson.svg'
import './css/TradingEssential.css'
function StrategicTrading() {

    const { state } = useLocation();
    const { title } = state;

    const titles = ['History of Japanese Candlestick Analysis','Benefits of Using Candlesticks','Candlestick Structure','Doji','The Long-Legged Doji and the High Wave','How to Trade the Long-Legged Doji and the High Wave','The Gravestone Doji and the Dragonfly Doji','How to Trade the Gravestone Doji and the Dragonfly Doji','Shooting Star and Inverted Hammer','How to Trade Shooting Star and Inverted Hammer','Dark Cloud Cover','How to Trade Dark Cloud Cover','Three White Soldiers and Three Black Crows','How to Trade Three White Soldiers and Three Black Crows','Morning Star and Evening Star','How to Trade Morning Star and Evening Star'];
    const titles1 = ['What are Harmonic Price Patterns?','The ABCD Pattern','The Gartley Pattern','The BAT Pattern','The Crab Pattern','The Butterfly Pattern','The Shark Pattern','The Cypher Pattern','The Three Drives Pattern','The Wolfe Waves Pattern'];
    const titles2 = ['What Is a Trading Strategy?',"The Pop 'n' Stop and Drop 'n' Stop","How to Trade the Pop 'n' Stop and Drop 'n' Stop",'The Bladerunner','How to Trade the Bladerunner','Bolly Band Bounce','How to Trade Bolly Band Bounce','Daily Fibonacci Pivot','How to Trade the Daily Fibonacci Pivot','London Hammer','How to Trade Market Opens','The Forex Fractal','How to Trade the Forex Fractal'];
    const titles3 = ['What is Fibonacci Trading?',,'How Reliable are Fibonacci Retracements',,'How to Trade Fibonacci Retracements',,'How to Trade Fibonacci Extensions',,'Common Mistakes with Fibonacci Tools',,'Fibonacci Trading Strategies'];
    const titles4 = ['Introduction to Elliott Wave Theory','Impulse Waves','Corrective Waves','Fractal Nature of Elliott Waves','How to Trade Elliott Waves','Rules and Tips for Using Elliott Waves'];
    const titles5 = ['Three High Probability Trading Setups'];

  return (
    <>
    
    <div className='Container'>
        <h1 className='title'>{title}</h1>
        <div className='progressBar'></div>
        <div>
            <h3 className='Course'>Course Content</h3>
            <h4 className='heading1'>Japanese Candlestick Patterns</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
        <div>

            <h4 className='heading2'>Harmonic Price Patterns</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles1.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
        <div>
           
            <h4 className='heading2'>Trading Strategies</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles2.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
        <div>

            <h4 className='heading2'>Fibonacci Trading</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles3.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
        <div>

            <h4 className='heading2'>Elliott Wave Theory</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles4.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>

        <div>

            <h4 className='heading2'>Bonus: Three High Probability Trading Setups</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles5.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
        </div>

    </div>
        
    </div>
    
    
    </>
  )
}

export default StrategicTrading