import "./Hero.css";
import SanityImage from "../components/SanityImage";
import { useSanityData } from "../lib/useSanityData";
import PrimaryBtn from "./PrimaryBtn";
import starElement from "../assets/graphic.svg";
const SETTINGS_QUERY = `*[_type == "siteSettings"][0]{heroImage}`;

const Hero = () => {
  const { data: settings } = useSanityData(SETTINGS_QUERY);

  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="mb-0">FIND CLOTHES THAT MATCH YOUR STYLE</h1>
            <p className="">
              Browse through our diverse range of meticulously crafted garments, designed to bring
              out your individuality and cater to your sense of style
            </p>
            <div className="cta">
              <PrimaryBtn btnText="Shop Now" />
            </div>
            <div className="milestones d-flex flex-wrap flex-lg-nowrap justify-content-between">
              <div className="detail">
                <span>200+</span>
                <p className="m-0">International Brands</p>
              </div>
              <div className="divider"></div>
              <div className="detail">
                <span>2,000+</span>
                <p className="m-0">High-Quality Products</p>
              </div>
              <div className="divider"></div>
              <div className="detail">
                <span>30,000+</span>
                <p className="m-0">Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img">
              <SanityImage
                image={settings?.heroImage}
                alt="Hero Image"
                fetchPriority="high"
                loading="eager"
                className="d-block w-100"
                widths={[760, 960]}
                sizes="960px"
              />
              <div className="element1">
                <img src={starElement} alt="" />
              </div>
              <div className="element2">
                <img src={starElement} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
