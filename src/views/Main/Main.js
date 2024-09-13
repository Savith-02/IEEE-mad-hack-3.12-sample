import React from 'react';
import Hero from '../Hero/Hero';
import Intro from '../Intro/Intro';
import './Main.scss';
import { sections } from './../Intro/info';

const Main = () => {
  return (
    <div className="main-container">
      <Hero />
      <Intro sections={sections} />
    </div>
  );
};

export default Main;
