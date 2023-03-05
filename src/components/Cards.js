import React from 'react';
import Card from './Card';

const Cards = (props) => {
  return (
    <div className='cards'>
      {props.cards.map(card => {
        return (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            onClick={props.onClick}
          />
        )
      })}
    </div>
  )
};

export default Cards;