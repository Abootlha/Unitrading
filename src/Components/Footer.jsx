import React from 'react'
import Mastercard from './../assets/images/mastercard.svg';
import Visa from './../assets/images/visa_light.svg';
import Ae from './../assets/images/ae.svg';
import footerlogo from './../assets/images/logo-footer.svg';
import './css/HomePage.css'

function Footer() {
  return (
    <>


<footer className="footer">
      <div className="container">
        <div className="footer__topWrapper">
          <a href="/" className="custom-logo-link" rel="home">
            <img src={footerlogo} className="custom-logo" alt="UNITrading" />
          </a>

          <div className="footer__dataWrapper">
            <ul id="menu-bottom" className="footer-menu">
              <li className="mx-5 menu-item menu-item-type-post_type menu-item-object-page menu-item-74">
                <a href="/Terms-and-conditions">Terms and Conditions</a>
              </li>
              <li className="mx-5 menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-72">
                <a href="/Privacy-policy">Privacy Policy</a>
              </li>
              <li className="mx-5 menu-item menu-item-type-post_type menu-item-object-page menu-item-828">
                <a href="/Refund">Refund Policy</a>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1166">
                <a href="/cookie">Cookies Policy</a>
              </li>
              <li className="mx-5 menu-item menu-item-type-post_type menu-item-object-page menu-item-82">
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
            <div className="footer__cards">
              <img src={Mastercard} alt="Mastercard" />
              <img src={Visa} alt="Visa" />
              <img src={Ae} alt="American Express" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <p className="footer-disclaimer">
            © 2024 UNITrading brand is owned and operated by General Market Project EOOD 206445055 registered at 121 Prodromou Avenue, Nicosia 2064, Cyprus.
          </p>
          <p className="footer-disclaimer">
            The material on this website is for general educational purposes only and comprises personal opinions and ideas. It should not be interpreted as containing any type of financial advice. The material does not suggest purchasing financial services, nor does it guarantee the performance or outcome of future transactions. Operations mentioned in this material can be considered high-risk transactions and it is possible that by trading you may sustain significant investment losses, possibly including the loss of money in your account. When trading, you must always take into consideration your level of experience and seek independent financial advice if necessary. The accuracy, validity, or completeness of this information is not guaranteed and no liability is assumed for any direct or indirect loss related to any investment based on the material.
          </p>
          <br />
          <p className="footer-disclaimer">
            The information on this site is not directed at residents of any particular country outside the company base country and is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
          </p>
        </div>
      </div>
    </footer>
    
    
    </>
  )
}

export default Footer