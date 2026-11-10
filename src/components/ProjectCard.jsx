import React from 'react';

// icons
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

// styles
import { ProjectWrapper } from '../styles/ProjectCard.styles';
import trackPointer from '../utils/trackPointer';

export const ProjectCard = ({ name, category, description, image, tags, live, source }) => {
  return (
    <ProjectWrapper className="spotlight" onMouseMove={trackPointer}>
      <a className="preview" href={live} target="_blank" rel="noreferrer" tabIndex={-1}>
        <img src={image} alt={`Screenshot of ${name}`} loading="lazy" />
      </a>

      <div className="body">
        <span className="category">{category}</span>
        <h3>
          <a href={live} target="_blank" rel="noreferrer">
            {name}
            <FiArrowUpRight className="arrow" aria-hidden="true" />
          </a>
        </h3>
        <p>{description}</p>

        <div className="footer">
          <ul className="tags">
            {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
          {source && (
            <a
              className="source"
              href={source}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} source code on GitHub`}
            >
              <FiGithub />
            </a>
          )}
        </div>
      </div>
    </ProjectWrapper>
  );
};
