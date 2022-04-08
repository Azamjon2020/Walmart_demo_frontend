import React, { useEffect, useState } from "react";
import "./SearchedProduct.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { productId } from "../../redux/actions/productId";
// import { productAction } from "../../redux/actions/productAction";
function SearchedProduct() {
  // const dispatch = useDispatch();
  // const product = useSelector((state) => state.product.products);
  // console.log("selectedPro", product);
  // const [collectionBtnCount1, setCollectionBtnCount1] = useState(0);
  // const [numberShow, setNumberShow] = useState(false);

  // const ProBtnInc = (product) => {
  //   dispatch(productAction(product));
  //   setCollectionBtnCount1(collectionBtnCount1 + 1);
  // };
  // const ProBtnDec = (productid) => {
  //   setCollectionBtnCount1(collectionBtnCount1 - 1);
  //   dispatch(productId(productid));
  // };
  /////// **************** button ***************** //////////////
  const params = useParams();
  // console.log(params);
  const [searchedProduct, setSearchedProduct] = useState(null);
  useEffect(() => {
    if (params?.proid) {
      axios
        .get(`http://localhost:8000/create/products/${params?.proid}`)
        .then((response) => setSearchedProduct(response?.data))
        .catch((err) => console.log(err));
    }
  }, [params?.proid]);
  // console.log(searchedProduct);
  const madeIn = () => {
    if (searchedProduct?.productType === "carts") {
      return "China";
    } else if (searchedProduct?.productType === "furniture") {
      return "Uzbekistan";
    } else if (searchedProduct?.productType === "tecnology") {
      return "Uzbekistan";
    } else if (searchedProduct?.productType === "shoes") {
      return "Uzbekistan";
    }
  };
  return (
    <div className="searchedItem">
      <Navbar />
      <div className="selected_product">
        <img src={searchedProduct?.productImg} alt="" />
        <div className="selected_product_title">
          <h1>This is a {searchedProduct?.productName}</h1>
          {searchedProduct?.productTitle}
          <p>
            Aipisicing elit. Nesciunt necessitatibus possimus non repellendus ad
            eius temporibus, vitae omnis sit odit, perspiciatis tempore!
            Temporibus nam recusandae
          </p>
        </div>
        <div className="selected_product_info">
          <h2>This product made in {madeIn()}</h2>
          <h3>
            This product cost $ {searchedProduct?.productCost}{" "}
            <span className="product_sale">
              $ {searchedProduct?.productSale}
            </span>
          </h3>
          <span className="productStars">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>
            <span>38 received</span>
          </span>
          {/* <div className="div">
            {collectionBtnCount1 === 0 ? (
              <input
                type="button"
                value="+ Add"
                className="cartCollectionBtn"
                // onFocus={() => }
                onClick={() => ProBtnInc(product)}
                style={{ marginLeft: "820px", marginTop: "240px" }}
              />
            ) : !numberShow ? (
              <div>
                <div
                  className="cartCollectionBtnAdd"
                  style={{ marginLeft: "820px", marginTop: "240px" }}
                >
                  <input
                    type="button"
                    value="-"
                    onClick={() => {
                      ProBtnDec(product._id);
                    }}
                  />
                  <h4>{collectionBtnCount1}</h4>
                  <input
                    type="button"
                    value="+"
                    onClick={() => {
                      ProBtnInc(product);
                    }}
                  />
                </div>
                <div
                  onClick={() => setNumberShow(true)}
                  className="shadow"
                ></div>
              </div>
            ) : (
              <input
                style={{ marginLeft: "820px", marginTop: "240px" }}
                type="button"
                value={collectionBtnCount1}
                className={
                  collectionBtnCount1 > 9
                    ? "cartCollectionBtn circle bigNumber"
                    : "cartCollectionBtn circle"
                }
                onClick={() => setNumberShow(false)}
                onFocus={() => {
                  setCollectionBtnCount1(collectionBtnCount1);
                }}
              />
            )}
          </div> */}
        </div>
      </div>

      {/* 
      {searchedProduct?.productSale}
      
       */}
      <Footer />
    </div>
  );
}

export default SearchedProduct;
