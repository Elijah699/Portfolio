import React from 'react';

// icons
import { FiLink } from 'react-icons/fi';
import { FaRegEye } from 'react-icons/fa';
import { DiGitBranch } from 'react-icons/di';

import { ProjectWrapper } from '../styles/ProjectCard.styles';

export const ProjectCard = ({
  id,
  name,
  image,
  abstract,
  link,
  github,
  tech,
  classname,
}) => {
  return (
    <ProjectWrapper key={id}>
      <a href={link} target="_blank" rel="noreferrer">
        <div className={`bg-img ${classname}`}></div>
      </a>
      <h3>{name}</h3>
    </ProjectWrapper>
  );
};

// export default ProjectCard;

// <div className="wrap">
//   <a href={link}>
//   <div className="bg-img">

//   </div>

//     <div className="overlay">
//       <div className="item-meta">
//         <h5>{abstract}</h5>
//         <p>{tech}</p>
//       </div>
//     </div>
//     <div className="link-icon">
//       <FiLink />
//     </div>
//   </a>
// </div>

// <div className="project-name">
//   <h3>{name}</h3>
//   <div className="icons">
//     <a href={link}>
//       {' '}
//       <FaRegEye /> Live{' '}
//     </a>
//     <a href={github}>
//       {' '}
//       <DiGitBranch /> Code
//     </a>
//   </div>
// </div>
