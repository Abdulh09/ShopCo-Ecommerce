import "./ProductCard.css";
import { Link } from "react-router";
import Rating from "./Rating";

const ProductCard = (props) => {
  return (
    <Link to={`/product/${props.slug}`} className="text-decoration-none">
      <div className="card-wrap">
        <div className="product-img">
          <img src={props.src} alt={props.title} className="w-100" />
        </div>
        <div className="card-detail">
          <h3>{props.title}</h3>
          <Rating rating={props.rating} ratingOutOf={props.ratingOutOf || 5} />
          <p className="price">${props.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
