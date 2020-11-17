import React, { useState } from "react";
import "./Checkout.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import CheckIcon from "@material-ui/icons/Check";
import { Link, useHistory } from "react-router-dom";
import OrderItem from "./OrderItem";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useStateValue } from "../StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../reducer";
import { db } from "../firebase";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();

  const [deliveryMethod, setDeliveryMethod] = useState("self");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");

  const history = useHistory();
  const handleSubmit = () => {
    if (basket.length > 0) {
      db.collection("orders")
        .add({
          basket: basket,
          created: new Date(),
          user: {
            name: name,
            address: address,
            email: email,
            comment: comment,
          },
          paymentMethod: paymentMethod,
          deliveryMethod: deliveryMethod,
        })
        .then(function (docRef) {
          console.log("Document written with ID: ", docRef.id);
          dispatch({
            type: "EMPTY_BASKET",
          });
          history.replace("/");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } else {
      alert("Musisz miec jakies produkty w koszyku!");
    }
  };
  return (
    <>
      <div className="checkout">
        <div className="checkout__card">
          <div className="checkout__order">
            <h1 className="checkout__orderTitle">Twoje zamowienie:</h1>
            {basket.map((item, i) => (
              <OrderItem
                key={i}
                id={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            ))}
          </div>
          <div className="checkout__delivery">
            <h2 className="checkout__title">Sposób dostawy</h2>
            <button
              className={`checkout__button ${
                deliveryMethod === "self" ? "checkout__button--active" : ""
              }`}
              onClick={() => setDeliveryMethod("self")}
            >
              Odbiór
            </button>
            <button
              className={`checkout__button ${
                deliveryMethod === "deliver" ? "checkout__button--active" : ""
              }`}
              onClick={() => setDeliveryMethod("deliver")}
            >
              Dostawa
            </button>
          </div>
          <div className="checkout__address">
            <h2 className="checkout__title">Dane kontaktowe</h2>
            <div className="checkout__addressForm">
              <input
                type="text"
                placeholder="Numer telefonu"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <input
                type="text"
                placeholder="Imię"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />

              {deliveryMethod === "deliver" ? (
                <input
                  type="address"
                  placeholder="ul. Jakastam 1"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                />
              ) : (
                ""
              )}

              <input
                type="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <textarea
                cols="40"
                rows="5"
                placeholder="Komentarz"
                onChange={(e) => setComment(e.target.value)}
                value={comment}
              />
            </div>
          </div>
          <div className="checkout__payment">
            <h2 className="checkout__title">Jak chcesz zaplacic ?</h2>
            <div className="checkout__paymentButtons">
              <button
                className={`checkout__button ${
                  paymentMethod === "cash" ? "checkout__button--active" : ""
                }`}
                onClick={() => setPaymentMethod("cash")}
              >
                Gotówka
              </button>
              <button
                className={`checkout__button ${
                  paymentMethod === "online" ? "checkout__button--active" : ""
                }`}
                onClick={() => setPaymentMethod("online")}
              >
                Płatność online
              </button>
            </div>
          </div>
          <div className="checkout__paymentCode">
            <input type="text" placeholder="Kod promocyjny" />
            <button className="checkout__button">Uzyj kodu</button>
          </div>
          <div className="checkout__summary">
            <div className="checkout__summaryFood">
              <div className="checkout__summaryFoodIcon">
                <FastfoodIcon />
              </div>

              <CurrencyFormat
                renderText={(value) => (
                  <>
                    Koszt zamowienia: <b>{value}</b>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"zł"}
              />
            </div>

            <div className="checkout__summaryAll">
              <div className="checkout__summaryAllIcon">
                <LocalAtmIcon />
              </div>

              <CurrencyFormat
                renderText={(value) => (
                  <>
                    Razem do zapłaty: <b>{value}</b>
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
        </div>
      </div>
      <div className="checkout__buy">
        <Link to="/" className="checkout__gotoMenuLink">
          <div className="checkout__goToMenu">
            <ArrowBackIcon className="checkout__goToMenuIcon" /> <p>Menu</p>
          </div>
        </Link>

        <button className="checkout__buyButton" onClick={handleSubmit}>
          <CheckIcon />
          <p className="checkout__buyButtonText">
            Zamawiam{" "}
            <b>
              {" "}
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    (<b>{value}</b>)
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                suffix={"zł"}
              />{" "}
            </b>
          </p>
        </button>
      </div>
    </>
  );
}

export default Checkout;
