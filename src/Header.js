import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { ShoppingCart } from "@material-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Logo from "./Assets/logo.png";

function Header() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <>
      <div className="header">
        <Link to="/">
          <img className="header__logo" src={Logo} alt="header logo" />
        </Link>

        <div className="header__search">
          <input
            className="header__searchInput"
            type="text"
            placeholder="Search...."
          />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthenticaton} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCart />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header__bottom">
        <NavLink
          exact
          activeClassName="active__navLink"
          className="books__page__link"
          to="/XphimBooks"
        >
          <span>Books</span>
        </NavLink>
        <NavLink
          exact
          activeClassName="active__navLink"
          className="books__page__link"
          to="/MusicBooks"
        >
          <span>Music</span>
        </NavLink>
        <NavLink
          exact
          activeClassName="active__navLink"
          className="books__page__link"
          to="/XphimMovies"
        >
          <span>Movies</span>
        </NavLink>
        <NavLink
          exact
          activeClassName="active__navLink"
          className="books__page__link"
          to="/XphimAnimations"
        >
          <span>Animations</span>
        </NavLink>
      </div>
    </>
  );
}

export default Header;
