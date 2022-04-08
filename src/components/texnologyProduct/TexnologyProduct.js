import React, { useEffect, useState } from "react";
import "./TexnologyProduct.css";
import axios from "axios";
import CartsItem from "../cartsItem/CartsItem";

function TexnologyProduct() {
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/allProduct/tecnology")
      .then((productsData) => setAllProducts(productsData.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="cartProduct">
      <div className="cartProductWrapper">
        {allProducts?.map((product, index) => (
          <CartsItem product={product} key={index} ind={index} />
        ))}
      </div>
    </div>
    //
  );
}

export default TexnologyProduct;
