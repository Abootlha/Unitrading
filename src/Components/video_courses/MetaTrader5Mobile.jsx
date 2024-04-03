import React from 'react'
import { useLocation } from 'react-router-dom';
import Video_linear_card from './video_linear_card.jsx';
import './css/TradingEssential.css'
import Checkbox from './../../assets/images/checklesson.svg'
import './css/TradingEssential.css'
function MetaTrader5Mobile() {
    const { state } = useLocation();
    const { title } = state;

    const titles = ['Application Overview in Iphone', 'Logging in to an Existing Account in Iphone', 'Opening an Order in Iphone', 'Creating a Pending Order in Iphone','Closing an Order in Iphone','Setting a Stop Loss and Take Profit in Iphone','One-Click Trading in Iphone','Adding Indicators to the Chart in Iphone'];
    const titles1 = ['Application Overview in Android', 'Logging in to an Existing Account in Android', 'Opening an Order in Android','Creating a Pending Order in Android','Closing an Order in Android','Setting a Stop Loss and Take Profit in Android','One-Click Trading in Android' ,'Adding Indicators to the Chart in Android'];
  return (
    <>
    <div className='Container'>
        <h1 className='title'>{title}</h1>
        <div className='progressBar'></div>
        <div>
            <h3 className='Course'>Course Content</h3>
            <h4 className='heading1'>MetaTrader 5 iPhone</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>

            <div>
            <h4 className='heading2'>MetaTrader 5 Android</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles1.map(titles =>(
                    <Video_linear_card title={titles} imgUrl={Checkbox} />
                ))}
            </div>


            </div>
            
        </div>
    </div>
    
    
    
    </>
  )
}

export default MetaTrader5Mobile