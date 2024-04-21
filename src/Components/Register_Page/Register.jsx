import React, { useState } from 'react';
// import './../css/HomePage.css'

import './Register.css'

function Register(isAuthenticated) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        country: '',
        Phone: '',
        email: '',
        password: '',
        Payment_Status: false,
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
        const response = await fetch("http://localhost:3000/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        if (response.ok) {
            // Reset form data
            setFormData({
              firstName: '',
              lastName: '',
              country: '',
              Phone: '',
              email: '',
              password: '',
              Payment_Status: false,
            });

            setMessageSent(true);
        } else {
            console.error('Failed to send message');
            error.Register();
        }
    } catch (error) {
        console.error('Error:', error);
    }
  };

      
    
      return (
        <div className="register-page">
          <h1 className='heading'>Register</h1>
          {!localStorage.getItem("isAuthenticated") ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" placeholder="" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" placeholder="" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-group">
          <label htmlFor="country">Country</label>
          <select name="country" id="country" value={formData.country} onChange={handleChange} required>
            <option value="" class="placeholder-option">Choose a country</option>
            <option value="Canada">Canada</option>
            <option value="Not Canada">Not Canada</option>
          </select>
        </div>
            <div className="form-group">
            <label htmlFor="Phone">Phone</label>
              <input type="Phone" name="Phone" placeholder="" value={formData.Phone} onChange={handleChange} required/>
            </div>
            <div className="form-group">
            <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="" value={formData.email} onChange={handleChange} required/>
            </div>
            <div className="form-group">
            <label htmlFor="Password">Password</label>
              <input type="password" name="password" placeholder="" value={formData.password} onChange={handleChange} required/>
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required/>
            </div>
            <button type="submit">Register</button>
          </form>
           ) : (
            
            <div className='flex' style={{paddingBottom: '30px'}}>

              <h2>Your are already registered</h2>

            </div>
             
          )}

        </div>
      );
    }
    

export default Register