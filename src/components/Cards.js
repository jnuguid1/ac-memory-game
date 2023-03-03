import React from 'react';
import Card from './Card';

const Cards = (props) => {
  return (
    <div className='cards'>
      {props.cards.map(card => {
        return (
          <Card name={card.name} />
        )
      })}
    </div>
  )
};

export default Cards;