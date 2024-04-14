import React, { useState, useEffect } from 'react';
import CourseCont from './courseCont';
import './css/courses.css'
import './Technical Analysis Article/TechnicalAnalysis.js'
// import Header from './../Components/Header/AuthenticatedHeader.jsx';
import { useNavigate } from 'react-router-dom';

function Courses() {
    const [courses,setCourses]=useState([]);
    const token = localStorage.getItem('token');
    const headers = { Authorization: token};
    const navigate = useNavigate();

    // console.log(req.headers);

    useEffect(() => {
        if(!localStorage.getItem("isAuthenticated")){
            navigate('/login')
           }

    
    }, []);


return (
    <>

    {/* <Header/> */}
        <div className='coursesPageCont'>
            <h1 className='Coursestitle'>Student Area</h1>
            <div className='CardsSections'>
                <p>Courses</p>
                <div className='cardsCont'>
                    <CourseCont title='Trading Essentials' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/video-essentials-v3.svg' route='trading-essential'/>
                    <CourseCont title='Technical Trading' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/video-technical-v3.svg'  route='technical-trading'/>
                    <CourseCont title='Strategic Trading' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/video-strategic-v3.svg'  route='strategic-trading'/>
                    <CourseCont title='MetaTrader 4' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/video-mt4-v3.svg'  route='meta-trader-4'/>
                    <CourseCont title='MetaTrader 5' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/video-mt5-v3.svg'  route='meta-trader-5'/>
                    <CourseCont title='MetaTrader 5 Mobile' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/video-mt5-mobile-v3.svg'  route='meta-trader-5-mobile'/>
                </div>
            </div>
        
            <div className='CardsSections'>
                <p>EBooks</p>
                <div className='cardsCont'>
                    <CourseCont title="Beginner's Guide to Trading" imgUrl='https://unitrading.io/wp-content/themes/learn5/img/ebook-beginner-v3.svg'  route='/beginners-guide-to-trading-ebook'/>
                    <CourseCont title='Advanced Guide to Trading' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/ebook-beginner-v3.svg'  route='/advanced-guide-to-trading-ebook'/>
                    <CourseCont title='Guide to Cryptocurrencies' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/ebook-beginner-v3.svg'  route='/guide-to-cryptocurrencies-ebook'/>
                </div>
            </div>
        
            <div className='CardsSections'>
                <p>Market Research</p>
                <div className='cardsCont'>
                    <CourseCont title='Market Research Videos' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/market-research-videos-v3.svg'  route='/Market-videos'/>
                    <CourseCont title='Technical Analysis Article ' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/technical-analysis-v3.svg'  route='/Technical-Analysis-article'/>
                    <CourseCont title='Market News' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/market-news-v3.svg'  route='/Market-news'/>
                    <CourseCont title='Market Signals' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/trading-signals-v3.svg'  route='/Market-signal'/>
                </div>
            </div>
        
            <div className='CardsSections'>
                <p>Calendars</p>
                <div className='cardsCont'>
                    <CourseCont title='Economic Calendar' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/economic-calendar-v3.svg'  route='/Economic-calendar'/>
                    <CourseCont title='Cryptocurrency Calendar' imgUrl='https://unitrading.io/wp-content/themes/learn5/img/crypto-calendar-v3.svg'  route='/Crypto-calendar'/>
                </div>
            </div>

        </div>
      
    </>
  );
}

export default Courses;
