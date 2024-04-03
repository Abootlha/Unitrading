import React, { useState } from 'react';
import './css/login.css';
import Header from './Header'; 
import Footer from './Footer';
import './css/HomePage.css'


function Login() {
  // State variables for email, password, and "Keep me signed in" checkbox
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here (e.g., send data to server)
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Keep me signed in:', keepSignedIn);
    // Reset form fields
    setEmail('');
    setPassword('');
    setKeepSignedIn(false);
  };

  return (
    <>
      {/* <Header /> */}
      
      <div className="container content" id="app">
      <h1>Login</h1>
      <div className="um um-login um-29 uimob500" style={{ opacity: 1 }}>
        <div className="um-form">
          <form method="post" action="" autoComplete="off" onSubmit={handleSubmit}>
            <div className="um-row _um_row_1 " style={{ margin: '0 0 30px 0' }}>
              <div className="um-col-1">
                <div id="um_field_29_username" className="um-field um-field-text um-field-username um-field-text um-field-type_text" data-key="username">
                  <div className="um-field-label">
                    <label htmlFor="username-29">E-mail</label>
                    <div className="um-clear"></div>
                  </div>
                  <div className="um-field-area">
                    <input autoComplete="off" className="um-form-field valid" type="text" name="username-29" id="username-29" value="" placeholder="" data-validate="unique_username_or_email" data-key="username" aria-invalid="false" />
                  </div>
                </div>
                <div id="um_field_29_user_password" className="um-field um-field-password um-field-user_password um-field-password um-field-type_password" data-key="user_password">
                  <div className="um-field-label">
                    <label htmlFor="user_password-29">Password</label>
                    <div className="um-clear"></div>
                  </div>
                  <div className="um-field-area">
                    <input className="um-form-field valid" type="password" name="user_password-29" id="user_password-29" value="" placeholder="" data-validate="" data-key="user_password" aria-invalid="false" />
                  </div>
                </div>
              </div>
            </div>
            <input type="hidden" name="form_id" id="form_id_29" value="29" />

            <p className="um_request_name">
              <label htmlFor="um_request_29">Only fill in if you are not human</label>
              <input type="hidden" name="um_request" id="um_request_29" className="input" value="" size="25" autoComplete="off" />
            </p>

            <input type="hidden" id="_wpnonce" name="_wpnonce" value="8d44d9edbe" />
            <input type="hidden" name="_wp_http_referer" value="/login/" />
            <div className="um-col-alt">
              <div className="um-field um-field-c">
                <div className="um-field-area">
                  <label className="um-field-checkbox">
                    <input type="checkbox" name="rememberme" value="1" />
                    <span className="um-field-checkbox-state"><i className="um-icon-android-checkbox-outline-blank"></i></span>
                    <span className="um-field-checkbox-option"> Keep me signed in</span>
                  </label>
                </div>
              </div>
              <div className="um-clear"></div>
              <div className="um-left um-half">
                <input type="submit" value="Login" className="um-button" id="um-submit-btn" />
              </div>
              <div className="um-right um-half">
                <a href="/" className="um-button um-alt">Register</a>
              </div>
              <div className="um-clear"></div>
            </div>

            <div className="um-col-alt-b">
              <a href="/" className="um-link-alt">Forgot your password?</a>
            </div>
          </form>
        </div>
      </div>
      {/* <style>
        {`
          .um-29.um {
            max-width: 450px;
          }
        `}
      </style> */}
    </div>

      {/* <div style={{top: ''}}><Footer /></div> */}
      
    </>
  );
}

export default Login;
