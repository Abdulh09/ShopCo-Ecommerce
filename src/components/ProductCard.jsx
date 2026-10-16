import "./ProductCard.css";
import { Link } from "react-router";
import starFull from "../assets/Star.svg";
import starHalf from "../assets/Star-half.svg";

const buildStars = (rating, outOf = 5) => {
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

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.slug}`} className="text-decoration-none">
      <div className="card-wrap">
        <div className="product-img">
          <img src={props.src} alt={props.title} className="w-100" />
        </div>
        <div className="card-detail">
          <h3>{props.title}</h3>
          <div className="rating">
            <div className="ratingicon d-flex">
              {buildStars(props.rating, props.ratingOutOf).map((star, index) => (
                <img key={index} src={star} alt="" />
              ))}
            </div>
            <span className="rating-text">
              {props.rating}/{props.ratingOutOf || 5}
            </span>
          </div>
          <p className="price">${props.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
