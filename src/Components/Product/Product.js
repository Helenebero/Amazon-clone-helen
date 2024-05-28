import React, { useEffect, useState } from "react";
import axios from "axios";
import Productcard from "./Productcard";
import Loader from "../Loader/Loader";
import Classes from "./Product.module.css";

function Product() {
  const [Products, setProducts] = useState([]);
  const [IsLoading, setIsLoding] = useState(false);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setIsLoding(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoding(false);
      });
  }, []);

  return (
    <>
      {IsLoading ? (
        <Loader />
      ) : (
        <section className={Classes.Product_container}>
          {Products?.map((singleProduct) => {
            return (
              <Productcard
                renderAdd={true}
                Product={singleProduct}
                key={singleProduct.id}
              />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product;
