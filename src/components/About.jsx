import React from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { about, profile } from '../assets/content';

// styles
import { AboutWrapper } from '../styles/About.styles';

const principles = [
  { title: 'Accessible by default', text: 'Semantic markup, keyboard support and contrast are part of the definition of done.' },
  { title: 'Performance is a feature', text: 'Fast first loads, smooth interactions and lean bundles on every platform.' },
  { title: 'Built to be maintained', text: 'Typed, tested and documented so the next engineer can move quickly too.' },
];

const About = () => {
  return (
    <AboutWrapper id="about" className="section">
      <div className="container">
        <SectionHeading index="01" eyebrow="About" title="Engineer first, across every surface." />

        <div className="about-grid">
          <Reveal className="about-copy">
            {about.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <p className="signature">
              — {profile.fullName}
            </p>
          </Reveal>

          <ul className="principles">
            {principles.map(({ title, text }, i) => (
              <Reveal as="li" key={title} delay={i * 100}>
                <span className="num">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </AboutWrapper>
  );
};

export default About;
