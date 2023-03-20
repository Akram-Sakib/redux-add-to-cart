import React from "react";
import { useSelector } from "react-redux";
import logo from "./../images/logo.png";

const Navbar = ({ setRoute }) => {

  const carts = useSelector(state => state.carts.carts)
  const totalCart = carts.reduce((acc, curr) => acc + curr.quantity, 0)

  return (
    <nav className="bg-[#171C2A] py-4">
      <div className="navBar">
        <a href="index.html">
          <img src={logo} alt="LWS" className="max-w-[140px]" />
        </a>

        <div className="flex gap-4">
          <span
            onClick={() => setRoute("/home")}
            className="navHome cursor-pointer"
            id="lws-home"
          >
            Home
          </span>
          <span
            onClick={() => setRoute("/cart")}
            className="navCart cursor-pointer"
            id="lws-cart"
          >
            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
            <span id="lws-totalCart">{totalCart}</span>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
