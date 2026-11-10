import React from 'react';
import { FiMonitor, FiSmartphone, FiServer } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import trackPointer from '../utils/trackPointer';
import { expertise, toolbox } from '../assets/content';

// styles
import { ExpertiseWrapper } from '../styles/Expertise.styles';

const icons = {
  web: FiMonitor,
  mobile: FiSmartphone,
  backend: FiServer,
};

const Expertise = () => {
  return (
    <ExpertiseWrapper id="expertise" className="section">
      <div className="container">
        <SectionHeading index="02" eyebrow="Expertise" title="One engineer, the whole product surface.">
          Deep frontend roots, with the range to ship the mobile app and the
          API it talks to — so features move from idea to production without
          hand-off gaps.
        </SectionHeading>

        <div className="pillars">
          {expertise.map(({ id, label, title, description, tags }, i) => {
            const Icon = icons[id];
            return (
              <Reveal
                as="article"
                className="pillar spotlight"
                key={id}
                delay={i * 120}
                onMouseMove={trackPointer}
              >
                <div className="pillar-head">
                  <span className="icon">
                    <Icon />
                  </span>
                  <span className="label">{label}</span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <ul className="tags">
                  {tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="toolbox">
          <span className="toolbox-label">Also in the toolbox</span>
          {/* the list is repeated so the marquee can loop seamlessly */}
          <div className="marquee">
            <ul className="track">
              {[...toolbox, ...toolbox, ...toolbox, ...toolbox].map((tool, i) => (
                <li key={i} aria-hidden={i >= toolbox.length || undefined}>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </ExpertiseWrapper>
  );
};

export default Expertise;
