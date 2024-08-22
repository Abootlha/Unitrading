import React from 'react';
import hero from './../assets/images/hero.jpg';
import CoursesBg  from './../assets/images/CoursesBg.svg';
import learn from './../assets/images/learn.svg';
import brain from './../assets/images/brain.svg';
import market from './../assets/images/market.svg';
import StayUptoDate from './../assets/images/stay-up-to-date.svg';
import level from './../assets/images/levels-1.png';
import study from './../assets/images/study-time-1.png';
import TradingSubject from './../assets/images/trading-subjects-1.png';
import Student from './../assets/images/students-1.png';
import lessons from './../assets/images/lessons-1.png';
import Packages from './package';
import Footer from './Footer';
import Header from './Header';
import Feedback from './feedback';
import Hero from './hero'
import Tradingcourses from './tradingcourses';
import './css/courses.css';

function Landing() {
  return (
    <div>

<div>
 <Header/>
</div>    

        <div>
         <Hero/>
        </div>


        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 px-10 z-20" style={{ marginLeft: '5.8%', top:'65%' }}>
  <h1 className="text-7xl md:text-5xl font-bold mb-5" style={{ color: '#2C2F32',fontSize: '60px' }}> The ultimate academy’s <br />trading courses will <br /> teach you how to trade </h1>
  <p className="font-bold text-lg md:text-xl" style={{ color: '#2C2F32', fontSize: '24px', fontWeight: '600' }}>Study the operation of financial markets and begin trading.</p>
  <button className="font-bold btn-primary px-4 py-5 mr-4 mt-10" style={{width: 'auto', backgroundColor: '#0B86FF', color: '#', borderWidth: '2px', borderColor: '#0B86FF', borderRadius: '10px' }}>CHOOSE YOUR PACKAGE</button>
</div>



            <div className='flex absolute' style={{top:'125%'}}>
                <Tradingcourses/>
            </div>


            <div class="container">
    <div class="card-container">
        <div class="card1">
            <img src={learn} alt="courses svg" class="icon1" />
            <h3 class="font-bold">Learn</h3>
            <p class="font-light">Embark on an exciting and easy trading journey by using the tutorials, e-books, and lessons provided.</p>
        </div>

        <div class="card2">
            <img src={brain} alt="courses svg" class="icon2"/>
            <h3 class="font-bold">Practice</h3>
            <p class="font-light">Assimilate the content better by completing the assignments and quizzes after lessons.</p>
        </div>

        <div class="card3">
            <img src={market} alt="courses svg"class="icon3" />
            <h3 class="font-bold">Follow The Markets</h3>
            <p class="font-light">Study the daily market updates and financial news to stay on top of the latest market trends.</p>
        </div>

        <div class="card4">
            <img src={StayUptoDate} alt="courses svg" class="icon4" />
            <h3 class="font-bold">Keep Up to Date</h3>
            <p class="font-light">Our analytical tools will help you to respond to changing market conditions effectively.</p>
        </div>
    </div>
</div>





        {/* <div>
  <div style={{ position: 'absolute', width: '1430.33px', left: '7%', height: '641.2px', backgroundColor: '#F1F3F8', top: '200%', borderRadius: '50px' }}></div>
  <h1 className="text-7xl md:text-5xl font-bold mb-5" style={{ color: '#2C2F32', fontWeight: '800', top: '215%', position: 'absolute', left: '31%' }}>Our Academy’s Numbers:</h1>

  <div>
  <div style={{ position: 'absolute', width: '190px', left: '18%', height: '270px', backgroundColor: '#ffffff', top: '230%', borderRadius: '10px' }}></div>
  <img src={level} className='absolute inset-0 ' style={{left: '22%', top:'232%',width: '60px', height: 'auto'}} alt="courses svg" />
  <h1 className='text-7xl md:text-5xl font-bold mb-5' style={{ color: '#2C2F32', position: 'absolute', fontSize: '40px',fontWeight: '800', left: '23%', top: '243%' }}>3</h1>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '250%', left: '21%', fontWeight: '600' }}> levels of</p>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '254%', left: '20.6%', fontWeight: '600' }}> education</p>
  </div>

  <div>
  <div style={{ position: 'absolute', width: '190px', left: '31%', height: '270px', backgroundColor: '#ffffff', top: '230%', borderRadius: '10px' }}></div>
  <img src={study} className='absolute inset-0 ' style={{left: '35%', top:'232%',width: '60px', height: 'auto'}} alt="courses svg" />
  <h1 className='text-7xl md:text-5xl font-bold mb-5' style={{ color: '#2C2F32', position: 'absolute', fontSize: '40px',fontWeight: '800', left: '35%', top: '243%' }}>10</h1>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '250%', left: '34%', fontWeight: '600' }}> hours of</p>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '254%', left: '33.6%', fontWeight: '600' }}> study time</p>
  </div>

  <div>
  <div style={{ position: 'absolute', width: '190px', left: '44%', height: '270px', backgroundColor: '#ffffff', top: '230%', borderRadius: '10px' }}></div>
  <img src={TradingSubject} className='absolute inset-0 ' style={{left: '48%', top:'232%',width: '60px', height: 'auto'}} alt="courses svg" />
  <h1 className='text-7xl md:text-5xl font-bold mb-5font-bold' style={{ color: '#2C2F32', position: 'absolute', fontSize: '40px',fontWeight: '800', left: '48%', top: '243%' }}>20</h1>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '250%', left: '47.5%', fontWeight: '600' }}> trading</p>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '254%', left: '47.3%', fontWeight: '600' }}> subjects</p>
  </div>

  <div>
  <div style={{ position: 'absolute', width: '190px', left: '57%', height: '270px', backgroundColor: '#ffffff', top: '230%', borderRadius: '10px' }}></div>
  <img src={lessons} className='absolute inset-0 ' style={{left: '60.5%', top:'232%',width: '60px', height: 'auto'}} alt="courses svg" />
  <h1 className='text-7xl md:text-5xl font-bold mb-5' style={{ color: '#2C2F32', position: 'absolute', fontSize: '40px', fontWeight: '800', left: '60%', top: '243%' }}>155</h1>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '250%', left: '60%', fontWeight: '600' }}> lessons</p>
 
  
  </div>
   
  <div>
  <div style={{ position: 'absolute', width: '190px', left: '70%', height: '270px', backgroundColor: '#ffffff', top: '230%', borderRadius: '10px' }}></div>
  <img src={Student} className='absolute inset-0 ' style={{left: '74%', top:'232%',width: '60px', height: 'auto'}} alt="courses svg" />
  <h1 className='text-7xl md:text-5xl font-bold mb-5' style={{ color: '#2C2F32', position: 'absolute', fontSize: '40px', fontWeight: '800', left: '73%', top: '243%' }}>500+</h1>
  <p className='font-bold' style={{ color: '#2C2F32', fontSize: '20px', position: 'absolute', top: '250%', left: '73%', fontWeight: '600' }}> students</p>
  
  </div>
</div> */}



{/* <div> 
<Packages />
</div> */}






{/* <div>
 <Footer/>
</div> */}













    </div>
    
    
  )
}

export default Landing;