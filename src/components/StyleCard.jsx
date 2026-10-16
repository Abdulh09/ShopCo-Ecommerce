import "./StyleCard.css";

const StyleCard = ({ src, title }) => {
  return (
    <div className="style-card">
      <div className="cardImage">
        <img src={src} className="w-100" alt={title} />
      </div>
      <div className="overlay">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default StyleCard;
