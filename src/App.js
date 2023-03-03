import './App.css';
import Header from './components/Header';
import Scores from './components/Scores'
import Cards from './components/Cards.js';
import React, {useState} from 'react';

function App() {
  const cardsArray = [
    { name: 'Filbert', },
    { name: 'Flo', },
    { name: 'Peewee', },
    { name: 'Raymond', },
    { name: 'Rudy', },
    { name: 'Tank', },
    { name: 'Wolfgang', },
    { name: 'Yuka', },
    { name: 'Egbert', },
    { name: 'Cleo', },
    { name: 'Ace', },
    { name: 'Octavian', },
  ]

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState(cardsArray)

  return (
    <div className="App">
      <Header />
      <Scores score={score} highScore={highScore} />
      <Cards cards={cards} />
    </div>
  );
}

export default App;
