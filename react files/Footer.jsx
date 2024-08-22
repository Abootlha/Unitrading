
import React from 'react';
import './../Components/css/Footer.css'; // Import your CSS file for styling
import footerlogo from './../assets/images/logo-footer.svg';
import Mastercard from './../assets/images/mastercard.svg';
import Visa from './../assets/images/visa_light.svg';
import Ae from './../assets/images/ae.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-section">
          <h4></h4>
          <p></p>
        </div>
        <div className="footer-section">
          <h4></h4>
          <ul className='absolute flex' style={{ top: '14%', left: '22.3%', paddingLeft: '0'}}>
            <li style={{ paddingRight: '46px'}}><a href="/Terms and Conditions">Terms and Conditions</a></li>
            <li style={{ marginRight: '46px'}}><a href="/Privacy Policy">Privacy Policy</a></li>
            <li style={{ marginRight: '70px'}}><a href="/Refund Policy">Refund Policy</a></li>
            <li style={{ marginRight: '70px'}}><a href="/Cookies Policy">Cookies Policy</a></li>
            <li style={{ marginRight: '70px'}}><a href="/Contact Us">Contact Us</a></li>
        </ul>
        <div>
        <hr className='absolute flex' style={{ borderColor: '#000', borderTop: '1px solid', margin: '40px 90px 90px', width: '89%', top: '20%', left: '0'}} />
        <img src={footerlogo} className='absolute ' style={{left: '5.4%', top:'4vh'}} alt="footer_logo svg" />
        <img src={Mastercard} className='absolute ' style={{left: '79%', top:'4vh'}} alt="mastercard svg" />
        <img src={Visa} className='absolute ' style={{left: '84%', top:'4vh'}} alt="visa_light svg" />
        <img src={Ae} className='absolute ' style={{left: '91%', top:'4vh'}} alt="ae svg" />
        </div>

        </div>
        <div className="footer-section">
            <p className='font-bold' style={{ position: 'absolute',left:'90px', fontWeight: '300' , fontSize: '12px', top:'37%'}}>© 2024 UNITrading brand is owned and operated by General Market Project EOOD 206445055 registered at 121 Prodromou Avenue, Nicosia 2064, Cyprus.</p>
            <p className='font-bold' style={{ position: 'absolute',left:'90px', fontWeight: '300' , fontSize: '12px', top:'45%'}}>The material on this website is for general educational purposes only and comprises personal opinions and ideas. It should not be interpreted as containing any type of financial advice. The material does not suggest purchasing financial services, nor <br />does it guarantee the performance or outcome of future transactions. Operations mentioned in this material can be considered high-risk transactions and it is possible that by trading you may sustain significant investment losses, possibly including the <br />loss of money in your account. When trading, you must always take into consideration your level of experience and seek independent financial advice if necessary. The accuracy, validity, or completeness of this information is not guaranteed and no <br />liability is assumed for any direct or indirect loss related to any investment based on the material. <br /> <br /> <br />The information on this site is not directed at residents of any particular country outside the company base country and is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be <br />contrary to local law or regulation.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p></p>
      </div>
    </footer>
  );
} 

export default Footer;
