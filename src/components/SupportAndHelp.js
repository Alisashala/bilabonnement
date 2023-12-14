import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/SupportAndHelp.css'; 

function SupportAndHelp() {
  return (
    <div className="support-and-help-container">
      <header>
        <div className="logo-container">
        <Link to="/" className="logo-container2">
          <img src="logoimage.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <nav>
          <ul style={{ marginLeft: 'auto' }}>
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="support-and-help-content"> 
        <h1>Support and Help</h1>
        <p>
          If you need assistance or have any questions, our support team is here to help.
          Please feel free to reach out to us via email at <a href="mailto:LoveAndAffection@ITA.com">LoveAndAffection@ITA.com</a>.
        </p>
        <p>
          Our dedicated support team is available around the clock to assist you with any queries or concerns.
          Whether you're facing technical issues, need help navigating our platform, or have general inquiries,
          we're here to provide the support you need.
        </p>

        <p>
          Contacting our support team is easy. Simply send us an email at <a href="mailto:LoveAndAffection@ITA.com">LoveAndAffection@ITA.com</a>,
          and one of our friendly representatives will get back to you promptly.
        </p>

        <p>
          For quick answers to common questions, check out our help center. It's a comprehensive resource
          filled with articles, tutorials, and step-by-step guides to help you make the most of our services.
        </p>

        <p>
          We value your feedback! If you have suggestions for improvement or want to share your experience,
          please let us know. Your input helps us enhance our services and create a better experience for all users.
        </p>

        <p>
          Thank you for choosing our platform. We appreciate your trust, and we're here to ensure your journey with us
          is smooth and enjoyable.
        </p>
      </div>
    </div>
  );
}

export default SupportAndHelp;
