import React from 'react';

const Score = (props) => {
  return (
    <div className='score'>
      <h2>{props.label}: {props.score}</h2>
    </div>
  );
};

export default Score;