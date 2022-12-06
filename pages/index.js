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

const Home = ({ products, bannerData }) => {
  return (
    <>
      {/* Hero Banner Components */}
      <HeroBanner />

      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {products?.map((product) => product.name)}
      </div>
      {/* Footer  Components */}
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  // get (fetch) products in {lib=>} client
  const query = `*[_type=="product"]`;
  const products = await client.fetch(query);

  // get (fetch) bannerData in {lib=>} client
  const bannerQuery = `*[_type=="product"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
