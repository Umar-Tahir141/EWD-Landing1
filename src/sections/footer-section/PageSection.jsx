import React from 'react';
import './PageSection.css';

const PageSection = () => {
  return (
    <section className="page-section">
      <div className="container">
        {/* Main Content */}
        <div className="main-content">
          <p className="section-label">Ready to build something real?</p>
          
          <h2 className="section-heading">
            Atlanta's Full-Service Digital Agency—<br />
            One Strategy. Every Service.
          </h2>
          
          <h1 className="section-headline">
            Strategy, design, development, marketing, or just an honest conversation — Tailor & Made is Atlanta's agency for businesses that build with intention.
          </h1>
          
          <p className="section-tagline">Measure twice. Build once. Grow for good.</p>
          
          <div className="section-buttons">
            <button className="btn btn-filled">Start a Strategy Conversation</button>
            <button className="btn btn-outline">Explore All Services</button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid">
          {/* Email Column */}
          <div className="footer-col footer-col-email">
            <div className="email-field">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="email-input"
              />
              <span className="email-arrow">▾</span>
            </div>
            <p className="privacy-text">
              By subscribing, you agree with our<br />
              <a href="#privacy" className="text-link">Privacy Policy</a>
            </p>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h3 className="col-title">Company</h3>
            <ul className="col-links">
              <li><a href="#agency">Agency</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#company">Company</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div className="footer-col">
            <h3 className="col-title">Social</h3>
            <ul className="col-links">
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
              <li><a href="#dribbble">Dribbble</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#awwwards">Awwwards</a></li>
              <li><a href="#youtube">YouTube</a></li>
            </ul>
          </div>

          {/* Office Column */}
          <div className="footer-col">
            <h3 className="col-title">Office</h3>
            <ul className="col-links">
              <li><a href="#newyork">New York</a></li>
              <li><a href="#toronto">Toronto</a></li>
              <li><a href="#berlin">Berlin</a></li>
              <li><a href="#london">London</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageSection;