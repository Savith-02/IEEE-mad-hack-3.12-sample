import React from 'react';
import Collapsible from './../../components/Collapsible/Collapsible';
import './FAQ.scss';

const FAQ = ({ faqs }) => {
  return (
    <section className="faq">
      {faqs.map((faq, index) => (
        <Collapsible key={index} question={faq.Q} answer={faq.Ans} />
      ))}
    </section>
  );
};

export default FAQ;
