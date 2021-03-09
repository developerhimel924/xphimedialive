import React from "react";
import "./Jesus.css";

function MoviesList({ title, image, price, rating }) {
  return (
    <div className="jesus__container movies__list__container">
      <div className="jesus__info movies__list">
        <img src={image} alt="" />
        <p>{title}</p>
        <p className="jesus__des">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default MoviesList;
