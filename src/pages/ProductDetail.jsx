import { useState } from "react";
import { Link, useLoaderData } from "react-router";
import { toCardProps } from "../lib/api";
import ProductGallery from "../components/ProductGallery";
import ProductCard from "../components/ProductCard";
import Rating from "../components/Rating";

import "./ProductDetail.css";
import arrowRight from "../assets/arrow-right.svg";
import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";
import check from "../assets/check.svg";
import tickIcon from "../assets/tick.svg";
import filterIcon from "../assets/filter-icon.svg";

import PrimaryBtn from "../components/PrimaryBtn";
import TestimonialCard from "../components/TestimonialCard";

const SIZE_ORDER = ["Small", "Medium", "Large", "Extra Large"];

const CATEGORY_LABELS = {
  men: "Men",
  women: "Women",
  accessories: "Accessories",
  "new-arrivals": "New Arrivals",
  sale: "Sale",
};

const ProductDetail = () => {
  const { product, related } = useLoaderData();

  const colors = product.colors ?? [];
  const sizes = [...(product.sizes ?? [])].sort(
    (a, b) => SIZE_ORDER.indexOf(a) - SIZE_ORDER.indexOf(b),
  );

  const [selectedColor, setSelectedColor] = useState(colors[0] ?? null);
  const [selectedSize, setSelectedSize] = useState(sizes[0] ?? null);
  const [quantity, setQuantity] = useState(1);

  const baseImages = product.gallery?.length
    ? product.gallery
    : product.image
      ? [product.image]
      : [];

  const images = selectedColor?.images?.length ? selectedColor.images : baseImages;

  const testimonials = [
    {
      id: "1",
      title: "Samantha D.",
      rating: 4.5,
      reviewText: `"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."`,
      postDate: "Posted on August 14, 2023",
    },
    {
      id: "2",
      title: "Alex M.",
      rating: 4,
      reviewText: `"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."`,
      postDate: "Posted on August 15, 2023",
    },
    {
      id: "3",
      title: "Ethan R.",
      rating: 3.5,
      reviewText: `"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."`,
      postDate: "Posted on August 16, 2023",
    },
    {
      id: "4",
      title: "Olivia P.",
      rating: 4,
      reviewText: `"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."`,
      postDate: "Posted on August 17, 2023",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="breadcrumb-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link className="breadcrumb-link" to="/">
                  Home
                  <span>
                    <img className="d-block" src={arrowRight} alt="arrow right" />
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="breadcrumb-link" to="/">
                  Shop
                  <span>
                    <img className="d-block" src={arrowRight} alt="arrow right" />
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item">
                <Link className="breadcrumb-link" to="/">
                  {CATEGORY_LABELS[product.category] ?? product.category}
                  <span>
                    <img className="d-block" src={arrowRight} alt="arrow right" />
                  </span>
                </Link>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                <span className="breadcrumb-link active">{product.name}</span>
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <section className="product-detail-wrap">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row gap-4">
            <div className="left">
              <ProductGallery key={selectedColor?.name ?? "base"} images={images} />
            </div>
            <div className="right">
              <div className="product-detail">
                <h2>{product.name}</h2>
                <Rating rating={product.rating ?? 0} />
                <div className="product-price">
                  ${product.price}
                  {product.compareAtPrice > product.price && (
                    <span className="compare-price">${product.compareAtPrice}</span>
                  )}
                </div>
                <p>{product.description}</p>
              </div>
              <div className="divider"></div>
              {colors.length > 0 && (
                <div className="product-color">
                  <h3>Select Colors</h3>
                  <div className="d-flex gap-3">
                    {colors.map((c) => (
                      <button
                        key={c.name}
                        type="button"
                        aria-label={c.name}
                        title={c.name}
                        className={`color-swatch ${selectedColor?.name === c.name ? "active" : ""}`}
                        style={{ backgroundColor: c.hex }}
                        onClick={() => setSelectedColor(c)}
                      >
                        <span className="icon d-none">
                          <img src={check} className="d-block mx-auto" alt="Selected" />
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="divider"></div>
              {sizes.length > 0 && (
                <div className="product-size">
                  <h3>Select Size</h3>
                  <div className="d-flex gap-2">
                    {sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        className={`btn-secondary ${selectedSize === s ? "active" : ""}`}
                        onClick={() => setSelectedSize(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="divider"></div>
              <div className="product-actions">
                <div className="quantity-control" role="group" aria-label="Quantity">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    disabled={quantity <= 1}
                    onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                  >
                    <span aria-hidden="true">
                      <img src={minus} alt="Decrease quantity" />
                    </span>
                  </button>
                  <output aria-live="polite">{quantity}</output>
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((current) => current + 1)}
                  >
                    <span aria-hidden="true">
                      <img src={plus} alt="Increase quantity" />
                    </span>
                  </button>
                </div>
                <PrimaryBtn btnText="Add to Cart" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="other-info">
        <div className="container">
          <ul className="nav nav-tabs justify-content-between" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link "
                id="product-details-tab"
                data-bs-toggle="tab"
                data-bs-target="#product-details"
                type="button"
                role="tab"
                aria-controls="product-details"
                aria-selected="true"
              >
                Product Details
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="rating-reviews-tab"
                data-bs-toggle="tab"
                data-bs-target="#rating-reviews"
                type="button"
                role="tab"
                aria-controls="rating-reviews"
                aria-selected="false"
              >
                Rating & Reviews
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="faq-tab"
                data-bs-toggle="tab"
                data-bs-target="#faq"
                type="button"
                role="tab"
                aria-controls="faq"
                aria-selected="false"
              >
                FAQ
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade "
              id="product-details"
              role="tabpanel"
              aria-labelledby="product-details"
              tabIndex="0"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error unde repellat dolore
              odio commodi fugit tempora quaerat obcaecati magnam reprehenderit provident veniam
              esse rerum at itaque quam cumque, non atque? Quam ea facere enim ipsa animi
              perspiciatis nesciunt ut! Doloribus quasi nemo nihil ab temporibus ratione illum
              quibusdam voluptatibus porro.
            </div>
            <div
              className="tab-pane fade show active"
              id="rating-reviews"
              role="tabpanel"
              aria-labelledby="rating-reviews-tab"
              tabIndex="0"
            >
              <div className="content-header d-flex justify-content-between align-items-center">
                <h3>
                  All Reviews <span>(451)</span>
                </h3>
                <div className="controls-action d-flex align-items-center gap-2">
                  <div className="filter-btn btn">
                    <span>
                      <img src={filterIcon} className="d-block" alt="" />
                    </span>
                  </div>
                  <div className="sort-dropdown d-none d-lg-block">
                    <div className="sort-select">
                      <select className="form-select" aria-label="Sort reviews">
                        <option value="most-recent">Latest</option>
                        <option value="highest-rated">Highest Rated</option>
                      </select>
                    </div>
                  </div>
                  <div className="write-review">
                    <PrimaryBtn btnText="Write a Review" />
                  </div>
                </div>
              </div>
              <div className="row row-gap-3">
                {testimonials.map(({ id, title, reviewText, postDate, rating }) => (
                  <div key={id} className="col-lg-6">
                    <TestimonialCard
                      title={title}
                      tickSrc={tickIcon}
                      reviewText={reviewText}
                      postDate={postDate}
                      rating={rating}
                      showRatingText={false}
                    />
                  </div>
                ))}
              </div>
              <div className="viewBtn text-center">
                <button className="btn btn-secondary">Load More Reviews</button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="faq"
              role="tabpanel"
              aria-labelledby="faq-tab"
              tabIndex="0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia illo animi quidem
              dolorem voluptatum iusto ex cupiditate laboriosam ipsa, eos praesentium blanditiis
              corrupti deserunt explicabo, accusantium perferendis, beatae dolorum tempora obcaecati
              dicta sapiente minima laudantium iste. Exercitationem maxime quibusdam sapiente!
            </div>
          </div>
        </div>
      </section>
      {related.length > 0 && (
        <section className="related-products">
          <div className="container">
            <h2 className="text-center">You might also like</h2>
            <div className="row row-gap-4">
              {related.map((item) => (
                <div key={item._id} className="col-xl-3 col-lg-4 col-sm-6">
                  <ProductCard {...toCardProps(item)} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetail;
