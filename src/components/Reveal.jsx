import React from 'react';
import useInView from '../hooks/useInView';

// Fades children in the first time they scroll into view.
const Reveal = ({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) => {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
