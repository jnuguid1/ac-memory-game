import './App.css';
import Header from './components/Header';
import Scores from './components/Scores'
import Cards from './components/Cards.js';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

// Card Images
import ace from './assets/ace.webp';
import cleo from './assets/cleo.webp';
import egbert from './assets/egbert.webp';
import filbert from './assets/filbert.webp';
import flo from './assets/flo.webp';
import octavian from './assets/octavian.webp';
import peewee from './assets/peewee.webp';
import raymond from './assets/peewee.webp';
import rudy from './assets/rudy.webp';
import tank from './assets/tank.webp';
import wolfgang from './assets/wolfgang.webp';
import yuka from './assets/yuka.webp';

function App() {
  const cardsArray = [
    { name: 'Filbert', id: uniqid(), image: {filbert} },
    { name: 'Flo', id: uniqid(), image: {flo} },
    { name: 'Peewee', id: uniqid(), image: {peewee} },
    { name: 'Raymond', id: uniqid(), image: {raymond} },
    { name: 'Rudy', id: uniqid(), image: {rudy} },
    { name: 'Tank', id: uniqid(), image: {tank} },
    { name: 'Wolfgang', id: uniqid(), image: {wolfgang} },
    { name: 'Yuka', id: uniqid(), image: {yuka} },
    { name: 'Egbert', id: uniqid(), image: {egbert} },
    { name: 'Cleo', id: uniqid(), image: {cleo} },
    { name: 'Ace', id: uniqid(), image: {ace} },
    { name: 'Octavian', id: uniqid(), image: {octavian} },
  ]

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(cardsArray);
  const [clickedCards, setClickedCards] = useState([]);

  useEffect(() => {
    setCards(randomize(cards));
  }, []);

  const randomize = (array) => {
    const newArray = array.slice(0);
    for (let i = newArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    };
    return newArray;
  };

  const handleClick = (event) => {
    const cardId = event.target.getAttribute('id');
    if (clickedCards.find(c => c.id === cardId) !== undefined) {
      if (highScore < score) {
        setHighScore(score);
      }
      setScore(0);
      setClickedCards([]);
    } else {
      const card = cards.find(c => c.id === cardId);
      setClickedCards(clickedCards.concat(card));
      setScore(score + 1);
    }
    setCards(randomize(cards));
  };

  return (
    <div className="App">
      <Header />
      <Scores score={score} highScore={highScore} />
      <Cards cards={cards} onClick={handleClick} />
    </div>
  );
}

export default App;
