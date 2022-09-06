import React from 'react';
import sketch from '../assets/images/responsive.jpg';

// styles
import { CapabilityWrapper } from '../styles/Capability.styles';

const Capability = () => {
  return (
    <CapabilityWrapper id="capability">
      <div className="cap-container">
        <div className="section-title">
          <h2>CAPABILITIES</h2>
        </div>

        <div className="cap-info">
          <div className="col-1">
            <p>
              Since inception of my journey as a front end developer over 2
              years, I've completed jobs for agencies as a freelancer,
              collaborated with talented people to create incredible projects
              during internships and developed substantial personal projects.
            </p>
            <p>
              I'm stout-hearted, naturally curious, and consistently working on
              improving my skillset to address real world problems. These days i
              am keen on delivering accessible website that looks great on any
              screen and sustainable projects that are well documented &amp;
              easy to maintain.
            </p>

            <p>
              I build web applications and sites using technologies such as:
            </p>
            <div className="cap-skills">
              <div className="skill-col">
                <div className="skill">HTML/CSS</div>
                <div className="skill">Styled-Components</div>
              </div>
              <div className="skill-col">
                <div className="skill">Vanilla JS [ES6+]</div>
                <div className="skill">React JS</div>
              </div>
              <div className="skill-col">
                <div className="skill">Express JS</div>
                <div className="skill">Node JS</div>
              </div>
              <div className="skill-col">
                <div className="skill">Mongo DB</div>
                <div className="skill">Git</div>
              </div>
              <div className="skill-col">
                <div className="skill">Github</div>
                <div className="skill">Netlify</div>
              </div>
              <div className="skill-col">
                <div className="skill">Heroku</div>
                <div className="skill">Others</div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <img src={sketch} alt="responive-sketch" />
          </div>
        </div>
      </div>
    </CapabilityWrapper>
  );
};

export default Capability;