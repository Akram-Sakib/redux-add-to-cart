import {
  ADD_TO_CART_OR_INCREASE_QUANTITY,
  CLEAR_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  REMOVE_FROM_CART,
} from "./actionTypes";
import { initialState } from "./initialState";

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART_OR_INCREASE_QUANTITY:
      const item = state.carts.find((item) => item.id === action.payload.id);
      if (item) {
        return {
          ...state,
          carts: state.carts.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1,
              };
            } else {
              return item;
            }
          }),
        };
      } else {
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        carts: state.carts.filter((item) => item.id !== action.payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        }),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        carts: state.carts.map((item) => {
          if (item.quantity === 0) {
            return item;
          }
          if (item.id === action.payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        }),
      };
    case CLEAR_CART:
      return {
        ...state,
        carts: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
