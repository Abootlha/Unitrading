import React from 'react'
import { useLocation } from 'react-router-dom';
import Video_linear_card from './video_linear_card';
import './css/TradingEssential.css'
import Checkbox from './../../assets/images/checklesson.svg'
function TradingEssential() {
    const { state } = useLocation();
    const { title } = state;

    // videos titles
    const titles = ['What is Forex?', "What's a CFD?", "What’s a Commodity?", 'What’s an Index?', 'What’s a Share?','Pips, Points, and Ticks'];
    const titles1 = ['Balance and Equity', 'Bull and Bear Market', 'Lots', 'Bid and Ask Prices','Short and Long Positions','Stop Loss and Take Profit','Pending Orders','Leverage and Margin','Chart Types','Trading Emotionally'];
    const titles2 = ['Averaging Down', 'Trading Without Risk Control', 'Not Following a Plan', 'What is ECN?'];
    const titles3 = ['How are ECN Brokers Different?', 'Advantages of ECN', 'What’s a Cryptocurrency?'];
    const titles4 = ['Stablecoins', 'Blockchain', ' Mining','Staking','Coins and Tokens','Forks','Bitcoin'];
    const titles5 = ['Ethereum', 'Ripple', 'Tether','Dogecoin','Alternative Cryptocurrencies','To Trade or to Invest'];
    const titles6 = ['How to Trade Cryptocurrency', 'Risks of Trading Crypto','How to Invest in Cryptocurrency'];
    const titles7 = ['Risks of Investing in Crypto', 'ICO', 'NFT','What’s a Wallet?'];
    const titles8 = ['Hot Wallet', 'Cold Wallet', 'How to Choose the Right Wallet'];
  return (
    <div className='Container'>
        <h1 className='title'>{title}</h1>
        <div className='progressBar'></div>
        <div>
            <h3 className='Course'>Course Content</h3>
            <h4 className='heading1'>Introduction</h4>
            <div className='content'>
                {/* dynamic content */}
                {titles.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3 className='heading2'>Terminology</h3>
            <div className='content'>
                {titles1.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3 className='heading2'>Worst Mistakes Traders Make</h3>
            <div className='content'>
                {titles2.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3 className='heading2'>ECN</h3>
            <div className='content'>
                {titles3.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3  className='heading2'>Introduction to Cryptocurrencies</h3>
            <div className='content'>  
                {titles4.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3 className='heading2'>Cryptocurrencies</h3>
            <div className='content'>   
                {titles5.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3 className='heading2'>Trading Crypto</h3>
            <div className='content'>   
                {titles6.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3 className='heading2'>Investing in Crypto</h3>
            <div className='content'>   
                {titles7.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
        <div>
            <h3 className='heading2'>Storing Cryptocurrency</h3>
            <div className='content'>   
                {titles8.map(title =>(
                    <Video_linear_card title={title} imgUrl={Checkbox} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default TradingEssential