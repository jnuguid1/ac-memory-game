import React from 'react';

const Score = (props) => {
  return (
    <div className='score'>
      <h2>{props.label}</h2>
      <p>{props.score}</p>
    </div>
  );
};

export default Score;