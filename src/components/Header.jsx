import React, { useState, useEffect } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { MenuAlt4Icon, XIcon } from '@heroicons/react/outline';
import Logo from './Logo';
import { profile } from '../assets/content';

// styles
import { HeaderWrapper } from '../styles/Header.styles';

const links = [
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('');

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    if (!open) return;

    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // highlight the nav link for the section currently in view
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );

    links.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <HeaderWrapper className={scrolled || open ? 'scrolled' : ''}>
      <div className="container header-container">
        <a className="brand" href="#top" onClick={closeMenu} aria-label={`${profile.name} — home`}>
          <Logo />
          <span>{profile.handle}</span>
        </a>

        <nav
          id="primary-navigation"
          className={open ? 'header-nav open' : 'header-nav'}
          aria-label="Primary"
        >
          <ul>
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? 'active' : ''}
                  aria-current={activeId === id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="button button-ghost resume"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <FiArrowUpRight />
          </a>
        </nav>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          {open ? <XIcon /> : <MenuAlt4Icon />}
        </button>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
