import React from "react";
import "./OrderItem.css";
import DeleteIcon from "@material-ui/icons/Delete";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function OrderItem({ id, name, price, quantity }) {
  const [, dispatch] = useStateValue();

  const handleSubtract = () => {
    if (quantity > 1) {
      dispatch({
        type: "CHANGE_ITEM_QUANTITY",
        operation: "sub",
        id: id,
      });
    }
  };
  const handleAdd = () => {
    dispatch({
      type: "CHANGE_ITEM_QUANTITY",
      operation: "add",
      id: id,
    });
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="orderItem">
      <div className="orderItem__left">
        <p>
          {quantity} x <b>{name}</b>
        </p>
      </div>
      <div className="orderItem__right">
        <div className="orderItem__quantityButtons">
          <button
            className="orderItem__quantityButton"
            onClick={handleSubtract}
          >
            -
          </button>
          <button className="orderItem__quantityButton" onClick={handleAdd}>
            +
          </button>
        </div>
        <div className="orderItem__price">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <b>{value}</b>
              </>
            )}
            decimalScale={2}
            value={price * quantity}
            displayType={"text"}
            thousandSeparator={true}
            suffix={"zł"}
          />
        </div>
        <div className="orderItem__remove" onClick={handleRemove}>
          <DeleteIcon className="orderItem__removeIcon" />
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
