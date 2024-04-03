import React, { useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
// import './css/Unitrading-Style.css'
// import './css/contactstyle.css'

function ContactUs() {


  return (
    <div>
        
        <div>
        <Header/>
        </div>

      



    
        <main>
            <div className="container contacts">
                <h1>Contact Us</h1>
                <div className="contacts__wrapper">
                    {/* Left Section */}
                    <div className="contacts__left">
                        {/* Contact Information */}
                        <div className="contacts-item">
                            <p className="contacts-title">Please let us know if you have any questions regarding our courses by sending us an email at:</p>
                            <div className="contacts-wrapper">
                                <div className="icon email"></div>
                                <a className="contacts-details" href="/cdn-cgi/l/email-protection#196a6c6969766b6d596c77706d6b787d70777e377076">
                                    <span className="__cf_email__" data-cfemail="15666065657a676155607b7c616774717c7b723b7c7a">[email &#160;protected]</span>
                                </a>
                            </div>
                        </div>
                        {/* Phone Number */}
                        <div className="contacts-item">
                            <p className="contacts-title">Phone number:</p>
                            <div className="contacts-wrapper">
                                <div className="icon phone"></div>
                                <a className="contacts-details" href="tel:+61251047662+442030061606">🇦🇺 +61251047662 🇬🇧 +442030061606</a>
                            </div>
                        </div>
                        {/* Company Details */}
                        <div className="contacts-item">
                            <p className="contacts-title">Company details</p>
                            <div className="contacts-wrapper">
                                <div className="icon details"></div>
                                <p className="contacts-details">General Market Project EOOD, 121 Prodromou Avenue, Nicosia 2064, Cyprus</p>
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="contacts__right">
                        <p>Alternatively, submit a message and we will get back to you asap</p>
                        {/* Contact Form */}
                        <form onSubmit={"handleSubmit"}>
                            <label htmlFor="firstName">First Name *</label>
                            <input type="text" id="firstName" name="firstName" value={"formData.firstName"} onChange={"handleChange"} required />

                            <label htmlFor="lastName">Last Name *</label>
                            <input type="text" id="lastName" name="lastName" value={"formData.lastName"} onChange={"handleChange"} required />

                            <label htmlFor="email">Email *</label>
                            <input type="email" id="email" name="email" value={"formData.email"} onChange={"handleChange"} required />

                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" value={"formData.subject"} onChange={"handleChange"} />

                            <label htmlFor="message">Message *</label>
                            <textarea id="message" name="message" value={"formData.message"} onChange={"handleChange"} placeholder="Type your message here..." required></textarea>

                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>




      <Footer/>
      </div>
  )
}


export default ContactUs;