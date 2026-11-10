import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { experience, profile } from '../assets/content';

// styles
import { ExperienceWrapper } from '../styles/Experience.styles';

const Experience = () => {
  return (
    <ExperienceWrapper id="experience" className="section">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Experience"
          title="Five years and counting."
        />

        <ol className="timeline">
          {experience.map(({ period, role, company, description, tags }, i) => (
            <Reveal as="li" className="entry" key={period} delay={i * 100}>
              <span className="period">{period}</span>
              <div className="entry-body">
                <h3>
                  {role} <span className="company">· {company}</span>
                </h3>
                <p>{description}</p>
                <ul className="tags">
                  {tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="actions" style={{ marginTop: '2rem' }}>
          <a
            className="button button-ghost"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Get a better sneak peek from my resume <FiArrowUpRight />
          </a>
        </div>
      </div>
    </ExperienceWrapper>
  );
};

export default Experience;
