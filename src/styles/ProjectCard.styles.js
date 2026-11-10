import styled from 'styled-components';

export const ProjectWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.4s var(--ease);

  &:hover {
    border-color: var(--border-strong);
    transform: translateY(-4px);
  }

  .preview {
    display: block;
    aspect-ratio: 16 / 10;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
    background: var(--surface-2);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
      transition: transform 0.8s var(--ease);
    }
  }

  &:hover .preview img {
    transform: scale(1.04);
  }

  .body {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 1.75rem;
  }

  .category {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--accent);
  }

  h3 {
    margin-top: 0.625rem;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: -0.01em;

    a {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
    }

    .arrow {
      font-size: 1.125rem;
      color: var(--muted);
      transition: transform 0.3s var(--ease), color 0.3s ease;
    }

    a:hover .arrow {
      color: var(--text);
      transform: translate(2px, -2px);
    }
  }

  p {
    margin-top: 0.75rem;
    color: var(--muted);
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  .footer {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 1rem;
    margin-top: auto;
    padding-top: 1.5rem;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
  }

  .source {
    flex-shrink: 0;
    display: grid;
    place-items: center;
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid var(--border);
    border-radius: 50%;
    color: var(--muted);
    transition: color 0.2s ease, border-color 0.2s ease;

    &:hover {
      color: var(--text);
      border-color: var(--text);
    }
  }

  /* MEDIA QUERIES */
  @media (max-width: 640px) {
    .body {
      padding: 1.5rem;
    }
  }
`;
