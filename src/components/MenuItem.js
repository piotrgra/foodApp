import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import "./MenuItem.css";

function MenuItem({ id, image, name, description, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        name: name,
        description: description,
        price: price,
        quantity: 1,
      },
    });
  };
  return (
    <div className="menuItem" onClick={addToBasket}>
      <img className="menuItem__image" src={image} alt={name} />
      <div className="menuItem__info">
        <div className="menuItem__details">
          <p className="menuItem__title">{name}</p>
          <p className="menuItem__description">{description}</p>
        </div>
        <CurrencyFormat
          renderText={(value) => <p className="menuItem__price">{value}</p>}
          decimalScale={2}
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          suffix={"zł"}
        />
      </div>
    </div>
  );
}

export default MenuItem;
