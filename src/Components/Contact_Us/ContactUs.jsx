import React, { useState } from 'react';
import './h1.css'
import MessageBox from './MessageBox';
import Map from'./../../assets/images/map.svg';
import Phone from './../../assets/images/phone.svg';
import Email from './../../assets/images/email.svg';


function ContactUs() {

  const [messageSent, setMessageSent] = useState(false); 
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch("https://unitrading-2.onrender.com/contact-us", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            console.log('Message sent successfully');
            // Reset form data
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: ''
            });

            setMessageSent(true);
        } else {
            console.error('Failed to send message');
            error.ContactUs();
        }
    } catch (error) {
        console.error('Error:', error);
    }
};
    


  return (
    <div>

      <div>
      {messageSent && <MessageBox />}
      </div>
        
    
        <main>
        <div className="container contacts">
          <h1 className='contactus'>Contact Us</h1>
          <div className="contacts__wrapper">
            {/* Left Section */}
            <div className="contacts__left">
              {/* Contact Information */}
              <div className="contacts-item">
                <p className="contacts-title">Please let us know if you have any questions regarding our courses by sending us an email at:</p>
                <div className="contacts-wrapper">
                  <div className="icon email">
                      <img src={Email} alt="Email icon" />
                  </div>
                  <a className="contacts-details" href="/">
                    <span className="__cf_email__" data-cfemail="15666065657a676155607b7c616774717c7b723b7c7a"></span>
                  </a>
                </div>
              </div>
              {/* Phone Number */}
              <div className="contacts-item">
                <p className="contacts-title">Phone number:</p>
                <div className="contacts-wrapper">
                  <div className="icon phone">
                  <img src={Phone} alt="Phone icon" />
                  </div>
                  <a className="contacts-details" href="tel:+61251047662+442030061606">🇦🇺 +61251047662 🇬🇧 +442030061606</a>
                </div>
              </div>
              {/* Company Details */}
              <div className="contacts-item">
                <p className="contacts-title">Company details</p>
                <div className="contacts-wrapper">
                  <div className="icon details">
                  <img src={Map} alt="Map icon" />
                  </div>
                  <p className="contacts-details">General Market Project EOOD, 121 Prodromou Avenue, Nicosia 2064, Cyprus</p>
                </div>
              </div>
            </div>
            {/* Right Section */}
            <div className="contacts__right">
              <p>Alternatively, submit a message and we will get back to you asap</p>
              {/* Contact Form */}
              <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name *</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Last Name *</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required/>

                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Type your message here..." required></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </main>




   
      </div>
  )
}


export default ContactUs;