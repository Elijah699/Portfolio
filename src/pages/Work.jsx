import React from 'react';
import { ProjectCard } from '../components/ProjectCard';
import projectData from '../assets/projectData';

// styles
import { WorkWrapper } from '../styles/Work.styles';

const Work = () => {
  return (
    <WorkWrapper id="work">
      <div className="work-container">
        <div className="section-title">
          <h2>WORK</h2>
        </div>

        <div className="work-info">
            {projectData.map(
              ({ id, name, abstract, image, link, github, tech, classname }) => (
                <ProjectCard
                  id={id}
                  name={name}
                  abstract={abstract}
                  image={image}
                  link={link}
                  github={github}
                  tech={tech}
                  classname={classname}
                />
              )
            )}
        </div>
      </div>
    </WorkWrapper>
  );
};

export default Work;