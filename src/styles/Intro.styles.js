import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const roleIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.4em);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: none;
    filter: none;
  }
`;

const typeLine = keyframes`
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
`;

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const drift = keyframes`
  from {
    transform: translate(0, 0) scale(1);
  }
  to {
    transform: translate(-8rem, 6rem) scale(1.15);
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(183, 123, 255, 0.6);
  }
  70% {
    box-shadow: 0 0 0 0.5rem rgba(183, 123, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(183, 123, 255, 0);
  }
`;

export const IntroWrapper = styled.section`
  position: relative;
  padding: calc(var(--header-height) + 5rem) 0 4rem;
  overflow: hidden;

  // faint grid that fades out towards the edges
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 4rem 4rem;
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%);
    mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, #000 30%, transparent 100%);
    opacity: 0.5;
    pointer-events: none;
  }

  .glow {
    position: absolute;
    top: -12rem;
    right: -10rem;
    width: 40rem;
    height: 40rem;
    background: radial-gradient(circle, rgba(183, 123, 255, 0.22), transparent 65%);
    filter: blur(20px);
    pointer-events: none;
    animation: ${drift} 16s ease-in-out infinite alternate;
  }

  .intro-container {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    align-items: center;
    gap: 4rem;
  }

  .intro-info > * {
    animation: ${fadeUp} 0.9s var(--ease) both;
  }

  .intro-info > *:nth-child(2) {
    animation-delay: 0.08s;
  }
  .intro-info > *:nth-child(3) {
    animation-delay: 0.16s;
  }
  .intro-info > *:nth-child(4) {
    animation-delay: 0.24s;
  }
  .intro-info > *:nth-child(5) {
    animation-delay: 0.32s;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.375rem 0.875rem 0.375rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.02);
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--muted);

    .pulse {
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background: var(--accent);
      animation: ${pulse} 2s infinite;
    }
  }

  h1 {
    margin-top: 1.75rem;
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5.5vw, 4.25rem);
    font-weight: 600;
    line-height: 1.04;
    letter-spacing: -0.035em;
  }

  .summary {
    margin-top: 1.75rem;
    max-width: 36rem;
    color: var(--muted);
    font-size: 1.125rem;
    line-height: 1.7;
  }

  .role-rotator {
    color: var(--text);
    font-weight: 500;
  }

  .role {
    display: inline-block;
    animation: ${roleIn} 0.6s var(--ease) both;
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 2.5rem;
  }

  .meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2.5rem;
    color: var(--muted);
    font-size: 0.875rem;

    .location {
      display: inline-flex;
      align-items: center;
      gap: 0.375rem;
    }

    .socials {
      display: flex;
      gap: 0.25rem;
      list-style: none;
      padding-left: 1.5rem;
      border-left: 1px solid var(--border);

      a {
        display: grid;
        place-items: center;
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        transition: color 0.2s ease, background-color 0.2s ease;

        &:hover {
          color: var(--text);
          background: var(--surface-2);
        }
      }
    }
  }

  .intro-visual {
    animation: ${fadeUp} 1s var(--ease) 0.3s both;
  }

  .code-card {
    position: relative;
    border: 1px solid var(--border);
    border-radius: var(--radius);
    background: linear-gradient(180deg, var(--surface-2), var(--surface));
    box-shadow: 0 30px 80px -30px rgba(0, 0, 0, 0.8),
      0 0 0 1px rgba(183, 123, 255, 0.05);
    transform: perspective(1200px) rotateY(-6deg) rotateX(2deg);
    transition: transform 0.6s var(--ease);

    &:hover {
      transform: none;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -1px;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(140deg, rgba(183, 123, 255, 0.5), transparent 40%, transparent 60%, rgba(255, 122, 217, 0.35));
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }
  }

  .code-card-bar {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.875rem 1rem;
    border-bottom: 1px solid var(--border);

    .dot {
      width: 0.625rem;
      height: 0.625rem;
      border-radius: 50%;
      background: var(--border-strong);
    }

    .file {
      margin-left: 0.75rem;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: var(--subtle);
    }
  }

  pre {
    padding: 1.5rem 1.25rem;
    overflow-x: auto;
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    line-height: 1.9;
    color: var(--muted);

    .line {
      display: block;
      clip-path: inset(0 100% 0 0);
      animation: ${typeLine} 0.45s steps(24, end) forwards;
      animation-delay: calc(0.9s + var(--i) * 0.28s);
    }

    .caret {
      display: inline-block;
      width: 0.5em;
      height: 1.1em;
      margin-left: 0.25rem;
      vertical-align: text-bottom;
      background: var(--accent);
      animation: ${blink} 1s steps(1) infinite;
    }
  }

  .c-key {
    color: var(--accent);
  }
  .c-var {
    color: var(--text);
  }
  .c-str {
    color: #8be9c6;
  }
  .c-bool {
    color: var(--accent-2);
  }

  .stats {
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 6rem;
    border-top: 1px solid var(--border);

    .stat {
      display: flex;
      flex-direction: column-reverse;
      gap: 0.25rem;
      padding: 1.75rem 1.5rem 0 0;

      & + .stat {
        padding-left: 1.5rem;
        border-left: 1px solid var(--border);
      }
    }

    dd {
      font-family: var(--font-display);
      font-size: 2.25rem;
      font-weight: 600;
      letter-spacing: -0.02em;
    }

    dt {
      color: var(--muted);
      font-size: 0.875rem;
    }
  }

  /* MEDIA QUERIES */
  @media (max-width: 960px) {
    .intro-container {
      grid-template-columns: 1fr;
      gap: 3.5rem;
    }

    .code-card {
      transform: none;
      max-width: 34rem;
    }
  }

  @media (max-width: 640px) {
    padding-top: calc(var(--header-height) + 3rem);

    .summary {
      font-size: 1rem;
    }

    .actions .button {
      flex: 1 1 100%;
    }

    .meta .socials {
      padding-left: 0;
      border-left: 0;
    }

    pre {
      font-size: 0.75rem;
    }

    .stats {
      grid-template-columns: 1fr;
      margin-top: 4rem;

      .stat,
      .stat + .stat {
        padding: 1.25rem 0;
        border-left: 0;
        border-bottom: 1px solid var(--border);
      }
    }
  }
`;
