import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  border-top: 1px solid var(--border);

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    color: var(--subtle);
    font-size: 0.875rem;
  }

  .to-top {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
    color: var(--muted);
    transition: color 0.2s ease;

    &:hover {
      color: var(--text);
    }
  }
`;
