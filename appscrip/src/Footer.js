// Footer.js

import React from 'react';
import './App.css'
import {AiOutlineInstagram,AiOutlineLinkedin} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
        <div className='footer1'>
      <div className="container1">
        <b>BE THE FIRST TO KNOW</b>
        <p>Sign up for updates from metta muse.</p>
        <input type='text' placeholder='Enter your e-mail...'></input>
        <button>SUBSCRIBE</button>
      </div>
      <div className='container2'>
        <b>CONTACT US</b>
        <p>+44 221 133 5360</p>
        <p>customercare@mettamuse.com</p>
        <b>CURRENCY</b>
        <p><b>USD</b></p>
        <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
      </div>
      <hr/>
      <div className='footer2'>
      <div>
        <b>metta muse</b>
        <p>About Us</p>
        <p>Stories</p>
        <p>Artisans</p>
        <p>Boutiques</p>
        <p>Contact Us</p>
        <p>EU Compliances Docs</p>
      </div>
      <div>
        <b>QUICK LINKS</b>
        <p>Orders & Shipping</p>
        <p>Join/Login as a Seller</p>
        <p>Payment & Pricing</p>
        <p>Return & Refunds</p>
        <p>FAQs</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
      <div>
        <b>FOLLOW US</b>
        <p><AiOutlineInstagram/>
              <AiOutlineLinkedin/>
</p>
              </div>
      </div>
    </footer>
  );
};

export default Footer;
