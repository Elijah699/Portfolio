import React, { useEffect, useState } from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import SocialLinks from './SocialLinks';
import CountUp from './CountUp';
import { profile, stats, expertise } from '../assets/content';

// styles
import { IntroWrapper } from '../styles/Intro.styles';

const RoleRotator = ({ roles }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="role-rotator">
      <span className="sr-only">{roles.join(', ')}</span>
      <span key={index} className="role" aria-hidden="true">
        {roles[index]}
      </span>
    </span>
  );
};

// Each line is "typed" in sequence by CSS, using its index (--i) for the delay.
const CodeCard = () => {
  const stack = expertise.map(({ id, tags }) => ({ key: id, values: tags.slice(0, 2) }));

  const lines = [
    <>
      <span className="c-key">export const</span> <span className="c-var">engineer</span> = {'{'}
    </>,
    <>
      {'  '}name: <span className="c-str">'{profile.name}'</span>,
    </>,
    <>
      {'  '}experience: <span className="c-str">'{profile.yearsOfExperience} years'</span>,
    </>,
    <>{'  '}stack: {'{'}</>,
    ...stack.map(({ key, values }) => (
      <>
        {'    '}
        {key}: [
        {values.map((v, i) => (
          <React.Fragment key={v}>
            <span className="c-str">'{v}'</span>
            {i < values.length - 1 ? ', ' : ''}
          </React.Fragment>
        ))}
        ],
      </>
    )),
    <>{'  '}{'}'},</>,
    <>
      {'  '}ships: <span className="c-bool">true</span>,
    </>,
    <>
      {'}'};<span className="caret" />
    </>,
  ];

  return (
    <div className="code-card" aria-hidden="true">
      <div className="code-card-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        <span className="file">engineer.ts</span>
      </div>
      <pre>
        <code>
          {lines.map((line, i) => (
            <span className="line" key={i} style={{ '--i': i }}>
              {line}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
};

const Intro = () => {
  return (
    <IntroWrapper id="top">
      <div className="glow" aria-hidden="true" />
      <div className="container intro-container">
        <div className="intro-info">
          <p className="eyebrow">
            <span className="pulse" aria-hidden="true" />
            {profile.name} · {profile.yearsOfExperience} years experience
          </p>

          <h1>
            I build fast, accessible products for the{' '}
            <span className="gradient-text">web, mobile</span> and the{' '}
            <span className="gradient-text">APIs</span> behind them.
          </h1>

          <p className="summary">
            <RoleRotator roles={profile.roles} /> — shipping production React
            apps for over five years, now delivering cross-platform mobile apps
            with React Native and backend services with NestJS.
          </p>

          <div className="actions">
            <a className="button button-primary" href="#work">
              View my work <FiArrowRight />
            </a>
            <a
              className="button button-ghost"
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
            >
              View resume <FiArrowUpRight />
            </a>
          </div>

          <div className="meta">
            <SocialLinks className="socials" />
          </div>
        </div>

        <div className="intro-visual">
          <CodeCard />
        </div>
      </div>

      <div className="container">
        <dl className="stats">
          {stats.map(({ value, label }) => (
            <div className="stat" key={label}>
              <dt>{label}</dt>
              <dd>
                <CountUp value={value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </IntroWrapper>
  );
};

export default Intro;
