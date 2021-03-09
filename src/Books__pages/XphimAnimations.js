import React from "react";
import "./XphimBooks.css";
import { Link, NavLink } from "react-router-dom";
import Animations__banner from "./BooksAssets/Animations-banner.jpg";
import MoviesList from "../MoviesList";

const XphimAnimations = () => {
  return (
    <div className="books__container">
      <div className="books__header">
        <h1>Animations on XPHIM</h1>
      </div>
      <div className="category__wrapper"></div>
      <div className="books__lists__container">
        <div className="books__Links">
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimBooks"
          >
            <h4>Books</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/MusicBooks"
          >
            <h4>Music</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimMovies"
          >
            <h4>Movies</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/XphimAnimations"
          >
            <h4>Animations</h4>
          </NavLink>
        </div>
        <div className="books__lists">
          <img
            className="book__bannerImg"
            src={Animations__banner}
            alt="books banner"
          />
          <h2>New Animated Series</h2>
          <div className="books__section">
            <Link exact to="/Spiritman">
              <MoviesList
                title="Spiritman"
                price={"Subscription Coming Soon"}
                image="https://xphimedia.com/img/products/spiritman.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XphimAnimations;
