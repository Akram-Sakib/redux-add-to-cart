import React from "react";
import { useSelector } from "react-redux";
import BillDetails from "./BillDetails";
import CartItem from "./CartItem";

const Cart = () => {

  const carts = useSelector((state) => state.carts.carts);

  // decide what to show
  let content = null;
  if (carts.length === 0) {
    content = <p>There are no products in your cart</p>;
  } else {
    content = carts?.map((cart) => (
      <CartItem cart={cart} key={cart.id} />
    ));
  }

  return (
    <main className="py-16">
      <div className="container 2xl:px-8 px-2 mx-auto">
        <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
        <div className="cartListContainer">
          <div className="space-y-6">
            {content}
          </div>
          {/* <!-- Bill Details --> */}
          <BillDetails />
        </div>
      </div>
    </main>
  );
};

export default Cart;
