import React, { useEffect, useState } from 'react';
import './Hero.scss';

const sentences = [
  'Welcome to the future of innovation.',
  'Join us in the journey of creativity.',
  'Empowering the next generation of tech leaders.',
];

const Hero = () => {
  const [currentSentence, setCurrentSentence] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        if (charIndex > 0) {
          setCurrentSentence((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      } else {
        if (charIndex < sentences[sentenceIndex].length) {
          setCurrentSentence(
            (prev) => prev + sentences[sentenceIndex][charIndex]
          );
          setCharIndex((prev) => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        }
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [charIndex, isDeleting, sentenceIndex]);

  return (
    <div className="hero-container">
      <video autoPlay loop muted className="background-video">
        <source src="/assets/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <span className="top">By IEEE studentBranch of UCSC</span>
      <span className="middle">MAD HACK 3.0</span>
      <span className="bottom">
        {currentSentence}
        <span className="cursor">|</span>
      </span>
    </div>
  );
};

export default Hero;
