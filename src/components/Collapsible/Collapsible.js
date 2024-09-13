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
      </button>
      {isOpen && <div className="collapsible-content">{answer}</div>}
    </div>
  );
};

export default Collapsible;
