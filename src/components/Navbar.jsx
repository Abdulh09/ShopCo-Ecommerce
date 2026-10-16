import Announcement from "./Announcement";
import "./Navbar.css";
import { Link } from "react-router";
import ShopCo from "../assets/SHOP-CO.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import profile from "../assets/profile.svg";
// import hamburgerIcon from "../assets/hamburger-icon.svg";
const Navbar = () => {
  return (
    <header>
      <Announcement />
      <div className="container">
        <div className="nav-slot d-flex justify-content-between align-items-center">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src={ShopCo} alt="ShopCo Logo" />
            </Link>
          </div>
          <nav className="navbar navbar-expand-lg py-0 position-static">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    On Sale
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    New Arrivals
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pe-0" href="#">
                    Brands
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="nav-right d-flex">
            <form className="search-form d-none d-lg-flex" role="search">
              <img src={search} alt="" className="search-icon" />
              <input
                className="form-control"
                type="text"
                placeholder="Search for products..."
                aria-label="Search"
              />
            </form>
            <div className="action-btn d-flex gap-3">
              <button className="btn d-lg-none" type="button">
                <img src={search} alt="Search" />
              </button>
              <button className="btn" type="button">
                <img src={cart} alt="Cart" />
              </button>
              <button className="btn" type="button">
                <img src={profile} alt="Profile" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
