import React, { useState, useEffect } from "react";
import classes from "./Results.module.css";
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductUrl } from "../../Api/endPoint";
import Productcard from "../../Components/Product/Productcard";

function Results() {
  const [results, SetResults] = useState([]);
  const { categoryName } = useParams();
  console.log(categoryName);
  useEffect(() => {
    axios
      .get(`${ProductUrl}/products/category/${categoryName.toLowerCase()}`)
      .then((res) => {
        SetResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category/{categoryName}</p>
        <hr />
        <div className={classes.products_Container}>
          {results?.map((Product) => (
            <Productcard
              key={Product.id}
              Product={Product}
              renderDesc={false}
              renderAdd={true}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Results;
