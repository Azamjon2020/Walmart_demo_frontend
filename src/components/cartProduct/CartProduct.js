import React, { useEffect, useState } from "react";
import "./CartProduct.css";
import axios from "axios";
import CartsItem from "../cartsItem/CartsItem";
function CartProduct() {
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8000/allProduct/carts")
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

export default CartProduct;
