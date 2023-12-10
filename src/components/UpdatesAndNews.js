// src/components/UpdatesAndNews.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/UpdatesAndNews.css'; // Import the CSS file

function UpdatesAndNews() {
  return (
    <div className="updates-and-news-container">
      <header>
        <div className="logo-container">
          <img src="logoimage.png" alt="Logo" className="logo" />
        </div>
        <nav>
          <ul style={{ marginLeft: 'auto' }}>
            <li>
              <Link to="/" className="nav-link home">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className="updates-and-news-content">
        <h1>Updates and News</h1>
        <p>
          Stay informed about the latest updates and news from our platform.
          We regularly post announcements, feature updates, and other relevant information.
        </p>
        <p>
          Feel free to check back often to stay in the loop on what's happening.
        </p>
        <p>
          <strong>New Version: v2.0.0</strong>
        </p>
        <ul>
          <li>Introducing a sleek new user interface for an enhanced user experience.</li>
          <li>Improved performance and faster loading times across the platform.</li>
          <li>Added new features to streamline your workflow and boost productivity.</li>
          <li>Bug fixes and stability improvements for a smoother experience.</li>
        </ul>
        <p>
          In addition to our website updates, we also send out newsletters to our subscribers.
          Subscribe to our newsletter to receive exclusive content and early access to new features.
        </p>
      </div>
    </div>
  );
}

export default UpdatesAndNews;
