import { ADD_PRODUCT, DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY_DYNAMICALY } from "./actionTypes";
import { initialState } from "./initialState";

const getMaxId = (products) => {
  const maxId = products.reduce(
    (maxId, product) => Math.max(maxId, product.id),
    -1
  );
  return maxId + 1;
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: getMaxId(state.products),
            ...action.payload,
          },
        ],
      };
      case INCREASE_PRODUCT_QUANTITY_DYNAMICALY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload.id) {  
            return {
              ...product,
              quantity: product.quantity + action.payload.value,
            };
          } else {
            return product;
          }
        }),
      };
    case INCREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity + 1,
            };
          } else {
            return product;
          }
        }),
      };
    case DECREASE_PRODUCT_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.quantity === 0) {
            return product;
          }
          if (product.id === action.payload) {
            return {
              ...product,
              quantity: product.quantity - 1,
            };
          } else {
            return product;
          }
        }),
      };
    default:
      return state;
  }
};

export default productReducer;
