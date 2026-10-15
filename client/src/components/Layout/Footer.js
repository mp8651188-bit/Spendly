import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer spendly-footer">
      <div className="spendly-footer-content">
        <div>
          <Link className="spendly-footer-brand" to="/">Spendly<span>.</span></Link>
          <p className="spendly-footer-tagline">Your money. Your goals. Your way.</p>
        </div>
        <div className="spendly-footer-contact">
          <span>Ravet, Pune</span>
          <a href="tel:+919021796092">9021796092</a>
          <a href="mailto:patilmohit2486@gmail.com">patilmohit2486@gmail.com</a>
        </div>
      </div>
      <div className="spendly-footer-bottom">
        <p>All rights reserved &copy;2026 Spendly.</p>
        <nav aria-label="Footer navigation">
          <Link to="/contact-us">Contact</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
