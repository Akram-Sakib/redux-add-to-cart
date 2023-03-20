import {
  ADD_PRODUCT,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY_DYNAMICALY,
} from "./actionTypes";

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const increaseProductQuantityDynamically = (productId, value) => ({
  type: INCREASE_PRODUCT_QUANTITY_DYNAMICALY,
  payload: { id: productId, value: value },
});

export const increaseProductQuantity = (productId) => ({
  type: INCREASE_PRODUCT_QUANTITY,
  payload: productId,
});

export const decreaseProductQuantity = (productId) => ({
  type: DECREASE_PRODUCT_QUANTITY,
  payload: productId,
});
