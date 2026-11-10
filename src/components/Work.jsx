import React, { useState } from 'react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { ProjectCard } from './ProjectCard';
import { projects } from '../assets/content';

// styles
import { WorkWrapper } from '../styles/Work.styles';

const ALL = 'All';
const categories = [ALL, ...new Set(projects.map(({ category }) => category))];

const Work = () => {
  const [filter, setFilter] = useState(ALL);
  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <WorkWrapper id="work" className="section">
      <div className="container">
        <SectionHeading index="04" eyebrow="Selected work" title="Things I've built.">
          A selection of some old projects — each links to the live build and its source.
        </SectionHeading>

        {/* filters only make sense once there is more than one category */}
        {categories.length > 2 && (
          <Reveal className="filters" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                className={filter === category ? 'filter active' : 'filter'}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {category}
              </button>
            ))}
          </Reveal>
        )}

        <div className="work-grid">
          {visible.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 120}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>

        <Reveal className="more">
          <a
            className="button button-ghost"
            href="https://github.com/Elijah699"
            target="_blank"
            rel="noreferrer"
          >
            More on GitHub
          </a>
        </Reveal>
      </div>
    </WorkWrapper>
  );
};

export default Work;
