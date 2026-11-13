import "./TestimonialCard.css";
// import starFull from "../assets/Star.svg";
import Rating from "./Rating";

const TestimonialCard = ({
  title,
  tickSrc,
  reviewText,
  postDate,
  rating,
  ratingOutOf,
  showRatingText,
}) => {
  return (
    <div className="testimonial-card">
      <Rating
        rating={rating}
        ratingOutOf={ratingOutOf || 5}
        showText={showRatingText}
      />
      <h3 className="d-flex align-items-center gap-1">
        {title}
        <span>
          <img src={tickSrc} alt="Verified customer" />
        </span>
      </h3>
      <p>{reviewText}</p>
      <span className="post-date">{postDate}</span>
    </div>
  );
};

export default TestimonialCard;
