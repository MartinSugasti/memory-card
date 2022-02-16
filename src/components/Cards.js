import Card from './Card';

const Cards = ({ cards, handleClick }) => {
  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  return (
    <div className="row justify-content-center no-gutters">
      {shuffle(cards).map((card) => (
        <Card key={card.id} id={card.id} name={card.name} handleClick={handleClick} />
      ))}
    </div>
  );
};

export default Cards;
