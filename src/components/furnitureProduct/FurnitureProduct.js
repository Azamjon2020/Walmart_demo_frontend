import axios from "axios";
import React, { useEffect, useState } from "react";
import CartsItem from "../cartsItem/CartsItem";

function FurnitureProduct() {
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/allProduct/furniture`)
      .then((productsData) => setAllProducts(productsData.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="cartProduct" style={{ marginTop: "40px" }}>
      <div className="cartProductWrapper">
        {allProducts?.map((product, index) => (
          <CartsItem product={product} key={index} ind={index} />
        ))}
      </div>
    </div>
    //
  );
}

export default FurnitureProduct;
