import styled from 'styled-components';

export const WorkWrapper = styled.section`
  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;

    .filter {
      height: 2.5rem;
      padding: 0 1.125rem;
      border: 1px solid var(--border);
      border-radius: 999px;
      color: var(--muted);
      font-size: 0.875rem;
      transition: color 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;

      &:hover {
        color: var(--text);
      }

      &.active {
        background: var(--text);
        border-color: var(--text);
        color: var(--bg);
      }
    }
  }

  .work-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
  }

  .more {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
  }

  /* MEDIA QUERY */
  @media (max-width: 800px) {
    .work-grid {
      grid-template-columns: 1fr;
    }
  }
`;
