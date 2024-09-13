import React from 'react';
import './Timeline.scss';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            <p>{event.text}</p>
            <span>{event.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
