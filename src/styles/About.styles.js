import styled from 'styled-components';

export const AboutWrapper = styled.section`
  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    gap: 5rem;
  }

  .about-copy {
    p {
      color: var(--muted);
      font-size: 1.0625rem;
      line-height: 1.8;

      & + p {
        margin-top: 1.25rem;
      }

      &:first-child {
        color: var(--text);
        font-size: 1.25rem;
        line-height: 1.7;
      }
    }

    .signature {
      font-family: var(--font-mono);
      font-size: 0.875rem;
      color: var(--subtle);
    }
  }

  .principles {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      display: flex;
      gap: 1.25rem;
      padding: 1.5rem;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
    }

    .num {
      font-family: var(--font-mono);
      font-size: 0.8125rem;
      color: var(--accent);
      padding-top: 0.2rem;
    }

    h3 {
      font-family: var(--font-display);
      font-size: 1.125rem;
      font-weight: 600;
    }

    p {
      margin-top: 0.375rem;
      color: var(--muted);
      font-size: 0.9375rem;
    }
  }

  /* MEDIA QUERIES */
  @media (max-width: 900px) {
    .about-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }
`;
