import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import productReducer from "./product/productReducer";

export const rootReducer = combineReducers({
  products: productReducer,
  carts: cartReducer,
});
