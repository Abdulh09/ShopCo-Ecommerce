import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode } from "swiper/modules";
import SanityImage from "./SanityImage";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./ProductGallery.css";

export default function ProductGallery({ images = [] }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="product-gallery-wrap d-flex flex-column-reverse flex-lg-row ">
      {/* Thumbnails are horizontal below 992px and vertical at desktop width. */}
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={3}
        spaceBetween={14}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        id="gallery-thumbs"
        breakpoints={{
          0: { direction: "horizontal" },
          992: { direction: "vertical" },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide key={image._key || image._id || i}>
            <SanityImage
              image={image}
              alt={`Product thumbnail ${i + 1}`}
              widths={[200, 400]}
              sizes="152px"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right: main image */}
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Thumbs]}
        id="gallery-main"
      >
        {images.map((image, i) => (
          <SwiperSlide key={image._key || image._id || i}>
            <SanityImage
              image={image}
              alt={`Product image ${i + 1}`}
              widths={[600, 1000, 1400]}
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}