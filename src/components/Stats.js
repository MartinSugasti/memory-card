function Stats({ highScore, score }) {
  return (
    <div className="text-center my-4">
      <h3>High Score: {highScore}</h3>
      <h3>Score: {score}</h3>
    </div>
  );
}

export default Stats;
