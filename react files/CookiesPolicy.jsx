import React, { useState, useEffect } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import './css/HomePage.css'
import cookieData from './cookieData.json';
import TableRow from './cookieTable.jsx'



function CookiesPolicy() {

  
  return (
    <div>
        
        <div>
        <Header/>
        </div>

        <section class="basic">
        <div class="container content" id="app">
            <h1>Cookies Policy</h1>
                            <h3>Introduction</h3>
<p class="heading4 font-weight-regular" align="justify">This website (hereinafter called the “<strong>Website</strong>”) which is operated and owned by <strong>General Market Project EOOD</strong>, registered at 121 Prodromou Avenue, Nicosia 2064, Cyprus (hereinafter the “<strong>Company</strong>”).</p>
<p class="heading4 font-weight-regular" align="justify">The Company values the privacy of every visitor on the website and takes great effort in maintaining the privacy and the security of each website’s visitor by providing the required security. The provisions of this Cookies Policy (the “<strong>Policy</strong>”) apply to all visitors of the Company’s website and it refers only to cookies.</p>
<p class="heading4 font-weight-regular" align="justify">For more information in relation to the collection, processing and protection of your personal data, as well as information regarding your rights, please refer to our <a href="/privacy-policy/">Privacy&nbsp;Policy</a>, which is available on the Website.</p>
<p class="heading4 font-weight-regular" align="justify">We reserve the right to update this Policy at any time, and we will provide you with a new data protection policy when we make any substantial updates. We may also notify you in other ways from time to time about the processing of your personal information.</p>
<h3>What are Cookies</h3>
<p class="heading4 font-weight-regular" align="justify">Cookies are a kind of short-term memory which is stored in a visitor’s and/or client’s browser and enables Services to 'remember' little bits of information between pages or visits. Some of the purposes of installation of Cookies or similar applications may also require the separate consent from you.</p>
<h3>What type of cookies do we use?</h3>
<p class="heading4 font-weight-regular" align="justify">There are several types of cookies, including inter alia, strictly necessary cookies which are essential to enable navigation through the website, performance which are used to improve use of the website, functionality cookies which are used to remember changes in choices a user requested. We only use strictly necessary cookies on the website. Please see on the below table all cookies used on the website.</p>
<br />
<br />
<table style={{ border: '1px solid #2c2c2c', borderCollapse: 'collapse', width: '80%', cellspacing: '0', cellpadding: '1' }}>
      <thead>
        <tr>
          <td style={{ border: '1px solid #2c2c2c' }}>
            <p style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>Cookie Name</p>
          </td>
          <td style={{ border: '1px solid #2c2c2c' }}>
            <p style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>Purpose</p>
          </td>
          <td style={{ border: '1px solid #2c2c2c' }}>
            <p style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>Duration</p>
          </td>
          <td style={{ border: '1px solid #2c2c2c' }}>
            <p style={{ padding: '10px', textAlign: 'center', fontWeight: 'bold' }}>Cookie Type</p>
          </td>
        </tr>
      </thead>

<tbody>
              {cookieData.map((cookie, index) => (
                <TableRow
                  key={index}
                  name={cookie.name}
                  purpose={cookie.purpose}
                  duration={cookie.duration}
                  type={cookie.type}
                />
              ))}
            </tbody>
</table>
<br />
<br />

<p class="heading4 font-weight-regular" align="justify">The abovementioned cookies can also be described as technical cookies and cookies serving aggregated statistical purposes. These cookies are essential to ensure that you can navigate and use certain functions of the website. Without them, essential parts of the website cannot be used. Accordingly, these cookies are always activated. They are only used when you visit our website and are usually deleted when you close your browser or following the duration mentioned on the table above. They are also used to call up the optimised website display when accessed with a mobile device so that, for example, your data volume is not unnecessarily consumed.</p>
<h3>Consent to Cookies</h3>
<p class="heading4 font-weight-regular" align="justify">Provided that the cookies used on the website are only essential for the website to function, there is no reason to require your consent. If for whatever reason you do not wish to receive cookies, you should stop using the website and you can proceed to change the settings of your internet browser or mobile device to refuse all cookies or contact us at <a href="mailto:support@unitrading.io">support@unitrading.io</a>.</p>
<h3>Use of Cookies</h3>
<p class="heading4 font-weight-regular" align="justify">As mentioned above, the Company uses cookies to enable it to provide you with a better experience in using our website. If you do not wish to receive cookies, you may be able to change the settings of the browser or mobile device to refuse all cookies or to receive notification each time a cookie is sent, thereby giving the choice whether to accept it or not. However, this may impair the quality of the experience in using the website.</p>
<h3>How can you manage the installation of Cookies?</h3>
<p class="heading4 font-weight-regular" align="justify">You can control and/or delete cookies as you wish directly from within your own internet browser or mobile device and prevent – for example – third parties from installing them. You can delete all cookies that are already on your computer, and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work. It is important to note that by disabling all Cookies, the functioning of the Services may be compromised. For further information about cookies and how to disable them, please refer to <a href="http://www.allaboutcookies.org">www.allaboutcookies.org</a>.</p>
<h3>CONTACT US</h3>
<p class="heading4 font-weight-regular" align="justify">Should you require any further clarification regarding this Cookies Policy, please contact us at <a href="mailto:support@unitrading.io">support@unitrading.io</a>.</p>
                    </div>
    </section>



      <Footer/>
      </div>
  )
}

export default CookiesPolicy;