import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./footer.css"
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    const [subValue, setSubValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubValue('');
        alert('Thankyou, you are subscribed to receive our daily newsletter');
    };
return(
    <div>
        <div className='footer'>

        <div className="foot_subs">
            <h3>ClickStore</h3>
            <p>Subscribe to our Email alerts to receive early discount offers, and new products info.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    className="input_field"
                    placeholder="Email Address*"
                    required
                    value={subValue}
                    onChange={(e) => setSubValue(e.target.value)}
                    />
                <br></br>
                <br></br>
                <button className="email_button" type="submit" >Subscribe</button>
            </form>
    </div>
    <div className='tags'>
          <h2>Help</h2>
          <li >FaQ</li>
          <li>Track Order</li>
          <li>Cancel Order</li>
          <li>Return Order</li>
          <li>Warrenty Info</li>
    </div>
    <div className='tags'>
          <h2>Policies</h2>
          <li>Return Policy</li>
          <li>Security</li>
          <li>Sitemap</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
    </div>
    <div className='tags'>
          <h2>Company</h2>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Service Centres</li>
          <li>Careers</li>
          <li>Affiliates</li>
    </div>
                    </div>
    <div >
        <center>

            <p className="foot_copyright">
                <h4>
                    2022 | ClickStore. All Rights Reserved.
                Built by | Team Titans
                </h4>
                <SocialIcon className='foot_sym' network="twitter"  />
                <SocialIcon className='foot_sym'network="facebook"  />
                <SocialIcon className='foot_sym'network="linkedin"  />
                <SocialIcon className='foot_sym'network="instagram"  />
                <SocialIcon className='foot_sym'network="discord"  />
                <SocialIcon className='foot_sym'network="youtube"  />
               
            </p>
        </center>
        </div>
    </div>
    );
}

export default Footer;