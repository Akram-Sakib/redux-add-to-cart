import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../redux/cart/actions";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  increaseProductQuantityDynamically,
} from "../redux/product/actions";

const CartItem = ({ cart }) => {
  const { id, title, category, image, price, quantity } = cart || {};
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    const { quantity: productQuantity } = products.find(
      (product) => product.id === id
    );
    if (productQuantity === 0) {
      toast.error("Out of stock", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      dispatch(increaseQuantity(id));
      dispatch(decreaseProductQuantity(id));
    }
  };

  const handleDecrement = (id) => {
    dispatch(decreaseQuantity(id));
    dispatch(increaseProductQuantity(id));
  };

  const deleteFromCart = (id) => {
    dispatch(removeFromCart(id));
    dispatch(increaseProductQuantityDynamically(id, quantity));
  }

  return (
    <div className="cartCard">
      <div className="flex items-center col-span-6 space-x-6">
        {/* <!-- cart image --> */}
        <img className="lws-cartImage" src={image} alt="product" />
        {/* <!-- cart item info --> */}
        <div className="space-y-2">
          <h4 className="lws-cartName">{title}</h4>
          <p className="lws-cartCategory">{category}</p>
          <p>
            BDT <span className="lws-cartPrice">{price}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
        {/* <!-- amount buttons --> */}
        <div className="flex items-center space-x-4">
          <button
            className="lws-incrementQuantity"
            onClick={() => handleIncrement(id)}
          >
            <i className="text-lg fa-solid fa-plus"></i>
          </button>
          <span className="lws-cartQuantity">{quantity}</span>
          <button
            className="lws-decrementQuantity"
            onClick={() => handleDecrement(id)}
          >
            <i className="text-lg fa-solid fa-minus"></i>
          </button>
        </div>
        {/* <!-- price --> */}
        <p className="text-lg font-bold">
          BDT <span className="lws-calculatedPrice">{quantity * price}</span>
        </p>
      </div>
      {/* <!-- delete button --> */}
      <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
        <button
          className="lws-removeFromCart"
          onClick={() => deleteFromCart(id, quantity)}
        >
          <i className="text-lg text-red-400 fa-solid fa-trash"></i>
        </button>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default CartItem;
