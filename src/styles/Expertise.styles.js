import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  to {
    transform: translateX(-50%);
  }
`;

export const ExpertiseWrapper = styled.section`
  .pillars {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .pillar {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
    transition: border-color 0.3s ease, transform 0.8s var(--ease),
      opacity 0.8s var(--ease);

    &:hover {
      border-color: var(--border-strong);
    }

    > * {
      position: relative;
    }
  }

  .pillar-head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icon {
      display: grid;
      place-items: center;
      width: 3rem;
      height: 3rem;
      border-radius: 0.75rem;
      background: var(--accent-soft);
      color: var(--accent);
      font-size: 1.25rem;
    }

    .label {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--subtle);
    }
  }

  h3 {
    margin-top: 2rem;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  p {
    margin-top: 0.75rem;
    color: var(--muted);
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: auto;
    padding-top: 1.75rem;
    list-style: none;
  }

  .toolbox {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 2rem;
    margin-top: 2.5rem;
    padding: 1.5rem 2rem;
    border: 1px dashed var(--border-strong);
    border-radius: var(--radius);

    .toolbox-label {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--subtle);
    }

    .marquee {
      flex: 1;
      min-width: 0;
      overflow: hidden;
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent);

      &:hover .track {
        animation-play-state: paused;
      }
    }

    .track {
      display: flex;
      width: max-content;
      list-style: none;
      color: var(--muted);
      font-size: 0.9375rem;
      animation: ${marquee} 30s linear infinite;

      li {
        padding: 0 1.25rem;
        white-space: nowrap;

        &::before {
          content: '✦';
          margin-right: 1.25rem;
          color: var(--accent);
          font-size: 0.625rem;
          vertical-align: middle;
        }
      }
    }
  }

  /* MEDIA QUERIES */
  @media (max-width: 960px) {
    .pillars {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .pillar,
    .toolbox {
      padding: 1.5rem;
    }

    .toolbox .marquee {
      flex-basis: 100%;
    }
  }
`;
