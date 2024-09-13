import React, { useState } from 'react';
import './Collapsible.scss';

const Collapsible = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapsible">
      <button className="collapsible-header" onClick={toggleCollapsible}>
        {question}
        {/* <i className={`fas fa-chevron-down ${isOpen ? 'rotate' : ''}`}></i> */}
        {isOpen ? (
          <i className="fas fa-chevron-up"></i>
        ) : (
          <i className="fas fa-chevron-down"></i>
        )}
      </button>
      {isOpen && <div className="collapsible-content">{answer}</div>}
    </div>
  );
};

export default Collapsible;
