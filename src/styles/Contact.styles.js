import styled from 'styled-components';

export const ContactWrapper = styled.section`
  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
    gap: 4rem;
    align-items: start;
  }

  .email {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 2.6vw, 1.875rem);
    font-weight: 600;
    letter-spacing: -0.01em;
    word-break: break-all;
    background-image: var(--gradient);
    background-size: 0% 2px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    padding-bottom: 0.25rem;
    transition: background-size 0.4s var(--ease);

    &:hover {
      background-size: 100% 2px;
    }

    svg {
      flex-shrink: 0;
      color: var(--accent);
    }
  }

  .info {
    list-style: none;
    margin-top: 2.5rem;
    border-top: 1px solid var(--border);

    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.125rem 0;
      border-bottom: 1px solid var(--border);
      color: var(--muted);

      svg {
        flex-shrink: 0;
        color: var(--subtle);
      }

      a:hover {
        color: var(--text);
      }
    }
  }

  .socials {
    display: flex;
    gap: 0.75rem;
    margin-top: 2rem;
    list-style: none;

    a {
      display: grid;
      place-items: center;
      width: 3rem;
      height: 3rem;
      border: 1px solid var(--border);
      border-radius: 50%;
      color: var(--muted);
      transition: color 0.2s ease, border-color 0.2s ease, transform 0.3s var(--ease);

      &:hover {
        color: var(--text);
        border-color: var(--text);
        transform: translateY(-2px);
      }
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: var(--surface);
  }

  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--muted);
  }

  input,
  textarea {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid var(--border);
    border-radius: 0.625rem;
    background: var(--surface-2);
    color: var(--text);
    font: inherit;
    font-size: 0.9375rem;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:focus {
      outline: none;
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-soft);
    }
  }

  textarea {
    resize: vertical;
    min-height: 9rem;
  }

  .submit {
    align-self: flex-start;
    margin-top: 0.5rem;
  }

  /* MEDIA QUERIES */
  @media (max-width: 900px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  }

  @media (max-width: 640px) {
    .form {
      padding: 1.5rem;
    }

    .row {
      grid-template-columns: 1fr;
    }

    .submit {
      align-self: stretch;
    }
  }
`;
