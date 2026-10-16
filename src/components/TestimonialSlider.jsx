import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "./TestimonialCard";
import "./TestimonialSlider.css";
import tickIcon from "../assets/tick.svg";

const testimonials = [
  {
    id: "sarah-m",
    title: "Sarah M.",
    reviewText: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    id: "alex-k",
    title: "Alex K.",
    reviewText: `"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”`,
  },
  {
    id: "james-l",
    title: "James L.",
    reviewText: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
  {
    id: "mooen",
    title: "Mooen",
    reviewText: `"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”`,
  },
  {
    id: "sarah-m-2",
    title: "Sarah M.",
    reviewText: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    id: "sarah-m-5",
    title: "Sarah M.",
    reviewText: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    id: "sarah-m-52",
    title: "Sarah M.",
    reviewText: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
  {
    id: "sarah-m-12",
    title: "Sarah M.",
    reviewText: `"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”`,
  },
];

export default function TestimonialSlider() {
  return (
    <div className="slider-container">
      <Swiper
        id="testimonialSlider"
        modules={[Navigation, Autoplay]}
        navigation={{ enabled: false }}
        loop={true}
        initialSlide={1}
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        breakpoints={{
          768: {
            slidesPerView: 2,
            navigation: {
              enabled: true,
            },
            autoplay: false,
          },
          992: {
            slidesPerView: 2.8,
            navigation: {
              enabled: true,
            },
            autoplay: false,
          },
          1200: {
            slidesPerView: 3.8,
            navigation: {
              enabled: true,
            },
            autoplay: false,
          },
        }}
      >
        {testimonials.map(({ id, title, reviewText }) => (
          <SwiperSlide key={id}>
            <TestimonialCard title={title} tickSrc={tickIcon} reviewText={reviewText} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
