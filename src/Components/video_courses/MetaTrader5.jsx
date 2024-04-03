import React from 'react'
import { useLocation } from 'react-router-dom';
import Video_linear_card from './video_linear_card.jsx';
import './css/TradingEssential.css'
import Checkbox from './../../assets/images/checklesson.svg'
import './css/TradingEssential.css'
function MetaTrader5() {
    const { state } = useLocation();
    const { title } = state;

    const titles = ["What's New in MetaTrader 5", 'Application Overview', 'Creating a Demo Account', 'Opening an Order','Creating a Pending Order','Closing an Order','Setting a Stop Loss and Take Profit','Using a Trailing Stop','One-Click Trading','Adding Indicators to the Chart','Using Graphical Markup Tools','Customizing Your Workspace','Algorithmic Trading'];
 
  return (
    <>
    <div className='Container'>
        <h1 className='title'>{title}</h1>
        <div className='progressBar'></div>
        <div>
            <h3 className='Course'>Course Content</h3>
            <div className='content'>
                {/* dynamic content */}
                {titles.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
            
        </div>
    </div>
    
    
    
    </>
  )
}

export default MetaTrader5