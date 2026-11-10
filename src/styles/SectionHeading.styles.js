import styled from 'styled-components';

export const SectionHeadingWrapper = styled.div`
  max-width: 44rem;
  margin-bottom: 3.5rem;

  .eyebrow {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;

    .index {
      color: var(--accent);
    }

    .line {
      width: 0;
      height: 1px;
      background: var(--gradient);
      transition: width 0.8s var(--ease) 0.3s;
    }
  }

  .is-visible .eyebrow .line {
    width: 2rem;
  }

  h2 {
    margin-top: 1rem;
    font-family: var(--font-display);
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
  }

  .lead {
    margin-top: 1.25rem;
    color: var(--muted);
    font-size: 1.0625rem;
  }
`;
