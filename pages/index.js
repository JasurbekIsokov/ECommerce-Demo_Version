import React from "react";

// lib => client
import { client } from "../lib/client";

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
      {/* Hero Banner Components */}
      <HeroBanner />

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 2"].map((product) => product)}
      </div>

      {/* Footer  Components */}
      <Footer />
    </>
  );
};

export default Home;
