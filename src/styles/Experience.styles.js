import styled from 'styled-components';

export const ExperienceWrapper = styled.section`
  .timeline {
    list-style: none;
    border-top: 1px solid var(--border);
  }

  .entry {
    position: relative;
    display: grid;
    grid-template-columns: 14rem minmax(0, 1fr);
    gap: 2rem;
    padding: 2.5rem 0;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 1px;
      background: linear-gradient(90deg, var(--accent), var(--border) 40%);
      transform: scaleX(0);
      transform-origin: left center;
      transition: transform 1.2s var(--ease) 0.2s;
    }

    &.is-visible::after {
      transform: scaleX(1);
    }
  }

  .period::before {
    content: '';
    display: inline-block;
    width: 0.5rem;
    height: 0.5rem;
    margin-right: 0.75rem;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 4px var(--accent-soft);
    vertical-align: middle;
  }

  .period {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    color: var(--muted);
    padding-top: 0.25rem;
  }

  h3 {
    font-family: var(--font-display);
    font-size: 1.375rem;
    font-weight: 600;

    .company {
      color: var(--muted);
      font-weight: 500;
    }
  }

  p {
    margin-top: 0.75rem;
    max-width: 44rem;
    color: var(--muted);
    line-height: 1.75;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
    list-style: none;
  }

  /* MEDIA QUERIES */
  @media (max-width: 760px) {
    .entry {
      grid-template-columns: 1fr;
      gap: 0.75rem;
      padding: 2rem 0;
    }
  }
`;
