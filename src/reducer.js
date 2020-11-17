export const initialState = {
  basket: [],
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

export const getBasketProductCount = (basket) =>
  basket?.reduce((amount, item) => item.quantity + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const index2 = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      if (index2 >= 0) {
        const basket = state.basket.reduce((newBasketTemp, product) => {
          if (product.id === action.item.id) {
            product.quantity++;
            newBasketTemp.push(product);
          } else {
            newBasketTemp.push(product);
          }

          return newBasketTemp;
        }, []);

        return {
          ...state,
          basket: basket,
        };
      }

      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "CHANGE_ITEM_QUANTITY":
      let newBasketItemQuantity = [...state.basket];
      if (action.operation === "sub") {
        newBasketItemQuantity.map((item) => {
          if (item.id === action.id) {
            item.quantity--;
          }
          return newBasketItemQuantity;
        });
      } else if (action.operation === "add") {
        newBasketItemQuantity.map((item) => {
          if (item.id === action.id) {
            item.quantity++;
          }
          return newBasketItemQuantity;
        });
      }
      return {
        ...state,
        basket: newBasketItemQuantity,
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      }

      return {
        ...state,
        basket: newBasket,
      };
    case "GET_LOCAL_STORAGE":
      return action.payload;
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
