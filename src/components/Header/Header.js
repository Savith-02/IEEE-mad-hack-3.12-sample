import './Header.scss';
import React, { useState } from 'react';

const tabs = [
  { text: 'Home', url: '/', isActive: true },
  { text: 'About', url: '/student-requests', isActive: false },
  { text: 'Timeline', url: '/create-assistant', isActive: false },
  { text: 'Prizes', url: '/create-assistant', isActive: false },
  { text: 'FAQ', url: '/reg-staff', isActive: false },
  { text: 'Contact us', url: '/reg-staff', isActive: false },
  { text: 'Task', url: '/reg-staff', isActive: false },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="main-header">
      <div className="logo-container">
        <img src="/assets/icons/icon.png" alt="icon" className="logo" />
      </div>
      <button className="nav-toggler" onClick={toggleNav}>
        ☰
      </button>
      <div className={`tabs ${isNavOpen ? 'open' : ''}`}>
        <span className="tab-buttons">
          <ul>
            {tabs.map((link, index) => (
              <li key={index}>
                <a href={link.url} className={link.isActive ? 'active' : ''}>
                  {link.text.toLocaleUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </span>
      </div>
    </header>
  );
};

export default Header;
