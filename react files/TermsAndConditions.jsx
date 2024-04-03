import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import './css/HomePage.css'

function TermsAndConditions() {

  const Paragraph = ({ className, children }) => {
    return <p className={className}>{children}</p>;
  };
  
  const Heading3 = ({ className, children }) => {
    return <h3 className={className}>{children}</h3>;
  };

  return (
    <div>
        
        <div>
        <Header/>
        </div>


        <div className="container content" id="app">
        <h1>Terms and Conditions</h1>

        <h3 className="heading3 text-uppercase mb-3">WEBSITE TERMS OF USE</h3>
      <p className="heading4 font-weight-regular">By accessing or using the https://unitrading.io/ website (the «site»), you acknowledge and agree to the disclaimers and terms and conditions («terms») set forth below. Please ensure that you (referred to as the «user», «you» or «your» in these Terms and Conditions) read these Terms and Conditions with care. If you do not agree to these Terms and Conditions, you should not use the site. These Terms apply to your use of the site, which is operated and owned by General Market Project EOOD registered at 121 Prodromou Avenue, Nicosia 2064, Cyprus&nbsp;(«UNITrading», «we», and/or «us»).</p>
      <p className="heading4 font-weight-regular">You must be 18 years of age to become a member of the UNITrading service. The member who created the UNITrading account and whose Payment Method is charged is referred to here as the «Account Owner» or a «Member» having a «Membership».</p>
      <p className="heading4 font-weight-regular">UNITrading reserves the right, in our sole discretion, to change, modify, add or remove portions of these Terms and Conditions at any time by posting the revisions on the site. You should check these Terms periodically for changes as by using the site after we post any changes to these Terms, you are agreeing to accept those changes, whether or not you have reviewed them, and you waive any right you may have to receive individualised notice of such changes.</p>
      <p className="heading4 font-weight-regular">By using the site, whether as a guest or a registered user, you agree to be legally bound by these Terms just as if you had signed this agreement. These Terms may be supplemented by additional terms and conditions pertaining to specific content and activities. You agree and understand that such additional terms and conditions are hereby incorporated by reference to these Terms. You are responsible for making all arrangements necessary for you to have access to the site. You are also responsible for ensuring that all persons who access the site through your Internet connection are aware of these Terms, and that they comply with them. From time to time, access to some parts of the site, or the entire site, may be restricted to registered users and further terms and conditions shall apply to such registered users, which the user will be asked to accept within the relevant pages.</p>
      <p className="heading4 font-weight-regular">From time to time UNITrading and any of its officers and employees many, to the extent permitted by law, have a position or interest in the instruments – or derivative of instruments – covered directly or indirectly by our reports.</p>
      <h3 className="heading3 text-uppercase mb-3">NO INVESTMENT RECOMMENDATIONS OR ADVICE; RELIANCE ON INFORMATION</h3>
      <p className="heading4 font-weight-regular">Our website is a financial education, data portal, and content aggregator. UNITrading is not a broker/dealer, we are not an investment advisor, we have no access to non-public information about publicly traded companies, and this is not a place for the giving or receiving of financial advice, advice concerning investment decisions or tax or legal advice. The services and the information available on or through this site are only for your general information and use and are not intended to address your particular requirements.</p>
      <p className="heading4 font-weight-regular">In particular, the investment information, content, education, strategies, alerts, and materials on this site (the «investment information») is in the nature of general investment research and data and is for general informational purposes only. The investment information is not personalised for you or any other recipient, does not constitute any form of advice or recommendation or investment advice by us or other users and is not and should not be considered to be an individualised investment recommendation. Such information is not intended to be relied upon by you in making (or refraining to make) any specific investment or other decisions.</p>
      <p className="heading4 font-weight-regular">Appropriate expert independent advice should be obtained before making any such decision. You bear all risks from any use or results of using any services and/or information on this site. UNITrading is an education and research platform for retail traders and investors that specialises in education and producing statistical observations on key financial instruments. These instruments include but are not limited to shares, rolling spot foreign exchange contracts, commodity futures, contract for differences, spread bets, futures and government and public securities.</p>
      <p className="heading4 font-weight-regular">We will not arrange any transactions on your behalf. The Investment Information on the site is provided «AS IS» without warranty of any kind. To the maximum extent permitted by applicable law UNITrading is not responsible or liable in any manner for, and makes no representations or warranties of any kind regarding the accuracy, completeness, quality, reliability or usefulness of any investment information or the results obtained from any investment information.</p>
      <p className="heading4 font-weight-regular">The type of strategies mentioned on the site may not be suitable for everyone, and you alone are solely responsible for determining whether any investment, strategy or any other product or service is appropriate or suitable for You should consult an independent financial advisor, attorney or tax professional regarding your specific investment, legal or tax situation.</p>
      <p className="heading4 font-weight-regular">We may offer valuation tools; these are solely for information and educational purposes so that users can easily run their own valuations. The pre-defined values are simply a starting point based on global assumptions that we have applied across the entire market – you should amend the values as you see fit and not regard them as a substitute for your own judgment. Any resulting valuation outputs are necessarily generic and are not endorsed for a given stock by UNITrading.</p>
      <h3 className="heading3 text-uppercase mb-3">INVESTMENT WARNINGS</h3>
      <p className="heading4 font-weight-regular">We would like to draw your attention to the following important investment warnings.</p>

      <p className="heading4 font-weight-regular">
        a) The value of shares and investments and the income derived from them can go down as well as up;<br />
        b) When speculating on derivatives losses can exceed deposits;<br />
        c) Investors may not get back the amount they invested and furthermore losses can exceed deposits – substantial losses greater than your capital are a real risk;<br />
        d) Past performance is not a guide to future performance;<br />
        e) Some instruments, such as derivatives, may be disproportionately impacted by changes in the underlying instruments on which they are based, and as such are particularly high risk investments;<br />
        f) For some of the instruments covered in our research price discovery and liquidity may, from time to time, be impacted by market conditions, making it hard to deal in those instruments or ascertain their correct market value.
      </p>

      <h3 className="heading3 text-uppercase mb-3">MEMBERSHIP</h3>
      <p className="heading4 font-weight-regular">
        UNITrading offers access to its educational content on a tiered Membership basis (&laquo;Membership&raquo;). You may receive access to each level by purchasing a package. Each package affords you access to the relevant courses as defined in the Packages list.
      </p>
      <p className="heading4 font-weight-regular">
        In order to become a Member of the site you must have internet access and provide us with certain personal details including a current, valid, accepted method of payment on entry to the site (as such may be updated from time to time &laquo;Payment Method&raquo;) to use the UNITrading service. We will bill the fee to your Payment Method upfront. We reserve the right to modify, terminate or otherwise amend our offered Membership plans.
      </p>
      <h3 className="heading3 text-uppercase mb-3">BILLING</h3>
      <p className="heading4 font-weight-regular">
        By starting your Membership, you authorise us to charge you the Membership Fee that is set out in the Packages list of our website. The Membership will be charged upfront before access to the applicable content is made available.
      </p>
      <h3 className="heading3 text-uppercase mb-3">CANCELLATION</h3>
      <p className="heading4 font-weight-regular">
        All Membership Fees are fully earned upon payment and are non-refundable except during the first 90 days since the beginning of the Membership under the condition that you have viewed no more than 50% of the lessons made available to you in the Trading Essentials, Technical Trading and Strategic Trading courses.
      </p>
      <p className="heading4 font-weight-regular">
        You can request a refund by emailing us at support@unitrading.io stating your wish to receive a refund and your full name. We will carry out the reimbursement using the same means of payment as you used for the initial transaction.
      </p>
      <p className="heading4 font-weight-regular">
        Once we receive your cancellation request, you will cease to have access to the site immediately.
      </p>
      <h3 className="heading3 text-uppercase mb-3">PASSWORDS AND ACCOUNT ACCESS</h3>
      <p className="heading4 font-weight-regular">
        The member who created the account and whose Payment Method is charged is referred to here as the Account Owner. The Account Owner has access and control over the UNITrading account. The Account Owner&rsquo;s control is exercised through the use of the Account Owner&rsquo;s password and therefore to maintain exclusive control, the Account Owner should not reveal the password to anyone.
      </p>
      <p className="heading4 font-weight-regular">
        In addition, if the Account Owner wishes to prohibit others from altering the Account Owner&rsquo;s control, the Account Owner should not reveal the Payment Method details (e.g., last four digits of their credit or debit card) associated with their account. You are responsible for updating and maintaining the truth and accuracy of the information you provide to us relating to your account.
      </p>
      <p className="heading4 font-weight-regular">
        Accounts are provided on an individual basis, you are expressly forbidden from giving another person or entity access. You should be mindful of any communication requesting that you submit credit card or other account information. Providing your information in response to these types of communications can result in identity theft. Always access your sensitive account information by going directly to the UNITrading website and not through a hyperlink in an email or any other electronic communication, even if it looks official. UNITrading reserves the right to place any account on hold anytime with or without notification to the member in order to protect itself and its partners from what it believes to be fraudulent activity. UNITrading is not obligated to credit or discount a Membership for holds placed on the account by either a representative of UNITrading or by the automated processes of UNITrading.
      </p>
      <h3 className="heading3 text-uppercase mb-3">APPLICATIONS</h3>
      <p className="heading4 font-weight-regular">
        You may encounter third-party applications (including, without limitation, websites, widgets, software, or other software utilities) (&laquo;Applications&raquo;) that interact with the UNITrading service. These Applications may import data related to your UNITrading account and activity and otherwise gather data from you. These Applications are provided solely as a convenience to you, and UNITrading is not responsible for such Applications. Such applications are owned or operated by third parties that are not related to with or sponsored by UNITrading. Use of an application is at your own option and risk.
      </p>
      <h3 className="heading3 text-uppercase mb-3">ACCEPTABLE USE OF THE SITE</h3>
      <p className="heading4 font-weight-regular">
        It is impossible to provide an exhaustive list of exactly what constitutes acceptable and unacceptable use of this site. In general, UNITrading will not tolerate, and you agree not to engage in, any use of the site which damages or is likely to damage our reputation or the availability or integrity of the site, which causes harm of any kind to UNITrading or its users or which causes us or threatens to cause us to incur any legal, tax, financial, regulatory or other liability (&laquo;Misuse&raquo;). We therefore request you to treat our site with respect, and you agree not to use the site for any illegal or improper purpose, or in such a way as to infringe or breach other&rsquo;s rights or to cause or threaten to cause damage or harm to UNITrading or its users (which shall also constitute Misuse). Without limiting any of the foregoing, you agree not to use the site or cause or permit the site to be used:
      </p>

      <p className="heading4 font-weight-regular">
        a) to jeopardise or prejudice the operation, quality or integrity of the site, or the operation, quality or integrity of any telecommunications network;<br />
        b) to harvest or otherwise collect information about others, including e-mail addresses, without their consent;<br />
        c) for any commercial purpose including any direct marketing, surveys, contests or pyramid schemes, nor to use the site to participate in or cause others to participate in sending chain letters, junk e-mail, spam, duplicative or unsolicited messages, advertising or promotional material;<br />
        d) to distribute, download, upload or transmit any material which contains viruses, trojan horses, worms, or any other harmful or detrimental programs;<br />
        e) to stalk or harass anyone or to impersonate any person or entity or otherwise misrepresent your affiliation with a person or entity;<br />
        f) to attack the site via a denial-of-service attack; or<br />
        g) contrary to the terms and conditions of any Internet Service Provider you may use.
      </p>

      <Paragraph className="heading4 font-weight-regular">
        Any use of the site in a manner prohibited in these Terms will constitute Misuse. We also ask you to comply with any relevant notices, policies and terms imposed by third parties whose website, products or services you access through the site.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        We reserve the right to suspend the use of the site generally or block your access to all or any part of the site and/or to suspend or terminate your rights to use the site or any part of it at any time and for any reason (or for no reason) including if we suspect Misuse. We reserve the right to report any Misuse of the site to the relevant enforcement or other authorities and to our legal advisers. We further reserve the right to disclose any evidence we have which relates directly or indirectly to Misuse of this site.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        If any material on this site, or your use of this site, is contrary to the laws of the jurisdiction in which you are located then this site is not intended for your use and we ask that you do not use this site. You are responsible for compliance with the laws of the jurisdiction in which you are located.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">INTELLECTUAL PROPERTY</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        All materials incorporated in or accessible through the site, including, without limitation, text, photographs, images, graphics, illustrations, logos, button icons, audio clips, video clips, software, tools, data, information, and all other content, and the compilation, collection, arrangement, and assembly thereof (including the look and feel of the site) (the «site Materials»), are protected by international copyright laws, and are owned, controlled or licensed by UNITrading, or by the original creators of such materials or their permitted licensors. All such rights are reserved.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        Such site Materials may be used only for viewing the site in the ordinary course or as a resource for availing of the services offered through the site. Any other use of the site or the site Materials, including any copying, reproduction, modification, sale, distribution, extraction, scraping, data mining, re-utilisation, transmission, re-publication, downloading, display, posting, performance, or other exploitation thereof by any means or medium without the prior written permission of the copyright owner is strictly prohibited.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        UNITrading, the UNITrading logo and any other company, product or service name, logo or slogan contained in the site (the «Marks») are trademarks of UNITrading or its suppliers, publishers or licensors, and may not be copied, imitated or used, in whole or in part, without the prior written permission of UNITrading or the applicable trademark holder. You may not use any metatags or any other «hidden text» utilising such marks without prior written permission. In addition, the look and feel of the site, including all page headers, custom graphics, button icons and scripts, are the service mark, trademark and/or trade dress of UNITrading and may not be copied, imitated or used, in whole or in part, without our prior written permission.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        You must not use any part of the site Materials on the site for commercial purposes without obtaining a licence to do so from UNITrading or our licensors. If you use the site, the site Materials or the Marks other than as specifically authorised herein, without the prior written permission of UNITrading, you are in breach of these Terms, and your right to use the site will cease immediately. Such unauthorised use may also violate applicable laws including without limitation copyright and trademark laws and applicable communications regulations and statutes. You must, at our option, return or destroy any copies of the materials you have made.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        Reference to any products, services, processes, companies or other information, by trade name, trademark, manufacturer, supplier or otherwise does not constitute or imply endorsement, sponsorship or recommendation thereof by us. All site Materials contained in and published on the site by UNITrading or posted by our users are intended for the non-commercial use of the user. Subject to these Terms, we grant you a non-exclusive, non-transferable, limited licence to access and use the site and any publicly available site Materials displayed thereon, except where such use is otherwise prohibited or restricted. However, no rights, title, or interest in any such site Materials will be granted or transferred to you as a result of any permitted use of such site Materials.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        Unless explicitly stated herein, nothing in these Terms shall be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise. This license is revocable at any time.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">THIRD PARTY MATERIALS</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        UNITrading may provide access or links to third party information, content, products, services, or other materials on or through the site (collectively the «Third Party Materials») as a service to those interested in such Third Party Materials. UNITrading does not screen, approve, monitor or have any control over any Third Party Materials and is not responsible or liable for such Third Party Materials in any manner or for any harm caused thereby. You will be solely responsible for any harm, including any damage to your computer system or loss of data that results from the use or download of any Third Party Materials. All third party materials are provided on an «as-is» basis with all faults.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        UNITrading does not endorse or adopt any Third Party Materials and can make no guarantee as to the quality, accuracy, completeness, reliability, safety, timeliness or appropriateness of such Third Party Materials. UNITrading does not make any representations or warranties of any kind regarding the Third Party Materials and undertakes no responsibility to update or review any Third Party Materials. Users use such Third Party Materials at their own risk.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">ACCOUNT REGISTRATION</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        Certain features of the site may require that you register before accessing such features. If you register, you agree to:
      </Paragraph>

      <ol>
        <li>
          <Paragraph className="heading4 font-weight-regular">
            Provide accurate, current and complete information about you as may be prompted by any registration forms on the site («Registration Data»).
          </Paragraph>
        </li>
        <li>
          <Paragraph className="heading4 font-weight-regular">
            Maintain the security of your password and identification.
          </Paragraph>
        </li>
        <li>
          <Paragraph className="heading4 font-weight-regular">
            Maintain and promptly update the Registration Data, and any other information you provide to UNITrading, to keep it accurate, current and complete.
          </Paragraph>
        </li>
        <li>
          <Paragraph className="heading4 font-weight-regular">
            Accept all risks of unauthorised access to the Registration Data and any other information you provide to UNITrading.
          </Paragraph>
        </li>
      </ol>

      <Heading3 className="heading3 text-uppercase mb-3">DISCLAIMERS OF WARRANTIES</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        We do not warrant that the site will be continuously available, or that your use of the site will be uninterrupted or error-free, or that the site and server will be free from attack. This site, the site materials (including all user content as defined below) and all products and services offered on or in connection with the site are provided on an «as is» basis.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        To the fullest extent permitted by applicable law, UNITrading disclaims all warranties, express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, as to the site, the site materials and all products and services offered on or in connection with the site. Neither UNITrading, nor any of our respective licensors, licensees, service providers or suppliers warrant that the site or any function contained on the site will be uninterrupted or error-free, that defects will be corrected, or that the site or the servers that make the site available are free from viruses or other harmful components.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        We do not warrant or make any representations regarding the use or the results of the use of the site materials or any third-party site accessed through the site in terms of their correctness, accuracy, timeliness, reliability, or otherwise and you will be solely responsible for any damage to your computer system or loss of data that results from the download of any such product, offering, content or material.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        We do not warrant that the services or information provided on or through this site will be correct, complete, accurate, adequate, up-to-date or fit for any particular purpose. Further, please note that no advice or information, obtained by you from our personnel or through this site shall create any warranty not expressly provided for in these terms. You are responsible for validating the integrity of any information received over the internet. These disclaimers apply to the fullest extent permitted by law.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">ADVERTISING</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        Parts of the site may contain advertising and sponsorship. Advertisers and sponsors are responsible for ensuring that material submitted for inclusion on the site complies with international and national law. UNITrading will not be responsible for any error or inaccuracy in advertising materials.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">LIMITATION OF LIABILITY</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        You expressly understand and agree that (to the fullest extent permitted by law) UNITrading and its directors, members, employees or agents shall not be liable for any direct, indirect, incidental, special, consequential, exemplary or punitive damages, or any other damages whatsoever, including but not limited to, damages for loss of profits (whether direct or indirect) or contracts, income or revenue, goodwill, anticipated savings, data or other intangible and/or economic losses (even if we have been advised of the possibility of such damages), arising out of, or resulting from:
      </Paragraph>

      <Paragraph>
        a) the use or the inability to use the site;
      </Paragraph>
      <Paragraph>
        b) the use of, inability to use, or reliance upon any content or other site materials on or offered through the site or any website or websites linked to the site;
      </Paragraph>
      <Paragraph>
        c) unauthorised access to or alteration of your transmissions or data;
      </Paragraph>
      <Paragraph>
        d) statements or conduct of any third party on the site; and/or
      </Paragraph>
      <Paragraph>
        e) any other matter relating to the site.
      </Paragraph>


      <Paragraph className="heading4 font-weight-regular">
        In no event shall the aggregate liability of UNITrading, whether in contract, warranty, tort (including negligence, whether active, passive or imputed), product liability, strict liability or other theory, arising out of or relating to the use of or inability to use the site or the site materials exceed any compensation you pay, if any, directly to UNITrading in connection with the site and the site materials.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        The foregoing does not affect our liability for death or personal injury arising from our negligence, our liability for fraudulent misrepresentation, nor any other liability which cannot be excluded or limited under applicable law. If you are dissatisfied with any portion of the site, or with any of these Terms, your sole and exclusive remedy is the discontinuation of your use of this site.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">LINKS</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        The site contains links to third party websites. These links are provided solely as a convenience to you and not as an endorsement by UNITrading of the content on such third party websites. UNITrading is not responsible for the content of linked third party sites and does not make any representations regarding the content or accuracy of materials on such third party websites. If you decide to access linked third-party websites, you do so at your own risk and in accordance with the prevailing terms and conditions of such third party sites.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">GOVERNING LAW</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        Nothing on this website or any part thereof is intended to constitute an offer or solicitation to buy or sell investments in any jurisdiction. These Terms will be governed by, construed and enforced in accordance with, the laws of our company's country of registration. You hereby unconditionally and irrevocably submit to the exclusive jurisdiction of the courts of the aforementioned country.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        Those who choose to access this site from other locations do so on their own initiative and are responsible for compliance with applicable local laws. If you live in a country where access to the services provided by the site is prohibited, you must not register with us or attempt to use our services. Should UNITrading become aware of any Account Owner accessing the site from a country in which the access to the services provided by the site is prohibited, UNITrading reserves the right to close such Account.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">PRIVACY</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        We are committed to protecting your privacy. All personal data that we collect from you will be processed in accordance with our Privacy Policy. You should review our Privacy Policy and you confirm that when using this Website, you consent to your personal data being used and processed in accordance with our Privacy Policy.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        In accessing this site the user accepts that electronic mail passing over the Internet may not be free from interference by third parties. In consequence, UNITrading cannot guarantee the privacy or confidentiality of any information relating to the user passing over the Internet. The user shall be responsible for your communications to this site, including its lawfulness, truthfulness and accuracy.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">TERMINATION</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        UNITrading reserves the right, without notice and in its sole discretion with or without cause, to terminate the site or to suspend or terminate your ability to use the site, and to block or prevent future your access to and use of the site.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">ADDITIONAL TERMS</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        These Terms constitute the entire agreement between you and UNITrading with respect to your access and use of the site and any third-party website accessed through the site. If any of these Terms shall be unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions. Our failure to exercise or delay in exercising a right or remedy provided by these Terms or by law does not constitute a waiver of those or any other rights or remedies.
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        These Terms and the rights and obligations contained herein are personal to you and may not be assigned, licensed or transferred by you. We reserve the right to assign or transfer its rights and obligations under these Terms.
      </Paragraph>
      <Heading3 className="heading3 text-uppercase mb-3">CONTACTING US</Heading3>
      <Paragraph className="heading4 font-weight-regular">
        If for any reason you wish to contact us, we can be reached at:
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        General Market Project EOOD
      </Paragraph>
      <Paragraph className="heading4 font-weight-regular">
        121 Prodromou Avenue, Nicosia 2064, Cyprus
      </Paragraph>
      <Paragraph>
        or by emailing support@unitrading.io
      </Paragraph>




        </div>


    
      </div>
  )
}

export default TermsAndConditions;