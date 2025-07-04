import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Truck from './Truck';

function Home() {
  return (
    <div className="App">
      <header className="header">
        <h1>TechScope</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#expertise">Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Vision AI for a Smarter World</h2>
        <p>Empowering industries with cutting-edge computer vision solutions — from automation to diagnostics.</p>
        <a href="#contact" className="button">Work With Us</a>
      </section>

      <section id="about" className="section">
        <h3>About TechScope</h3>
        <p>We build intelligent vision systems that automate perception and decision-making across robotics, healthcare, architecture, and beyond.</p>
      </section>

      <section id="expertise" className="section section-alt">
        <h3>Our Expertise</h3>
        <ul className="card-list">
          <li className="card">
            <h4>Embedded Vision Systems</h4>
            <p>Deploy AI models directly to edge devices like drones, robots, and smart cameras.</p>
          </li>
          <li className="card">
            <h4>CAD Automation</h4>
            <p>Extract and measure objects from AutoCAD files using custom-trained vision models.</p>
          </li>
          <li className="card">
            <h4>Medical & Cosmetic AI</h4>
            <p>AI models that detect hair loss and other image-based clinical insights.</p>
          </li>
        </ul>
      </section>

      <section id="projects" className="section">
        <h3>Featured Projects</h3>
        <ul className="card-list">
          <li className="card">
            <h4>Smart Trash Collection</h4>
            <p>Vision system on garbage truck mirrors automatically detects and aligns with trash bins.</p>
            <Link to="/truck">
              <button className="review-button">Review</button>
            </Link>
          </li>
          <li className="card">
            <h4>AutoCAD Detection Model</h4>
            <p>Analyze CAD drawings to detect structures and measure distances with pixel-level accuracy.</p>
            <a
              href="https://efficio-ai.vercel.app/models/way-eye"
              target="_blank"
              rel="noopener noreferrer"
              className="review-button"
            >
              Review
            </a>
          </li>
          <li className="card">
            <h4>Hair Loss Detection</h4>
            <p>AI-powered classification of hair loss levels from face or head images for medical or cosmetic use.</p>
            {/* Removed link to /bald */}
          </li>
        </ul>
      </section>

      <section id="contact" className="section section-alt">
        <h3>Let's Build with Vision</h3>
        <p>Partner with TechScope to bring computer vision to your products and workflows.</p>
        <p>Email: <a href="mailto:techscope2025il@gmail.com">techscope2025il@gmail.com</a></p>
        <p>Website: <a href="https://techscopecomputervision.github.io/techscope-portfolio/">TechScope</a></p>
      </section>

      <footer className="footer">
        &copy; {new Date().getFullYear()} TechScope. All rights reserved.
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/truck" element={<Truck />} />
      </Routes>
    </Router>
  );
}

export default App;
