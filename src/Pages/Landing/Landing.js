import React from "react";
import Carousel from "../../Components/Carousel/CarouselEffect";
import Layout from "../../Components/Layout/Layout";
import Product from "../../Components/Product/Product";
import Category from "../../Components/Category/Category";
function Landing() {
  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;
