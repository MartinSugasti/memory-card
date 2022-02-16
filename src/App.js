import { useState } from 'react';
import Header from './components/Header';
import Stats from './components/Stats';
import Cards from './components/Cards';
import items from './components/items';

const App = () => {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards] = useState(items);
  const [clickedCardsIds, setClickedCardsIds] = useState([]);

  const handleClick = (cardId) => {
    if (clickedCardsIds.includes(cardId)) {
      if (highScore < score) {
        alert(`Game over, but you just set a new high score of ${score}.`);
        setHighScore(score);
      } else {
        alert(`Game over. Your final score is ${score}.`);
      }
      setClickedCardsIds([]);
      setScore(0);
    } else {
      if (score + 1 === cards.length) {
        alert('Congratulations! You just remembered all crests!');
        setHighScore(score + 1);
        setClickedCardsIds([]);
        setScore(0);
      } else {
        setClickedCardsIds([...clickedCardsIds, cardId]);
        setScore(score + 1);
      }
    }
  };

  return (
    <div>
      <Header />
      <Stats highScore={highScore} score={score} />
      <Cards cards={cards} handleClick={handleClick} />
    </div>
  );
};

export default App;
