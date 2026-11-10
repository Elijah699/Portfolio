import React from 'react';
import Reveal from './Reveal';

// styles
import { SectionHeadingWrapper } from '../styles/SectionHeading.styles';

const SectionHeading = ({ index, eyebrow, title, children }) => {
  return (
    <SectionHeadingWrapper>
      <Reveal>
        <p className="eyebrow">
          <span className="index">{index}</span>
          <span className="line" aria-hidden="true" />
          {eyebrow}
        </p>
        <h2>{title}</h2>
        {children && <p className="lead">{children}</p>}
      </Reveal>
    </SectionHeadingWrapper>
  );
};

export default SectionHeading;
