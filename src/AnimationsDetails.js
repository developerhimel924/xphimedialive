import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import { useStateValue } from "./StateProvider";
import "./BooksDetails.css";

function AnimationsDetails({
  id,
  title,
  image,
  price,
  rating,
  author,
  price1,
  price2,
  booksdetails,
  authorimage,
  preordertext,
  stock,
}) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        price1: price1,
        price2: price2,
      },
    });
  };

  return (
    <div className="books__info__container">
      <div className="books__imginfo">
        <img className="books__img1" src={image} alt="" />
      </div>
      <div className="books__details__info">
        <h3 className="book__name">{title}</h3>
        <p className="author__name">by {author} (cartoonist)</p>
        <div className="details__of__book">
          <p className="formatStyles">Coming Soon</p>
          <div className="booksInfo__btn">
            <button>
              {" "}
              {/*onClick={addToBasket}*/}
              <p>Subscription</p>
              <strong>${price1}</strong>
            </button>
            <button>
              {" "}
              {/*onClick={addToBasket}*/}
              <p>DVD:</p>
              <strong>${price2}</strong>
            </button>
          </div>
          <p className="books__description">{booksdetails}</p>
        </div>
      </div>
      <div className="books__cart">
        <p className="preoder__text">{preordertext}</p>
        <p className="select__format__text">Select format in your cart</p>
        <div className="price__list__book">
          <p>
            Subscription: <span>$ {price1}</span>
          </p>
          <p>
            DVD: <span>$ {price2}</span>
          </p>
        </div>
        <p className="stock__text">{stock}</p>
        <button className="shoppingcart__btn">
          {/*onClick={addToBasket}*/}
          {/* <AddShoppingCart /> */}
          <span>Keep me Posted</span>
        </button>
      </div>
    </div>
  );
}

export default AnimationsDetails;
