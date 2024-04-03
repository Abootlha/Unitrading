import React, { useState } from 'react';
import './../css/HomePage.css'
import Learn from './../../assets/images/learn.svg'
import Brain from './../../assets/images/brain.svg'
import Market from './../../assets/images/market.svg'
import StayUpToDate from './../../assets/images/stay-up-to-date.svg'
import level from './../../assets/images/levels-1.png';
import study from './../../assets/images/study-time-1.png';
import TradingSubject from './../../assets/images/trading-subjects-1.png';
import lessons from './../../assets/images/lessons-1.png';
import Student from './../../assets/images/students-1.png';
import './../css/h1.css'
import Hero from './../../assets/images/hero.jpg'
import Courses from './../../assets/images/CoursesBg.svg'
import PackageMarkcorrect from './../../assets/images/packages-mark-disabled.svg'
import PackageMarkWrong from './../../assets/images/packages-mark.svg'







    function HomePage() {



  return (
    <>





    
       <div>
       
       </div>

       <main>   
       <section className="banner banner__secondVersion" style={{ backgroundImage: `url(${Hero})` }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-6 col-12 banner-text">
                <h1>The ultimate academy’s trading courses will teach you how to trade</h1>
                <p className="banner-description">Study the operation of financial markets and begin trading.</p>
                <a className="btn" href="#packages">CHOOSE YOUR PACKAGE</a>
              </div>
            </div>
          </div>
        </section>

        {/* <div> 
        <Hero/>
    </div> */}
    
        
        <section id="process" className="ourRow" style={{ backgroundImage: `url(${Courses})` }}>
      <div className="ourRow__list container">
        <h2 className="ourRow__title">Our trading courses will show you to:</h2>
        <div className="row">

          <div className="ourRow__item">
            <img className="ourRow__icon" src={Learn} alt="Learn"/>
            <p className="ourRow__titleIcon">Learn</p>
            <p>Embark on an exciting and easy trading journey by using the tutorials, e-books, and lessons provided.</p>
          </div>

          <div className="ourRow__item">
            <img className="ourRow__icon" src={Brain} alt="Practice"/>
            <p className="ourRow__titleIcon">Practice</p>
            <p>Assimilate the content better by completing the assignments and quizzes after lessons.</p>
          </div>
          <div className="ourRow__item">
            <img className="ourRow__icon" src={Market} alt="Follow the Markets"/>
            <p className="ourRow__titleIcon">Follow the Markets</p>
            <p>Study the daily market updates and financial news to stay on top of the latest market trends.</p>
          </div>
          <div className="ourRow__item">
            <img className="ourRow__icon" src={StayUpToDate} alt="Stay Up to Date"/>
            <p className="ourRow__titleIcon">Keep Up to Date</p>
            <p>Our analytical tools will help you to respond to changing market conditions effectively.</p>
          </div>
        </div>
      </div>
    </section>
        
    <div className="academy academy__secondVersion" id="academy">
      <div className="container academy__container">
        <div className="academy__outer">
          <div className="row">
            <h2 className="academy__title">Our Academy’s Numbers:</h2>
          </div>
          <div className="row">
            <div className="academy__wrapper">
              <div className="academy__item">
                <div className="academy__itemText">
                  <div className="academy__number">3</div>
                  <div className="academy__description">levels of education</div>
                </div>
                <img src={level} className="academy__icon" alt="Levels"/>
              </div>
              <div className="academy__item">
                <div className="academy__itemText">
                  <div className="academy__number">10</div>
                  <div className="academy__description">hours of study time</div>
                </div>
                <img src={study} className="academy__icon" alt="Study Time"/>
              </div>
              <div className="academy__item">
                <div className="academy__itemText">
                  <div className="academy__number">20</div>
                  <div className="academy__description">trading subjects</div>
                </div>
                <img src={TradingSubject} className="academy__icon" alt="Trading Subjects"/>
              </div>
              <div className="academy__item">
                <div className="academy__itemText">
                  <div className="academy__number">155</div>
                  <div className="academy__description">lessons</div>
                </div>
                <img src={lessons} className="academy__icon" alt="Lessons"/>
              </div>
              <div className="academy__item">
                <div className="academy__itemText">
                  <div className="academy__number">500+</div>
                  <div className="academy__description">students</div>
                </div>
                <img src={Student} className="academy__icon" alt="Students"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
            <section id="packages" className="packages packages__secondVersion" >
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h2 className='packages'>Packages</h2>
                </div>
                <div className="col-12 cyrrency">
                                </div>
                <div className="col-12 packages__wrapper" >
                                    <div className="packages__item ">
                        <div className="packages__header">
                            <h3>Beginner</h3>
                            <div class="price">
                                <p>€249</p>
                                <p className="sale">
                                    <span>€</span>299</p>
                            </div>
                        </div>
                        <ul className="packages__list" >
                            <li>Trading Essentials Course</li>
                            <li className="disabled">Technical Trading Course</li>
                            <li className="disabled">Strategic Trading Course</li>
                            <li className="disabled">MT4 &amp; MT5 Tutorials</li>
                            <li>eBooks</li>
                            <li className="disabled">3 High-Probability Trading Setups</li>
                            <li className="disabled">Knowledge Checks</li>
                            <li className="disabled">Assignments</li>
                            <li className="disabled">Economic Calendar</li>
                            <li className="disabled">Cryptocurrency Calendar</li>
                            <li className="disabled">Daily Market News</li>
                            <li className="disabled">Daily Market Research</li>
                            <li className="disabled">Market Signals</li>
                            <li>47 Lessons</li>
                            <li>1 Hour Study Time</li>
                        </ul>
                        <a className="btn_wide" href="/">Buy Package</a>
                    </div>
                                    <div class="packages__item ">
                        <div className="packages__header">
                            <h3>Intermediate</h3>
                            <div className="price">
                                <p>€499</p>
                                <p className="sale">
                                    <span>€</span>599</p>
                            </div>
                        </div>
                        <ul className="packages__list">
                            <li>Trading Essentials Course</li>
                            <li>Technical Trading Course</li>
                            <li className="disabled">Strategic Trading Course</li>
                            <li>MT4 &amp; MT5 Tutorials</li>
                            <li>eBooks</li>
                            <li className="disabled">3 High-Probability Trading Setups</li>
                            <li className="disabled">Knowledge Checks</li>
                            <li className="disabled">Assignments</li>
                            <li>Economic Calendar</li>
                            <li>Cryptocurrency Calendar</li>
                            <li className="disabled">Daily Market News</li>
                            <li className="disabled">Daily Market Research</li>
                            <li className="disabled">Market Signals</li>
                            <li>104 Lessons</li>
                            <li>2 Hours Study Time</li>
                        </ul>
                        <a className="btn_wide" href="/">Buy Package</a>
                    </div>
    
                                    <div className="packages__item ">
                        <div className="packages__header">
                            <h3>Advanced</h3>
                            <div className="price">
                                <p>€999</p>
                                <p className="sale">
                                    <span>€</span>1199</p>
                            </div>
                        </div>
                        <ul className="packages__list">
                            <li>Trading Essentials Course</li>
                            <li>Technical Trading Course</li>
                            <li className="disabled">Strategic Trading Course</li>
                            <li>MT4 &amp; MT5 Tutorials</li>
                            <li>eBooks</li>
                            <li className="disabled">3 High-Probability Trading Setups</li>
                            <li>Knowledge Checks</li>
                            <li>Assignments</li>
                            <li>Economic Calendar</li>
                            <li>Cryptocurrency Calendar</li>
                            <li>Daily Market News</li>
                            <li className="disabled">Daily Market Research</li>
                            <li className="disabled">Market Signals</li>
                            <li>104 Lessons</li>
                            <li>2 Hours Study Time</li>
                        </ul>
                        <a className="btn_wide" href="/">Buy Package</a>
                    </div>
    
                                    <div className="packages__item ">
                        <div className="packages__header">
                            <h3>Trader</h3>
                            <div className="price">
                                <p>€2499</p>
                                <p className="sale">
                                    <span>€</span>2999</p>
                            </div>
                        </div>
                        <ul className="packages__list">
                            <li>Trading Essentials Course</li>
                            <li>Technical Trading Course</li>
                            <li className="disabled">Strategic Trading Course</li>
                            <li>MT4 &amp; MT5 Tutorials</li>
                            <li>eBooks</li>
                            <li className="disabled">3 High-Probability Trading Setups</li>
                            <li>Knowledge Checks</li>
                            <li>Assignments</li>
                            <li>Economic Calendar</li>
                            <li>Cryptocurrency Calendar</li>
                            <li>Daily Market News</li>
                            <li>Daily Market Research</li>
                            <li className="disabled">Market Signals</li>
                            <li>104 Lessons</li>
                            <li>5 Hours Study Time</li>
                        </ul>
                        <a className="btn_wide" href="/">Buy Package</a>
                    </div>
    
                    <div className="packages__item ">
                        <div className="packages__header">
                            <h3>Elite</h3>
                            <div className="price">
                                <p>€4999</p>
                                <p className="sale">
                                    <span>€</span>5999</p>
                            </div>
                        </div>
                        <ul className="packages__list">
                            <li>Trading Essentials Course</li>
                            <li>Technical Trading Course</li>
                            <li>Strategic Trading Course</li>
                            <li>MT4 &amp; MT5 Tutorials</li>
                            <li>eBooks</li>
                            <li>3 High-Probability Trading Setups</li>
                            <li>Knowledge Checks</li>
                            <li>Assignments</li>
                            <li>Economic Calendar</li>
                            <li>Cryptocurrency Calendar</li>
                            <li>Daily Market News</li>
                            <li>Daily Market Research</li>
                            <li>Market Signals</li>
                            <li>155 Lessons</li>
                            <li>10 Hours Study Time</li>
                        </ul>
                        <a className="btn_wide" href="/">Buy Package</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

  
        
 
        
        

        </main>


        


    
    
    
    
    
    </>
  )
}

export default HomePage