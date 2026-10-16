import "./Footer.css";
import SecondaryBtn from "../components/SecondaryBtn";
import mailIcon from "../assets/newsletter-mail.svg";
import shopCo from "../assets/SHOP-CO.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import paymentIcon from "../assets/payment-icon.svg";

const Footer = () => {
  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="newsletter-wrap d-flex flex-column flex-md-row justify-content-between">
          <h2>
            STAY UPTO DATE ABOUT <br className="d-none d-lg-block" /> OUR LATEST OFFERS
          </h2>
          <div className="newsletter-form">
            <form>
              <div className="newsletter-input ">
                <span>
                  <img src={mailIcon} alt="" />
                </span>
                <input type="email" name="email" placeholder="Enter your email address" required />
              </div>
              <SecondaryBtn btnText="Subscribe to Newsletter" />
            </form>
          </div>
        </div>
        <div className="footer-main">
          <div className="row row-gap-4">
            <div className="col-xl-3">
              <div className="brand-intro">
                <div className="brand-logo">
                  <a href="/">
                    <img src={shopCo} alt="SHOP-CO" />
                  </a>
                </div>
                <p>
                  We have clothes that suits your style and which you’re proud to wear. From women
                  to men.
                </p>
                <div className="social-links">
                  <a href="/">
                    <span>
                      <img src={twitter} className="d-block" alt="twitter" />
                    </span>
                  </a>
                  <a href="/">
                    <span>
                      <img src={facebook} className="d-block" alt="facebook" />
                    </span>
                  </a>
                  <a href="/">
                    <span>
                      <img src={instagram} className="d-block" alt="instagram" />
                    </span>
                  </a>
                  <a href="/">
                    <span>
                      <img src={github} className="d-block" alt="github" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6">
              <h3>COMPANY</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Works
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6">
              <h3>HELP</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Customer Support
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Delivery Details
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Terms & Conditions
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6">
              <h3>FAQ</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Account
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Manage Deliveries
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Payments
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-6">
              <h3>RESOURCES</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Free eBooks
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Development Tutorial
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    How to - Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    Youtube Playlist
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright d-flex row-gap-3 flex-column flex-md-row justify-content-between align-items-md-center">
            <p>© 2025 Company, Inc. All rights reserved.</p>
            <div className="payment-method">
              <div className="icon">
                <img src={paymentIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
