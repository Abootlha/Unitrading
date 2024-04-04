import React, { useState } from 'react';

const CheckoutPage = () => {
  const [billingDetails, setBillingDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    country: '',
    package: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your checkout logic here, e.g., submit billing details to a server
    console.log('Billing Details:', billingDetails);
  };

  return (
    <div>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" value={billingDetails.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={billingDetails.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" value={billingDetails.address} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={billingDetails.city} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" value={billingDetails.country} onChange={handleChange} required />
        </div>
        <div>
          <label>Select Package:</label>
          <select name="package" value={billingDetails.package} onChange={handleChange} required>
            <option value="">Select Package</option>
            <option value="Package 1">Package 1 - $10</option>
            <option value="Package 2">Package 2 - $20</option>
            <option value="Package 3">Package 3 - $30</option>
            <option value="Package 4">Package 4 - $40</option>
            <option value="Package 5">Package 5 - $50</option>
          </select>
        </div>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
