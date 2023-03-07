import React from 'react';
import leaf from '../assets/leaf.svg';

const Header = () => {
  return(
    <div className='header'>
      <h1>Animal Crossing Memory Game</h1>
      <img
       src={leaf} 
       alt='animal crossing logo'
       height={80}
       width={80}
      />
      <p>Score points by clicking cards you have not clicked yet.</p>
    </div>
  )
};

export default Header;