import React from 'react';

// icons
import { FiLink } from 'react-icons/fi';
import { IoGitBranchOutline } from 'react-icons/io5';

// styles
import { ProjectWrapper } from '../styles/ProjectCard.styles';

export const ProjectCard = ({
  id,
  name,
  abstract,
  link,
  github,
  tech,
  techArray,
  classname,
}) => {
  return (
    <ProjectWrapper key={id}>
      <a className="img-container" href={link} target="_blank" rel="noreferrer">
        <div className={`bg-img ${classname}`}></div>
        <div className="overlay">
          <div className="item-meta">
            <h5>{abstract}</h5>
            <p>{tech}</p>
          </div>
        </div>
        <div className="link-icon">
          <FiLink />
        </div>
      </a>

      <div className="project-name">
        <h3>
          <a href={link} target="_blank" rel="noreferrer">
            {name}
          </a>
        </h3>
        <div className="icons">
          <a href={github}>
            <IoGitBranchOutline /> Code
          </a>
        </div>

        <div className="tech-container">
          {techArray.map((item) => (
            <div className="tech">{item}</div>
          ))}
        </div>
      </div>
    </ProjectWrapper>
  );
};
