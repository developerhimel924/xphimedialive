import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import XphimBooks from "./Books__pages/XphimBooks";
import JesusBook from "./JesusBook";
import Adamtree from "./Adamtree";
import AdamBook from "./AdamBook";
import Awaken from "./Awaken";
import ThewhitelieBook from "./ThewhitelieBook";
import MusicBooks from "./Books__pages/MusicBooks";
import Coc from "./Coc";
import R2rcd from "./R2rcd";
import R2r400cd from "./R2r400cd";
import Awakenpsalms from "./Awakenpsalms";
import XphimMovies from "./Books__pages/XphimMovies";
import R2rdvd from "./R2rdvd";
import R2r400dvd from "./R2r400dvd";
import Cointelpro from "./Cointelpro";
import XphimAnimations from "./Books__pages/XphimAnimations";
import Spiritman from "./Spiritman";


const promise = loadStripe(
  "pk_test_51HpkTLCwdM9b4zXfHlla5MjMhuMdGKRcE6xlTcIxQ1kcxr2Zsf4s1r7CYjhXnMsBvUre5OUzzRn2TIqp1339RFFP00sJhsLsdU"
);

const App = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/XphimBooks">
            <Header />
            <XphimBooks />
          </Route>
          <Route path="/JesusBook">
            <Header />
            <JesusBook />
          </Route>
          <Route path="/Adamtree">
            <Header />
            <Adamtree />
          </Route>
          <Route path="/AdamBook">
            <Header />
            <AdamBook />
          </Route>
          <Route path="/Awaken">
            <Header />
            <Awaken />
          </Route>
          <Route path="/ThewhitelieBook">
            <Header />
            <ThewhitelieBook />
          </Route>
          <Route path="/MusicBooks">
            <Header />
            <MusicBooks />
          </Route>
          <Route path="/Coc">
            <Header />
            <Coc />
          </Route>
          <Route path="/R2rcd">
            <Header />
            <R2rcd />
          </Route>
          <Route path="/R2r400cd">
            <Header />
            <R2r400cd />
          </Route>
          <Route path="/Awakenpsalms">
            <Header />
            <Awakenpsalms />
          </Route>
          <Route path="/XphimMovies">
            <Header />
            <XphimMovies />
          </Route>
          <Route path="/R2rdvd">
            <Header />
            <R2rdvd />
          </Route>
          <Route path="/R2r400dvd">
            <Header />
            <R2r400dvd />
          </Route>
          <Route path="/Cointelpro">
            <Header />
            <Cointelpro />
          </Route>
          <Route path="/XphimAnimations">
            <Header />
            <XphimAnimations />
          </Route>
          <Route path="/Spiritman">
            <Header />
            <Spiritman />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
