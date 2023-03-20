import React from "react";
import { useSelector } from "react-redux";
import { initialState } from "../redux/product/initialState";
import ProductForm from "./ProductForm";
import ProductItem from "./ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products.products);

  // decide what to show
  let content = null;
  if (products.length === 0) {
    content = <p>There are no products to show</p>;
  } else {
    content = products?.map((product) => (
      <ProductItem product={product} key={product.id} />
    ));
  }

  return (
    <main className="py-16">
      <div className="productWrapper">
        {/* <!-- products container --> */}
        <div className="productContainer" id="lws-productContainer">
          {/* <!-- product item --> */}
          {content}
          {/* <!-- product item ends --> */}
        </div>
        {/* <!-- products container ends --> */}
        <div>
          {/* <!-- Product Input Form --> */}
          <ProductForm />
          {/* <!-- Product Input Form Ends --> */}
        </div>
      </div>
    </main>
  );
};

export default Home;
