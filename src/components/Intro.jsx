import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
// icons
import { CgArrowLongRight } from 'react-icons/cg';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
// styles
import { IntroWrapper, Wave } from '../styles/Intro.styles';

const Intro = () => {
  return (
    <IntroWrapper>
      <div className="intro-container">
        <div className="intro-icons">
          <a
            className="social-icon"
            href="https://github.com/Elijah699"
            target="_blank"
            rel="noreferrer"
          >
            <FiGithub size={20} />
          </a>

          <a
            className="social-icon"
            href="https://www.linkedin.com/in/edun-elijah-3850081a3/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin size={20} />
          </a>

          <a
            className="social-icon"
            href="https://twitter.com/devCreed"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter size={20} />
          </a>

          <a
            className="social-icon"
            href="https://wa.me/2349072334063"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp size={20} />
          </a>

          <span></span>
        </div>

        <div className="intro-info">
          <p className="first-p">
            Hello <Wave>👋</Wave>, I'm
          </p>
          <p className="main-p">
            Elijah <span className="middle-name">Oluwakayode</span> Edun.
          </p>
          <div className="hero-animation">
            <span className="hero-span">I'm a </span>
            <ReactTypingEffect
              text={[
                'Frontend Developer.',
                'Tech Enthusiast & an Opensource Contributor.',
                'Crypto & Web 3 Lover.',
              ]}
              speed={100}
              eraseDelay={300}
              eraseSpeed={200}
              typingDelay={2000}
            />
          </div>

          <p className="third-p">
            {' '}
            I specialise in building scalable web apps and providing better
            experience for users meaning I code beautifully simple things that
            intrigues users, and I love what I do.
          </p>

          <div className="mail-div">
            <a
              href="https://docs.google.com/document/d/1WOw30JJPRcpXjAk7Kg6PmwmhFQ3o0hgaRGEMhm-LKA4/edit?usp=sharing"
              className="btn resume"
              target="_blank"
              rel="noreferrer"
            >
              RESUME
            </a>
            <a
              className="btn mail"
              href="mailto:devcreed18@gmail.com?Subject=GET IN TOUCH"
              target="_blank"
              rel="noreferrer"
            >
              GET IN TOUCH
              <span className="arrow">
                <CgArrowLongRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
