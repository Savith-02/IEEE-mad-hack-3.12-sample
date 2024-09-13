import React from 'react';
import Hero from '../Hero/Hero';
import Intro from '../Intro/Intro';
import './Main.scss';
import { sections } from './../Intro/info';
import hackathonEvents from '../Timeline/events';
import Timeline from '../Timeline/Timeline';

const Main = () => {
  return (
    <div className="main-container">
      <Hero />
      <Intro sections={sections} />
      <Timeline events={hackathonEvents} />
    </div>
  );
};

export default Main;
