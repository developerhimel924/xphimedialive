import React from "react";
import "./XphimBooks.css";
import Documentary from "./BooksAssets/documentary.png";
import Faith from "./BooksAssets/faith.png";
import MusicVideo from "./BooksAssets/musicvideo.png";
import International from "./BooksAssets/international.png";
import Animation from "./BooksAssets/animation.png";
import { Link, NavLink } from "react-router-dom";
import Movies__banner from "./BooksAssets/Movies-banner.jpg";
import Jesus from "../Jesus";
import MoviesList from "../MoviesList";

const XphimMovies = () => {
  return (
    <div className="books__container">
      <div className="books__header">
        <h1>Movies on XPHIM</h1>
      </div>
      <div className="category__wrapper">
        <div className="books__category">
          <h2>Shop by Category:</h2>
          <div className="category__items">
            <div className="items">
              <img src={Documentary} alt="Documentary" />
              <p>Documentary</p>
            </div>
            <div className="items">
              <img src={Faith} alt="Faith" />
              <p>Faith & Spiritual</p>
            </div>
            <div className="items">
              <img src={MusicVideo} alt="MusicVideo" />
              <p>Music Videos</p>
            </div>
            <div className="items">
              <img src={International} alt="International" />
              <p>International</p>
            </div>
            <div className="items">
              <img src={Animation} alt="Animation" />
              <p>Animation</p>
            </div>
          </div>
        </div>
      </div>
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
            src={Movies__banner}
            alt="books banner"
          />
          <h2>Movies to add to your collection</h2>
          <div className="books__section">
            <Link exact to="/R2rdvd">
              <MoviesList
                title="Rage to Righteousness"
                price={"Free"}
                image="https://xphimedia.com/img/products/r2r.jpg"
              />
            </Link>
            <Link exact to="/R2r400dvd">
              <MoviesList
                title="Rage to Righteosuness 400 Years to Freedom"
                price={19.99}
                image="https://xphimedia.com/img/products/r2r400.jpg"
              />
            </Link>
            <Link exact to="/Cointelpro">
              <MoviesList
                title="Cointelpro"
                price={19.99}
                image="https://xphimedia.com/img/products/cointelpro.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default XphimMovies;
