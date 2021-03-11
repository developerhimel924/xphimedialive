import React from "react";
import "./Home.css";
import HiddenImg from "./Assets/hidden.jpg";
import Indigenous from './Assets/indigenous.jpg';
import RareBooks from './Assets/rare.jpg';
import Evoking from './Assets/evoking.jpg';
import Award from './Assets/award.jpg';
import Sublime from './Assets/sublime.jpg';
import Ancient from './Assets/ancient.jpg';
import { Link } from "react-router-dom";
import Slider from "./Slider";

function Home() {
  return (
    <div className="home__container">
      <div className="home">
        <div className="home__container">
          <Slider/>

          <div className="home__row">
            <div className="home__row__content">
              <h2>Hidden Treasures</h2>
              <img src={HiddenImg} alt="Image 1" />
              <p>COMMING SOON</p>
            </div>
            <div className="home__row__content">
              <h2>Indigenous Voices</h2>
              <img src={Indigenous} alt="Image 1" />
              <p>Listen Now</p>
            </div>
            <div className="home__row__content">
              <h2>Rare Books</h2>
              <img src={RareBooks} alt="Image 1" />
              <p>Don't miss out, shop now</p>
            </div>
            <div className="home__row__content signin__design">
              <p>Sign in for the best experience</p>
              <Link exact to="/login">
                <button className="signin__button">Sign in securely</button>
              </Link>
            </div>
            <div className="home__row__content">
              <h2>Evoking Concousinesss</h2>
              <img src={Evoking} alt="Image 1" />
              <p>See how</p>
            </div>
            <div className="home__row__content">
              <h2>Award Winning Books</h2>
              <img src={Award} alt="Image 1" />
              <p>Discover more deals</p>
            </div>
            <div className="home__row__content">
              <h2>Sublmine Understanding</h2>
              <img src={Sublime} alt="Image 1" />
              <p>Get It Now</p>
            </div>
            <div className="home__row__content">
              <h2>Ancient Clarirvoyancy</h2>
              <img src={Ancient} alt="Image 1" />
              <p>Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
