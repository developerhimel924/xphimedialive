import React from "react";
import "./XphimBooks.css";
import Biographies from "./BooksAssets/biographies.png";
import History from "./BooksAssets/history.png";
import Spiritual from "./BooksAssets/spiritual.png";
import Health from "./BooksAssets/health.png";
import Education from "./BooksAssets/education.png";
import { Link, NavLink } from "react-router-dom";
import Book__banner from "./BooksAssets/book-banner.jpg";
import Jesus from "../Jesus";

const MusicBooks = () => {
  return (
    <div className="books__container">
      <div className="books__header">
        <h1>Music on XPHIM</h1>
      </div>
      <div className="category__wrapper"></div>
      <div className="books__lists__container music__books__lists">
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
            to="/"
          >
            <h4>Movies</h4>
          </NavLink>
          <NavLink
            exact
            activeClassName="active__navLink"
            className="books__categories"
            to="/"
          >
            <h4>Animations</h4>
          </NavLink>
        </div>
        <div className="books__lists">
          <h3>CD's & MP3's</h3>
          <div className="books__section">
            <Link exact to="/Coc">
              <Jesus
                title="Color to Cross Tribute"
                price={12.99}
                image="https://xphimedia.com/img/6.jpg"
              />
            </Link>
            <Link exact to="/R2rcd">
              <Jesus
                title="Rage to Righteousness"
                price={"Free"}
                image="https://xphimedia.com/img/8.jpg"
              />
            </Link>
            <Link exact to="/R2r400cd">
              <Jesus
                title="Rage to Righteousness 400 Years to Freedom"
                price={12.99}
                image="https://xphimedia.com/img/7.jpg"
              />
            </Link>
            <Link exact to="/Awakenpsalms">
              <Jesus
                title="Awaken Psalms of Elimelech Hebrew"
                price={12.99}
                image="https://xphimedia.com/img/9.jpg"
              />
            </Link>
            <Link exact to="/ThewhitelieBook">
              <Jesus
                title="Celestial Beings"
                price={"Free"}
                image="https://xphimedia.com/img/10.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBooks;
