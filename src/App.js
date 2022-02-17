import { useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import Cards from './components/Cards';
import items from './components/items';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const cards = items;
  const [clickedCardsIds, setClickedCardsIds] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  // resetTimer has the purpose of notifying Stats to reset the timer when it changes its value, but it doesn't matter its value.
  const [resetTimer, setResetTimer] = useState(false);

  const handleClick = (cardId) => {
    // it may or not be the first click. If it's not GameStarted is already true but it doesn't matter
    setGameStarted(true);

    if (clickedCardsIds.includes(cardId)) {
      gameOver();
    } else {
      if (score + 1 === cards.length) {
        completeGame();
      } else {
        continueGame(cardId);
      }
    }
  };

  const gameOver = () => {
    if (highScore < score) {
      alert(`Game over, but you just set a new high score of ${score}.`);
      setHighScore(score);
    } else {
      alert(`Game over. Your final score is ${score}.`);
    }
    resetGame();
  };

  const completeGame = () => {
    alert('Congratulations! You just remembered all crests!');
    setHighScore(score + 1);
    resetGame();
  };

  const continueGame = (cardId) => {
    setClickedCardsIds([...clickedCardsIds, cardId]);
    setScore(score + 1);
    setResetTimer(!resetTimer);
  };

  const resetGame = () => {
    setClickedCardsIds([]);
    setScore(0);
    setGameStarted(false);
    setResetTimer(!resetTimer);
  };

  const timesOut = () => {
    gameOver();
  };

  return (
    <div>
      <Header />
      <Stats
        highScore={highScore}
        score={score}
        gameStarted={gameStarted}
        timesOut={timesOut}
        resetTimer={resetTimer}
      />
      <Cards cards={cards} handleClick={handleClick} />
    </div>
  );
};

export default App;
