import '../styles/card.css';

const Card = ({ id, name, handleClick }) => {
  return (
    <div
      className="col-6 col-sm-3 col-md-2 d-flex justify-content-center px-1 px-md-2 my-3"
      onClick={() => handleClick(id)}
    >
      <img src={`./images/${name}.png`} className="rounded card shadow-lg" />
    </div>
  );
};

export default Card;
