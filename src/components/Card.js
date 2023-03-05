import React from 'react';

const Card = (props) => {
  return (
    <div onClick={props.onClick} id={props.id} className='card'>
      <p id={props.id}>{props.name}</p>
    </div>
  )
};

export default Card;