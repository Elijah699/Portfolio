import styled from 'styled-components';

export const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  height: 2px;
  background: var(--gradient);
  transform: scaleX(0);
  transform-origin: left center;
  pointer-events: none;
`;
