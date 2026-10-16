import { useState } from "react";
import "./Announcement.css";
import closeIcon from "../assets/close.svg";
export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="announcement-wrap">
      <div className="container">
        <div className="announce-slot d-flex justify-content-center align-items-center gap-4">
          <p>
            Sign up and get 20% off to your first order.
            <a href="#" className="text-white text-decoration-underline">
              Sign Up Now
            </a>
          </p>
          <button
            type="button"
            className="btn p-0"
            aria-label="Dismiss banner"
            onClick={() => setIsVisible(false)}
          >
            <span><img src={closeIcon} alt="" /></span>
          </button>
        </div>
      </div>
    </div>
  );
}
