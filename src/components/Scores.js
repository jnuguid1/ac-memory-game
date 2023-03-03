import React from 'react';
import Score from './Score';

const Scores = (props) => {
  return (
    <div className='scores'>
      <Score label='Score' score={props.score} />
      <Score label='High Score' score={props.highScore} />
    </div>
  )
};

export default Scores;