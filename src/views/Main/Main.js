import React from 'react';
import Hero from '../Hero/Hero';
import Intro from '../Intro/Intro';
import './Main.scss';
import { sections } from './../Intro/info';
import hackathonEvents from '../Timeline/events';
import Timeline from '../Timeline/Timeline';
import Prizes from '../Prizes/Prizes';
import FAQ from '../FAQ/FAQ';
import { faqs } from '../FAQ/data';

const Main = () => {
  return (
    <div className="main-container">
      <Hero id="home" />
      <Intro sections={sections} id="about" />
      <Timeline events={hackathonEvents} id="timeline" />
      <Prizes id="prizes" />
      <FAQ faqs={faqs} id="faq" />
    </div>
  );
};

export default Main;
