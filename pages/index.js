import React from "react";

// Components
import {
  Product,
  Navbar,
  Layout,
  HeroBanner,
  Footer,
  FooterBanner,
  Cart,
} from "../Components";

const Home = () => {
  return (
    <>
      HeroBanner
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
