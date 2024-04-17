import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
 // Import your CSS file for styling
import './../css/HomePage.css'
import { useNavigate } from 'react-router-dom';
import Packages from '../Packages/Packages';




function CheckoutPage(props) {

    const styles = `
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* Form Styles */
form
{
	width: 100%;
}

input[type="text"], input[type="password"], select, input[type="email"], input[type="tel"], input[type="date"], textarea
{
	border: 1px solid #ddd;
	background-color: #fff;
	color: #959595;
	width: 100%;
	padding: 10px;
	font-size: 12px;
	margin: 7px 0 25px 0;
  border-radius: 5px
}

label
{
	font-size: 12px;
}

select
{
	height: 37px;
}

input[type="checkbox"]
{
	margin: 5px 10px 5px 0px;
}

.user-pswd input[type="checkbox"]
{
	margin: 5px 10px 5px 15px;
}

input[type="checkbox"] + p, input[type="radio"] + p
{
	font-size: 15px;
	padding: 0 5px;
	display: inline;
	color: #959595;
}

input[type="radio"] + p
{
	font-size: 13px;
	padding: 0 0 0 20px;
}

input[type="submit"]
{
	padding: 10px 20px;
	color: #fff; 
	background-color: #0B86FF !important;
	text-transform: uppercase;
	border: none;
	cursor: pointer;
  border-radius: 5px;
}

input[type="submit"]:hover
{
	background-color: transparent !important;
  color: black !important;
  border: 2px solid #0B86FF !important;
}

.coupon input[type="text"]
{
	width: 160px;
}

.coupon input[type="submit"]
{
	margin: 0 0 0 20px;
}


textarea
{
	height: 120px;
}

textarea:hover, input:hover
{
	border: 1px solid #0B86FF;
	background-color: #fff;
}

textarea:active, input:active
{
	border: 1px solid #0B86FF;
	background-color: #f5f5f5;
}

label:not(.notes):after
{
	content: "*";
	color: red;
	padding-left: 5px;
}

.notes
{
	display: block;
	padding-top: 20px;
}


/* Grid Styles */
*
{
	box-sizing: border-box;
}

.wrapper
{
	width: 100%;
	margin: 0 auto;
	margin-bottom: 100px;
}

.row:before, .row:after
{
	content: " ";
	display: table;
}

.row:after
{
	clear: both;
}

.col
{
	margin-right: 16px;
	float: left;
}

.col:last-child
{
	margin-right: 0;
}

.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12
{
	width: 100%;
} 

.col-push-1, .col-push-2, .col-push-3, .col-push-4, .col-push-5, .col-push-6, .col-push-7, .col-push-8, .col-push-9, .col-push-10, .col-push-11
{
	margin-left: 0;
} 

/* TABLET STARTS HERE */

@media(min-width: 768px)
{
	.wrapper
	{
		width: 768px;
	}

	.col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11
	{
		width: 376px;
	}

	.col-12
	{
		width: 100%;
	}

	.col-push-1, .col-push-2, .col-push-3, .col-push-4, .col-push-5, .col-push-6, .col-push-7, .col-push-8, .col-push-9, .col-push-10, .col-push-11
	{
		margin-left: 392px;
	}

	.col:nth-child(2n+2)
	{
		margin-right: 0;
	}

}


/*DESKTOP STARTS HERE*/

@media(min-width: 1136px)
{
	.wrapper
	{
		width: 1136px;
	}

	.col-1
	{
		width: 80px;
	}

	.col-2
	{
		width: 176px;
	}

	.col-3
	{
		width: 272px;
	}

	.col-4
	{
		width: 368px;
	}

	.col-5
	{
		width: 464px;
	}

	.col-6
	{
		width: 560px;
	}

	.col-7
	{
		width: 656px;
	}

	.col-8
	{
		width: 752px;
	}

	.col-9
	{
		width: 848px;
	}

	.col-10
	{
		width: 944px;
	}

	.col-11
	{
		width: 1040px;
	}

	.col-12
	{
		width: 100%;
	}
	.col-push-1
	{
		margin-left: 96px;
	}
	.col-push-2
	{
		margin-left: 192px;
	}
	.col-push-3
	{
		margin-left: 288px;
	}
	.col-push-4
	{
		margin-left: 384px;
	}
	.col-push-5
	{
		margin-left: 480px;
	}
	.col-push-6
	{
		margin-left: 576px;
	}
	.col-push-7
	{
		margin-left: 672px;
	}
	.col-push-8
	{
		margin-left: 768px;
	}
	.col-push-9
	{
		margin-left: 864px;
	}
	.col-push-10
	{
		margin-left: 960px;
	}
	.col-push-11
	{
		margin-left: 1056px;
	}

	.col:nth-child(2n+2)
	{
		margin-right: 16px;
	}

	.col:last-child
	{
		margin-right: 0;
	}
}


/* Main CSS Starts Here */
body
{
	font-family: 'Raleway', sans-serif;
	color: #000;
  font-weight: 600;
}

h1, h2, h3, h4, h5, h6
{
	text-transform: uppercase;
	font-weight: 900;
	padding: 20px 0;
	color: #000;
}

h1
{
	font-size: 72px;
	color: #000;
}

h2
{
	font-size: 28px;
}

h3
{
	font-size: 16px;
}

h4
{
	font-size: 15px;
}

h5
{
	font-size: 14px;
}

h6
{
	font-size: 13px;
}

p
{
	font-size: 13px;
	padding: 20px 0;
}

/* Heading Top Border Styles Start Here */
 h3 
{
	position: relative;
}
  
 h3.topborder 
{
 margin-top: 0;
}
  
h3.topborder:before 
{
   	content: "";
   	display: block;
   	border-top: 1px solid #c2c2c2;
   	width: 100%;
   	height: 1px;
   	position: absolute;
    top: 50%;
    z-index: 1;
}
  
h3.topborder span {
    background: #fff;
    padding: 0 10px 0 0;
    position: relative;
    z-index: 5;
}
/* Heading Top Border Styles End Here */


header
{
	height: 250px;
	background-image: url('http://lorempixel.com/1920/500');
	background-size: cover;
	text-align: center;
	// line-height: 210px;
}

.white-space
{
	height: 90px;
	border-bottom: 1px solid #ddd;
	box-shadow: 0px 12px 14px -10px #DDDDDD;
	-webkit-box-shadow: 0px 12px 14px -10px #DDDDDD;
	-moz-box-shadow: 0px 12px 14px -10px #DDDDDD;
	-o-box-shadow: 0px 12px 14px -10px #DDDDDD;

}

.fa-info
{
	font-size: 24px;
	padding: 0 20px; 
	color: #757575;
	line-height: 56px;
	vertical-align: middle;
}

a
{
	color: #0B86FF;
	font-size: 13px;
	text-decoration: none;
}

a:hover
{
	color: #000;
}

.info-bar
{
	height: 56px;
	background-color: #f5f5f5;
	margin: 20px 0;
}

.info-bar p:first-child
{
	padding: 0;
}

.order
{
	border: 12px solid #f5f5f5;
	padding: 30px;
	margin-top: 28px;
}

.order div:not(.qty)
{
	width: 100%;
	border-bottom: 1px solid #DDDDDD;
	padding: 20px 0;
}

.order a
{
	display: block;
}

.order p
{
	padding: 0;
	line-height: 20px;
}

.order h4, h5
{
	padding: 0;
}

.order div:nth-child(6)
{
	border: none;
}

.width50
{
	width: 50%;
	float: left;
}

.padleft
{
	margin-left: 39px;
}

.padright
{
	padding-right: 40px;
}

.inline
{
	display: inline-block;
}

.alignright
{
	float: right;
}

.prod-description
{
	text-transform: uppercase;
	color: #000;
}

.qty
{
	font-weight: 900;
	font-size: 13px;
	color: #000;
	padding-left: 4px;
}

.smalltxt
{
	font-size: 9px;
	vertical-align: middle;
}

.paymenttypes
{
	border: 1px solid #DDDDDD;
	width: 135px;
	padding: 0 8px;
	margin: 0 0 20px 10px;
	display: inline-block;
	vertical-align: middle;
}

.paypal
{
	width: 39px;
	height: 13px;
}

.cards
{
	width: 135px;
	height: 24px;
}

.difwidth
{
	width: 150px;
	line-height: 20px;
}

.order .center
{
	line-height: 40px;
	color: #000;
}

.checkout-table {
    width: 100%; /* Change this to the desired width */
    border-collapse: collapse;
  }
  
  .checkout-table th,
  .checkout-table td {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    border-left: none; /* Remove left border */
    border-right: none; /* Remove right border */
    padding: 15px;
    text-align: left;
  }
  
  .checkout-table th {
    background-color: #fff;
  }

  .button:hover {
    background-color: #d1d3d7 !important;
    border: 2px solid #0B86FF !important;
	color: black !important;
}
  `;

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showCuponitem, setShowCuponitem] = useState(false);

  const handleInputChange = (event, inputType) => {
    const inputValue = event.target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'password') {
      setPassword(inputValue);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      const response = await fetch(
        // "https://innovate-x-hackathon.vercel.app/login",
        "http://localhost:3000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        console.log("Logged IN");
        const res=await response.json();
        localStorage.setItem("token",res.token)
        localStorage.setItem("isAuthenticated",true)
      
    
        navigate("/courses");
      } else {
        console.error("Login failed");
        
      }
    } catch (error) {
      console.error("Error during login:", error);
     
    }

    // You can now use 'email' and 'password' states for form submission
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear form fields after submission (if needed)
    setEmail('');
    setPassword('');
  };

  const toggleLoginForm = () => {
	event.preventDefault();
    setShowLoginForm(!showLoginForm);
  };

  const toogleCuponitem = () => {
	event.preventDefault();
    setShowCuponitem(!showCuponitem);
  };
  
    return (
        
        <div>
            <style>{styles}</style>
        <header>
          <h1>Checkout</h1>
        </header>
        <div className=""></div>
        <div className="wrapper">
          <div className="row">
            <div className="col-12 col">
              <div className="info-bar">
			  <p>
                <i className="fa fa-info"></i>Returning customer?{' '}<a id="toggleLabelText" href='#' onClick={toggleLoginForm}>Click here to login</a>
             </p>
              </div>
            </div>
          </div>
		  {showLoginForm && (
          <div className="row">
			<p style={{marginLeft: '10px', display: 'flex'}}> 
                If you have shopped with us before, please enter your details
                in the boxes below. If you are a new customer please proceed to
                the Billing &amp; Shipping section.
              </p>
            <div className="col-12 col">
              <form method="post" className="user-pswd">
                <div className="width50 padright">
                  <label htmlFor="username">Username or email</label>
                  <input type="text" name="username" id="username" value={email}  onChange={(event) => handleInputChange(event, 'email')} required />
                </div>
                <div className="width50">
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" id="password" value={password} onChange={(event) => handleInputChange(event, 'password')} required />
                </div>
                <input type="submit" name="submit" value="Login" onClick={handleSubmit} />
                <input type="checkbox" value="1" name="checkbox" />
                <p>Remember me</p>
              </form>
              <p>
                <a href="/forgot-password">Lost your password?</a>
              </p>
            </div>
          </div>
		  )}
		  
          <div className="row">
            <div className="col-12 col">
              <div className="info-bar">
                <p>
                  <i className="fa fa-info"></i>
                  Have a coupon? <a  href='#'  onClick={toogleCuponitem}>Click here to enter your code</a>
                </p>
              </div>
            </div>
          </div>
		  {showCuponitem && (
          <div className="row">
            <div className="col-6 col coupon">
              <form method="get">
                <input type="text" name="coupon" id="coupon" placeholder="Coupon code" />
                <input type="submit" name="submit" value="Apply Coupon" />
              </form>
            </div>
          </div>
		  )}
          <div className="row">
            <form method="get">
              <div className="col-7 col">
                <h3 className="topborder"><span>Billing Details</span></h3>
                <label htmlFor="country">Country</label>
                <select name="country" id="country" required>
                  <option value="">Please select a country</option>
                  <option value="Canada">Canada</option>
                  <option value="Not Canada">Not Canada</option>
                </select>
                <div className="width50 padright">
                  <label htmlFor="fname">First Name</label>
                  <input type="text" name="fname" id="fname" required />
                </div>
                <div className="width50">
                  <label htmlFor="lname">Last Name</label>
                  <input type="text" name="lname" id="lname" required />
                </div>
                <label htmlFor="company">Street Address</label>
                <input type="text" name="company" id="company" required />
                <label htmlFor="address"> Town / City</label>
                <input type="text" name="address" id="address" required />
                <div className="width50 padright">
                  <label htmlFor="province">State / Country</label>
                  <select name="province" id="province" required>
                    <option value="">Select an option...</option>
                    <option value="ab">Alberta</option>
                    <option value="bc">British Columbia</option>
                    <option value="mb">Manitoba</option>
                    <option value="nb">New Brunswick</option>
                    <option value="nl">Newfoundland and Labrador</option>
                    <option value="ns">Nova Socia</option>
                    <option value="on">Ontario</option>
                    <option value="pe">Prince Edward Island</option>
                    <option value="qc">Quebec</option>
                    <option value="sk">Saskatchewan</option>
                    <option value="not-canada">Not Canada</option>
                  </select>
                </div>
                <div className="width50">
                  <label htmlFor="postcode">Postcode / ZIP</label>
                  <input type="text" name="postcode" id="postcode" placeholder="" required />
                </div>
                <div className="width50 padright">
                  <label htmlFor="email">Email Address</label>
                  <input type="text" name="email" id="email" required />
                </div>
                <div className="width50">
                  <label htmlFor="tel">Phone</label>
                  <input type="text" name="tel" id="tel" required />
                </div>
              </div>
            </form>
            {/* New table section */}
            
        <div className="row">
        <div className='flex'>
                <h2>Your Order</h2>
            </div>
          <div className="col-12 col">
            <table className="checkout-table">
                
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{fontWeight:500}}>{props.plan}</td>
                  <td>{props.price}</td>
                </tr>
                <tr>
                  <td>Subtotal</td>
                  <td>{props.price}</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td>{props.price}</td>
                </tr>
                {/* Add more rows here if needed */}
              </tbody>
            </table>
            </div>


            </div>
			<div className="payment-box" style={{ backgroundColor: '#d1d3d7', padding: '20px', borderRadius: '10px', minWidth: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column', marginTop: '3%' }}>
				<div style={{ flex: 1 }}>
					<p>Payment Method</p>
					<p style={{fontWeight:500 }}>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="/Privacy-policy" style={{ color: '#0B86FF', fontWeight:500 }}> privacy policy.</a></p>
					<label className="checkbox-label"><input type="checkbox" name="terms" required />I have read and agree to the website <a href="/Terms-and-conditions" style={{ color: '#0B86FF' }}> terms and conditions </a></label><br />
					<label className="checkbox-label"><input type="checkbox" name="refund_policy" required />I have read and agree to the <a href="/Refund" style={{ color: '#0B86FF' }}> refund policy </a></label>
				</div>
				<div style={{ alignSelf: 'flex-end' }}>
					<button className="button" style={{ backgroundColor: '#0B86FF', border: 'none', color: 'white', padding: '15px 32px', textAlign: 'center', textDecoration: 'none', fontSize: '16px', cursor: 'pointer', borderRadius: '8px' }}>Place Order</button>
				</div>
			</div>
            
          </div>
        </div>
      </div>
    );
}

export default CheckoutPage;
