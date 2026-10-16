import "./TestimonialCard.css";
import starFull from "../assets/Star.svg";

const TestimonialCard = ({ title, tickSrc, reviewText }) => {
  return (
    <div className="testimonial-card">
      <div className="rating">
        <div className="ratingicon d-flex gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <img key={index} src={starFull} alt="" />
          ))}
        </div>
      </div>
      <h3 className="d-flex align-items-center gap-1">
        {title}
        <span>
          <img src={tickSrc} alt="Verified customer" />
        </span>
      </h3>
      <p>{reviewText}</p>
    </div>
  );
};

export default TestimonialCard;
