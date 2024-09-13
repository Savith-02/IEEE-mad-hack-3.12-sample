import React from 'react';
import { Link } from 'react-router-dom';
import './UnderDev.scss';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">Page Under Development</h1>
      <p className="not-found-message">
        The page you are looking for is currently under development. Please come
        back later.
      </p>
      <Link to="/" className="home-button">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
