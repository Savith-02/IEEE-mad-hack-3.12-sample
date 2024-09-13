import React from 'react';
import PrizeCard from './../../components/PriceCard/PriceCard';
import './Prizes.scss';

const Prizes = () => {
  return (
    <section className="prizes">
      <div className="prizes-header">Prizes</div>
      <div className="cups">
        <PrizeCard
          url="assets/images/goldCup.png"
          amount="$1000"
          label="Gold"
        />
        <PrizeCard
          url="assets/images/silverCup.png"
          amount="$500"
          label="Silver"
        />
        <PrizeCard
          url="assets/images/bronzeCup.png"
          amount="$250"
          label="Bronze"
        />
      </div>
    </section>
  );
};

export default Prizes;
