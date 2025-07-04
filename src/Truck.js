// Truck.js
import React from 'react';
import './Truck.css';
import { Link } from 'react-router-dom';

function Truck() {
  return (
    <div className="truck-page">
      {/* Background Video */}
      <video className="background-video" autoPlay muted loop>
        <source src="/source.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="overlay">
        <div className="card">
          <img src="/TechScopeLogo.png" alt="TechScope Logo" className="logo" />
          <h2>Smart Trash Collection</h2>
          <p>
            Our AI system uses a garbage truck's backview mirror to detect and align with trash bins automatically.
          </p>
          <img src="/back-view.jpg" alt="Backview Output" className="output-image" />
          <Link to="/" className="back-button">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}

export default Truck;
