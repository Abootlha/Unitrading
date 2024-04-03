import React from 'react';
import './ForgotPassword.css'

const ForgotPassword = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your password reset logic here
  };

  return (
    <section className="basic">
      <div className="container content" id="app">
        <h1>Password Reset</h1>
        <div className="um um-password um-um_password_id uimob500" style={{ opacity: 1 }}>
          <div className="um-form">
            <form method="post" action="" onSubmit={handleSubmit}>
              <input type="hidden" name="_um_password_reset" id="_um_password_reset" value="1" />

              <div className="um-field um-field-block um-field-type_block">
                <div className="um-field-block">
                  <div style={{ textAlign: 'center' }}>
                    <strong >To reset your password, please enter your email <br /> address or username below.</strong>
                  </div>
                </div>
              </div>
              <div id="um_field_0_username_b" className="um-field um-field-text um-field-username_b um-field-text um-field-type_text" data-key="username_b">
                <div className="um-field-area">
                  <input autoComplete="off" className="um-form-field valid" type="text" name="username_b" id="username_b" value="" placeholder="Enter your username or email" data-validate="" data-key="username_b" aria-invalid="false" />
                </div>
              </div>
              <div className="um-col-alt um-col-alt-b">
                <div className="um-center">
                  <input type="submit" value="Reset password" className="um-button" id="um-submit-btn" />
                </div>
                <div className="um-clear"></div>
              </div>
              <input type="hidden" name="form_id" id="form_id_um_password_id" value="um_password_id" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
