import React from 'react';
import Collapsible from './../../components/Collapsible/Collapsible';
import './FAQ.scss';

const FAQ = ({ faqs, id }) => {
  return (
    <section className="faq" id={id}>
      {faqs.map((faq, index) => (
        <Collapsible key={index} question={faq.Q} answer={faq.Ans} />
      ))}
    </section>
  );
};

export default FAQ;
