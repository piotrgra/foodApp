import React from "react";
import "./Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal, getBasketProductCount } from "../reducer";
import { Link } from "react-router-dom";

function Header() {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/logo_465x320a.png"
          alt="logo"
        />
      </Link>

      <div className="header__container">
        <div className="header__left">
          <div className="header__location">
            <div className="header__locationIcon">
              <HomeIcon />
            </div>
            <h2 className="header__locationAdress">Odbiór osobisty</h2>
          </div>
        </div>
        <Link to="/checkout" className="header__checkoutLink">
          <div className="header__right">
            <div className="header__foodInfo">
              <FastfoodIcon />
              <p className="header__foodCount">
                x {getBasketProductCount(basket)}
              </p>
            </div>

            <div className="header__cartInfo">
              <ShoppingCartIcon />

              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className="header__cartSummary">{value}</p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"zł"}
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
