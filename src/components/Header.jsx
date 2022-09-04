import React, { useState, useEffect } from 'react';

// icons
import logo from '../assets/images/p-logo.png';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';


// styles
import { HeaderWrapper } from '../styles/Header.styles';




const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const getBodyElem = document.getElementById('bodyElem');
    if (active === true) {
      getBodyElem.style.overflow = 'hidden';
    } else {
      getBodyElem.style.overflow = 'visible';
    }

  }, [active])

  const closeModal = () => {
    setActive(!active);
  }

  const icon = active ? <XIcon /> : <MenuAlt1Icon />;

  return (
    <HeaderWrapper>
      <div className="header-container">
        <a className="header-brand" href="/">
          <img src={logo} alt="logo" />
        </a>

        <button className="icon" onClick={() => {
          setActive(!active)
        }}>
          {icon}
        </button>

        <div className={active ? 'header-menu active' : 'header-menu'}>
          <ul>
            <li onClick={closeModal}>
              <a href="#capability">Capabilities</a>
            </li>
            <li onClick={closeModal}>
              <a href="#work">Work</a>
            </li>
            <li onClick={closeModal}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
