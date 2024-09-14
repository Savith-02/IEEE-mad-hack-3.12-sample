import React, { useEffect, useRef } from 'react';
import './Timeline.scss';

const Timeline = ({ events, id }) => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const timelineItems =
      timelineRef.current.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      timelineItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [events]); // Re-run effect if events change

  return (
    <div className="timeline" ref={timelineRef} id={id}>
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
