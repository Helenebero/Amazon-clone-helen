import React, { useEffect, useState } from "react";
//import classess from "./ProductDetail.module.css"
import Layout from "../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import Productcard from "../../Components/Product/Productcard";
import { ProductUrl } from "../../Api/endPoint";
import Loader from "../../Components/Loader/Loader";

function ProductDetail() {
  const { ProductId } = useParams();
  const [Product, setProduct] = useState({});
  const [isLoading, setIsLoding] =useState(false);
 
  useEffect(() => {
    setIsLoding(true);
    axios.get(`${ProductUrl}/Products/${ProductId}`)
      .then((res) =>{
        setProduct(res.data);
        setIsLoding(false);
      }).catch((err) => {
        console.log(err);
        setIsLoding(false);
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (<Loader />) : (<Productcard Product={Product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
