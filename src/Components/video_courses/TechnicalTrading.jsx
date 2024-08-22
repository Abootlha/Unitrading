import React from 'react'
import { useLocation } from 'react-router-dom';
import Video_linear_card from './video_linear_card.jsx';
import './css/TradingEssential.css'
import Checkbox from './../../assets/images/checklesson.svg'

function TechnicalTrading() {
    const { state } = useLocation();
    const { title } = state;

    const titles = ['What is Fundamental Analysis?','Economic Calendar','How to Apply an Economic Calendar'];
    const titles1 = ['What is Technical Analysis?','Support and Resistance','How to Find Support and Resistance Levels','Trend','How to Identify Trends','Chart Time Frame'];
    const titles2 = ['What’s a Technical Indicator?','Moving Average','How to Apply Moving Averages','MACD','How to Use MACD','Bollinger Bands','How to Apply Bollinger Bands','RSI','How to Use RSI'];
    const titles3= ['Cup and Handle','How to Trade Cup and Handle','Ascending and Descending Triangles','How to Trade Ascending and Descending Triangles' ,'Rising and Falling Wedges','How to Trade Rising and Falling Wedges','Triple Top and Bottom','How to Trade Triple Top and Bottom','Head and Shoulders','How to Trade Head and Shoulders'];

    
  return (
    <>
    
    <div className='Container'>
        <h1 className='title'>{title}</h1>
        <div className='progressBar'></div>
        <div>
            <h3 className='Course'>Course Content</h3>
            <h4 className='heading1'>Fundamental Analysis</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
        <div>
            <h3 className='heading2'>Technical Analysis</h3>
            <div className='content'>
                {/* dynamic content */}
                {titles1.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
        <div>
            <h3 className='heading2'>Indicators</h3>
            <div className='content'>
                {/* dynamic content */}
                {titles2.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
        <div>
            <h3 className='heading2'>Chart Patterns</h3>
            <div className='content'>
                {/* dynamic content */}
                {titles3.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
    </div>
    
    
    </>
  )
}

export default TechnicalTrading