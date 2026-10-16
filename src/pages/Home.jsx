import "./Home.css";
import { useLoaderData } from "react-router";
import { toCardProps } from "../lib/api";

import Hero from "../components/Hero";
import versace from "../assets/versace-logo.svg";
import zara from "../assets/zara-logo.svg";
import gucci from "../assets/gucci-logo.svg";
import prada from "../assets/prada-logo.svg";
import calvinKlein from "../assets/ck-logo.svg";
// import NewArrival1 from "../assets/new-arrival1.png";
import dressCasual from "../assets/dress-casual.png";
import dressFormal from "../assets/dress-formal.png";
import dressParty from "../assets/dress-party.png";
import dressGym from "../assets/dress-gym.png";

import ProductCard from "../components/ProductCard";
import SecondaryBtn from "../components/SecondaryBtn";
import StyleCard from "../components/StyleCard";
import TestimonialsSlider from "../components/TestimonialSlider";

const Home = () => {
   const { newArrivals,topSelling  } = useLoaderData();
  return (
    <>
      <Hero />
      <div className="brand-wrap">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around gap-4">
            <div className="brand-logo">
              <img src={versace} alt="versace" />
            </div>
            <div className="brand-logo">
              <img src={zara} alt="zara" />
            </div>
            <div className="brand-logo">
              <img src={gucci} alt="gucci" />
            </div>
            <div className="brand-logo">
              <img src={prada} alt="prada" />
            </div>
            <div className="brand-logo">
              <img src={calvinKlein} alt="calvinKlein" />
            </div>
          </div>
        </div>
      </div>
      <section className="new-arrival">
        <div className="container">
          <h2 className="text-center">NEW ARRIVALS</h2>
          <div className="row row-gap-4">
           {newArrivals.map((p) => (
              <div key={p._id} className="col-xl-3 col-lg-4 col-sm-6">
                <ProductCard {...toCardProps(p)} />
              </div>
            ))}
          </div>
          <div className="viewBtn text-center">
            <SecondaryBtn btnText="View All" />
          </div>
        </div>
      </section>
      <section className="top-selling">
        <div className="container">
          <h2 className="text-center">TOP SELLING</h2>
          <div className="row row-gap-4">
           {topSelling.map((p) => (
              <div key={p._id} className="col-xl-3 col-lg-4 col-sm-6">
                <ProductCard {...toCardProps(p)} />
              </div>
            ))}
          </div>
          <div className="viewBtn text-center">
            <SecondaryBtn btnText="View All" />
          </div>
        </div>
      </section>
      <section className="dress-style-wrap">
        <div className="container">
          <div className="dress-style">
            <h2 className="text-center">BROWSE BY DRESS STYLE</h2>
            <div className="row row-gap-4">
              <div className="col-lg-5">
                <StyleCard src={dressCasual} title="Casual" />
              </div>
              <div className="col-lg-7">
                <StyleCard src={dressFormal} title="Formal" />
              </div>
              <div className="col-lg-7">
                <StyleCard src={dressParty} title="Party" />
              </div>
              <div className="col-lg-5">
                <StyleCard src={dressGym} title="Gym" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial">
        <div className="container">
          <h2 className="text-center text-md-start">OUR HAPPY CUSTOMERS</h2>
        </div>
        <TestimonialsSlider />
      </section>
    </>
  );
};

export default Home;
