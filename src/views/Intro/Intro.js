import React from 'react';
import './Intro.scss';

const Intro = ({ sections, id }) => {
  return (
    <div className="intro-container" id={id}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`intro-row ${index % 2 === 0 ? 'normal' : 'reverse'}`}
        >
          <div className="intro-image">
            <img src={section.url} alt={section.title} />
          </div>
          <div className="intro-text">
            <h2>{section.title}</h2>
            <p>{section.textContent}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Intro;
