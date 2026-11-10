import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { socials } from '../assets/content';
import { ReactComponent as DevToIcon } from '../assets/images/devto.svg';

const icons = {
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Twitter: FiTwitter,
  WhatsApp: FaWhatsapp,
  DevTo: DevToIcon,
};

const SocialLinks = ({ className = '', size = 18 }) => (
  <ul className={className}>
    {socials.map(({ name, url }) => {
      const Icon = icons[name];
      return (
        <li key={name}>
          <a href={url} target="_blank" rel="noreferrer" aria-label={name} title={name}>
            {name === 'DevTo' ? <Icon width={28} height={28} /> : <Icon size={size} />}
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;
