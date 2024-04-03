import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import './css/HomePage.css'

function Refundpolicy() {
  return (
      <div>
        
        <div>
        <Header/>
        </div>


        <section class="basic">
        <div class="container content" id="app">
            <h1>Refund Policy</h1>
                            
                  <p>All Membership Fees are fully earned upon payment and are non-refundable except during the first 90 days since the beginning of the Membership Period under the condition that you have viewed no more than 50% of the lessons made available to you in the Trading Essentials, Technical Trading and Strategic Trading courses.</p>



                  <p>You can request a refund by emailing us at support@unitrading.io stating your wish to receive a refund and your full name. We will carry out the reimbursement using the same means of payment as you used for the initial transaction.</p>



                  <p>Once we receive your cancellation request, you will cease to have access to the site immediately.</p>
                    </div>
    </section>

      <Footer/>
      </div>
  )
}

export default Refundpolicy;