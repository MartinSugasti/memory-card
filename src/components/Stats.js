import { useState, useEffect } from 'react';

function Stats({ highScore, score, gameStarted, timesOut, resetTimer }) {
  const startTime = 10;
  const [timeRemaining, setTimeRemaining] = useState(startTime);

  useEffect(() => {
    if (gameStarted) {
      const timer = setInterval(() => {
        if (timeRemaining === 0) {
          timesOut();
        } else {
          setTimeRemaining((timeRemaining) => timeRemaining - 1);
        }
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  });

  useEffect(() => {
    setTimeRemaining(startTime);
  }, [resetTimer]);

  return (
    <div className="text-center my-4">
      <h3>High Score: {highScore}</h3>
      <h3>Score: {score}</h3>
      <h3>Timer: {timeRemaining}</h3>
    </div>
  );
}

export default Stats;
