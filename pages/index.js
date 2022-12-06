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
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      {/* Products */}
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      {/* Footer  Components */}
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  // get (fetch) products in {lib=>} client
  const query = `*[_type=="product"]`;
  const products = await client.fetch(query);

  // get (fetch) bannerData in {lib=>} client
  const bannerQuery = `*[_type=="banner"]`;
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default Home;
