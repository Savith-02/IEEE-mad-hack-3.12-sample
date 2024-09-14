import './Header.scss';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
  { text: 'Home', url: 'home', isActive: true },
  { text: 'About', url: 'about', isActive: false },
  { text: 'Timeline', url: 'timeline', isActive: false },
  { text: 'Prizes', url: 'prizes', isActive: false },
  { text: 'FAQ', url: 'faq', isActive: false },
  { text: 'Contact us', url: '/contact', isActive: false, underDev: true },
  { text: 'Task', url: '/task', isActive: false, underDev: true },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleScrollOrRedirect = (link) => {
    if (link.underDev) {
      navigate(link.url);
    } else {
      if (location.pathname !== '/') {
        navigate('/', { state: { scrollTo: link.url } });
      } else {
        const section = document.getElementById(link.url);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  React.useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const section = document.getElementById(location.state.scrollTo);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

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
                <a
                  href={`#${link.url}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollOrRedirect(link);
                  }}
                  className={link.isActive ? 'active' : ''}
                >
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
