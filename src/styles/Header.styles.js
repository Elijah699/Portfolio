import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;

  // the blur lives on a pseudo-element: backdrop-filter on the header itself
  // would become the containing block for the fixed mobile menu
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    border-bottom: 1px solid transparent;
    transition: background-color 0.3s ease, border-color 0.3s ease;
  }

  &.scrolled::before {
    background: rgba(7, 6, 11, 0.75);
    -webkit-backdrop-filter: saturate(160%) blur(14px);
    backdrop-filter: saturate(160%) blur(14px);
    border-bottom-color: var(--border);
  }

  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--header-height);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.0625rem;
    letter-spacing: -0.01em;
  }

  .header-nav {
    display: flex;
    align-items: center;
    gap: 1.5rem;

    ul {
      display: flex;
      gap: 0.25rem;
      list-style: none;
    }

    ul a {
      display: block;
      padding: 0.5rem 0.875rem;
      border-radius: 999px;
      color: var(--muted);
      font-size: 0.9375rem;
      transition: color 0.2s ease, background-color 0.2s ease;

      &:hover {
        color: var(--text);
      }

      &.active {
        color: var(--text);
        background: var(--surface-2);
      }
    }

    .resume {
      height: 2.5rem;
      padding: 0 1.125rem;
      font-size: 0.875rem;
    }
  }

  .menu-toggle {
    display: none;
    width: 2.75rem;
    height: 2.75rem;
    padding: 0.625rem;
    margin-right: -0.625rem;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  /* MEDIA QUERIES */
  @media (max-width: 860px) {
    .menu-toggle {
      display: inline-flex;
    }

    .header-nav {
      position: fixed;
      top: var(--header-height);
      left: 0;
      right: 0;
      bottom: 0;
      flex-direction: column;
      align-items: flex-start;
      gap: 2.5rem;
      padding: 2.5rem var(--gutter);
      background: var(--bg);
      opacity: 0;
      visibility: hidden;
      transform: translateY(-0.75rem);
      transition: opacity 0.3s var(--ease), transform 0.3s var(--ease),
        visibility 0.3s;

      &.open {
        opacity: 1;
        visibility: visible;
        transform: none;
      }

      ul {
        flex-direction: column;
        width: 100%;
        gap: 0;
      }

      ul a {
        padding: 1rem 0;
        border-radius: 0;
        border-bottom: 1px solid var(--border);
        font-family: var(--font-display);
        font-size: 1.75rem;
        color: var(--text);

        &.active {
          background: none;
          color: var(--accent);
        }
      }

      .resume {
        height: 3rem;
        padding: 0 1.5rem;
        font-size: 1rem;
      }
    }
  }
`;
