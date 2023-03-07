import './App.css';
import Header from './components/Header';
import Scores from './components/Scores'
import Cards from './components/Cards.js';
import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';

function App() {
  const cardsArray = [
    { name: 'Filbert', id: uniqid(), },
    { name: 'Flo', id: uniqid(),  },
    { name: 'Peewee', id: uniqid(), },
    { name: 'Raymond', id: uniqid(), },
    { name: 'Rudy', id: uniqid(), },
    { name: 'Tank', id: uniqid(),  },
    { name: 'Wolfgang', id: uniqid(),  },
    { name: 'Yuka', id: uniqid(), },
    { name: 'Egbert', id: uniqid(), },
    { name: 'Cleo', id: uniqid(), },
    { name: 'Ace', id: uniqid(), },
    { name: 'Octavian', id: uniqid(), },
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
