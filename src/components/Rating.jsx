import "./Rating.css";
import starFull from "../assets/Star.svg";
import starHalf from "../assets/Star-half.svg";

const buildStars = (rating = 0, outOf = 5) => {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const roundUp = rating % 1 >= 0.75;
  const totalFull = roundUp ? fullStars + 1 : fullStars;

  const stars = [];
  for (let i = 0; i < outOf; i++) {
    if (i < totalFull) stars.push(starFull);
    else if (i === totalFull && hasHalf) stars.push(starHalf);
  }
  return stars;
};

const Rating = ({ rating = 0, ratingOutOf = 5, showText = true }) => (
  <div className="rating">
    <div className="ratingicon d-flex">
      {buildStars(rating, ratingOutOf).map((star, index) => (
        <img key={index} src={star} alt="" />
      ))}
    </div>
    {showText && <span className="rating-text">{rating}/{ratingOutOf}</span>}
  </div>
);

export default Rating;