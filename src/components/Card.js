import React from 'react';

const Card = (props) => {
  const card = props.card;
  return (
    <div onClick={props.onClick} id={props.id} className='card'>
      <img 
        src={require(`../assets/${card.name.toLowerCase()}.png`)}
        alt={card.name}
        id={props.id}
        height={220}
        width={220}
      />
      <p id={props.id}>{card.name}</p>
    </div>
  )
};

export default Card;