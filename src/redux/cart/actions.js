import { ADD_TO_CART_OR_INCREASE_QUANTITY, CLEAR_CART, DECREASE_QUANTITY, INCREASE_QUANTITY, REMOVE_FROM_CART } from "./actionTypes";

export const addToCartOrIncreaseQuantity = (product) => {
  return {
    type: ADD_TO_CART_OR_INCREASE_QUANTITY,
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId,
  };
};

export const increaseQuantity = (productId) => {
  return {
    type: INCREASE_QUANTITY,
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: DECREASE_QUANTITY,
    payload: productId,
  };
};
