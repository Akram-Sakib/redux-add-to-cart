import React from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { addToCartOrIncreaseQuantity } from "../redux/cart/actions";
import { decreaseProductQuantity } from "../redux/product/actions";

const ProductItem = ({ product }) => {
  const { id, title, category, price, quantity, image } = product || {};
  const dispatch = useDispatch();
  const handleAddToCart = (id) => {
    dispatch(decreaseProductQuantity(id));
    dispatch(
      addToCartOrIncreaseQuantity({
        id,
        title,
        category,
        price,
        quantity: 1,
        image,
      })
    );
  };

  return (
    <div className="lws-productCard">
      <img className="lws-productImage" src={image} alt={title} />
      <div className="p-4 space-y-2">
        <h4 className="lws-productName">{title}</h4>
        <p className="lws-productCategory">{category}</p>
        <div className="flex items-center justify-between pb-2">
          <p className="productPrice">
            BDT <span className="lws-price">{price}</span>
          </p>
          <p className="productQuantity">
            QTY <span className="lws-quantity">{quantity}</span>
          </p>
        </div>
        <button
          className="lws-btnAddToCart"
          onClick={() => handleAddToCart(id)}
          disabled={quantity === 0}
        >
          Add To Cart
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

export default ProductItem;
