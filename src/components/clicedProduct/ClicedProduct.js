import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ClicedProduct.css";

function ClicedProduct({ match }) {
  const [clicedProduct, setClicedProduct] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/allProduct/carts")
      .then((product) => setClicedProduct(product.data))
      .catch((error) => console.log(error));
  }, []);
  // let filteredProduct = clicedProduct.filteredProduct(
  //   (pro) => pro.id === Number(match.params.id)
  // );
  // console.log(filteredProduct);
  const { productImg, productCost, productSale, productTitle, productType } =
    clicedProduct;
  return (
    <div>
      <img src={productImg} alt="" />
      <p>{productCost}</p>
      <h2>{productSale}</h2>
      <p>{productTitle}</p>
      <span>{productType}</span>
    </div>
  );
}

export default ClicedProduct;
