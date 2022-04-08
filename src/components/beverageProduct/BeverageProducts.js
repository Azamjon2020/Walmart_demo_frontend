import axios from "axios";
import React, { useEffect, useState } from "react";

import CartsItem from "../cartsItem/CartsItem";

function BeverageProducts() {
  const [allProducts, setAllProducts] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/allProduct/bevarage`)
      .then((productsData) => setAllProducts(productsData.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cartProduct">
      <div className="cartProductWrapper">
        {allProducts?.map((product, index) => (
          <CartsItem key={index} product={product} />
        ))}
      </div>
    </div>
    //
  );
}

export default BeverageProducts;
