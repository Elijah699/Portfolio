import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { profile } from '../assets/content';

// styles
import { FooterWrapper } from '../styles/Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container footer-container">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed &amp; built with
          React and styled-components.
        </p>
        <a href="#top" className="to-top">
          Back to top <FiArrowUp />
        </a>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
