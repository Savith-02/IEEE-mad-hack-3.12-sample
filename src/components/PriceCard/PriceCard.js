import React from 'react';
import './PrizeCard.scss';

const PrizeCard = ({ url, amount, label }) => {
  return (
    <div className="prize-card">
      <img src={url} alt={`${label} prize`} className="prize-image" />
      <div className="prize-details">
        <h3>{label}</h3>
        <p>{amount}</p>
      </div>
    </div>
  );
};

export default PrizeCard;
