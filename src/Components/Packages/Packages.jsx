import React from 'react'
import './../css/HomePage.css'

function Packages() {
    
  return (  
    <>
    {!localStorage.getItem("isAuthenticated") ? (
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
                        <ul className="packages__list"  >
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
    
) : (


    <section id="packages" class="packages packages__secondVersion">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Packages</h2>
            </div>
            <div class="col-12 cyrrency">
                            </div>
            <div class="col-12 packages__wrapper">
                                <div class="packages__item packages-card-disable">
                    <div class="packages__header">
                        <h3>Beginner</h3>
                        <div class="price">
                            <p>€249</p>
                            <p class="sale">
                                <span>€</span>299</p>
                        </div>
                    </div>
                    <ul class="packages__list">
                        <li>Trading Essentials Course</li>
                        <li class="disabled">Technical Trading Course</li>
                        <li class="disabled">Strategic Trading Course</li>
                        <li class="disabled">MT4 &amp; MT5 Tutorials</li>
                        <li>eBooks</li>
                        <li class="disabled">3 High-Probability Trading Setups</li>
                        <li class="disabled">Knowledge Checks</li>
                        <li class="disabled">Assignments</li>
                        <li class="disabled">Economic Calendar</li>
                        <li class="disabled">Cryptocurrency Calendar</li>
                        <li class="disabled">Daily Market News</li>
                        <li class="disabled">Daily Market Research</li>
                        <li class="disabled">Market Signals</li>
                        <li>47 Lessons</li>
                        <li>1 Hour Study Time</li>
                    </ul>
                    <a class="btn_wide" href="#">Purchased</a>
                </div>
                                <div class="packages__item packages-card-disable">
                    <div class="packages__header">
                        <h3>Intermediate</h3>
                        <div class="price">
                            <p>€499</p>
                            <p class="sale">
                                <span>€</span>599</p>
                        </div>
                    </div>
                    <ul class="packages__list">
                        <li>Trading Essentials Course</li>
                        <li>Technical Trading Course</li>
                        <li class="disabled">Strategic Trading Course</li>
                        <li>MT4 &amp; MT5 Tutorials</li>
                        <li>eBooks</li>
                        <li class="disabled">3 High-Probability Trading Setups</li>
                        <li class="disabled">Knowledge Checks</li>
                        <li class="disabled">Assignments</li>
                        <li>Economic Calendar</li>
                        <li>Cryptocurrency Calendar</li>
                        <li class="disabled">Daily Market News</li>
                        <li class="disabled">Daily Market Research</li>
                        <li class="disabled">Market Signals</li>
                        <li>104 Lessons</li>
                        <li>2 Hours Study Time</li>
                    </ul>
                    <a class="btn_wide" href="#">Purchased</a>
                </div>

                                <div class="packages__item packages-card-disable">
                    <div class="packages__header">
                        <h3>Advanced</h3>
                        <div class="price">
                            <p>€999</p>
                            <p class="sale">
                                <span>€</span>1199</p>
                        </div>
                    </div>
                    <ul class="packages__list">
                        <li>Trading Essentials Course</li>
                        <li>Technical Trading Course</li>
                        <li class="disabled">Strategic Trading Course</li>
                        <li>MT4 &amp; MT5 Tutorials</li>
                        <li>eBooks</li>
                        <li class="disabled">3 High-Probability Trading Setups</li>
                        <li>Knowledge Checks</li>
                        <li>Assignments</li>
                        <li>Economic Calendar</li>
                        <li>Cryptocurrency Calendar</li>
                        <li>Daily Market News</li>
                        <li class="disabled">Daily Market Research</li>
                        <li class="disabled">Market Signals</li>
                        <li>104 Lessons</li>
                        <li>2 Hours Study Time</li>
                    </ul>
                    <a class="btn_wide" href="#">Purchased</a>
                </div>

                                <div class="packages__item packages-card-disable">
                    <div class="packages__header">
                        <h3>Trader</h3>
                        <div class="price">
                            <p>€2499</p>
                            <p class="sale">
                                <span>€</span>2999</p>
                        </div>
                    </div>
                    <ul class="packages__list">
                        <li>Trading Essentials Course</li>
                        <li>Technical Trading Course</li>
                        <li class="disabled">Strategic Trading Course</li>
                        <li>MT4 &amp; MT5 Tutorials</li>
                        <li>eBooks</li>
                        <li class="disabled">3 High-Probability Trading Setups</li>
                        <li>Knowledge Checks</li>
                        <li>Assignments</li>
                        <li>Economic Calendar</li>
                        <li>Cryptocurrency Calendar</li>
                        <li>Daily Market News</li>
                        <li>Daily Market Research</li>
                        <li class="disabled">Market Signals</li>
                        <li>104 Lessons</li>
                        <li>5 Hours Study Time</li>
                    </ul>
                    <a class="btn_wide" href="#">Purchased</a>
                </div>

                                <div class="packages__item packages-card-disable">
                    <div class="packages__header">
                        <h3>Elite</h3>
                        <div class="price">
                            <p>€4999</p>
                            <p class="sale">
                                <span>€</span>5999</p>
                        </div>
                    </div>
                    <ul class="packages__list">
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
                    <a class="btn_wide" href="#">Purchased</a>
                </div>
            </div>
        </div>
    </div>
</section>
    
)}
</>
);
}

export default Packages