import React, { useState } from "react";
import "./Basket.css";
import { FiX } from "react-icons/fi";
import BasketImg from "../../assets/basket.png";
import BasketItem from "../basketItem/BasketItem";
import { useSelector } from "react-redux";

function Basket({ setBasketCliked, basketCliked }) {
  const product = useSelector((state) => state.product);
  const [collectionBtnCount1, setCollectionBtnCount1] = useState(0);
  // console.log(product.products);
  let productArr = product.products;
  // let aProduct =
  //   productArr.filter((ar) => ar._id !== productArr[0]._id) && productArr[0];
  // console.log("one product >> ", aProduct);

  // productArr.arr = productArr.arr.filter(
  //   (value, index, self) =>
  //     index ===
  //     self.findIndex((t) => t.place === value.place && t.name === value.name)
  // );

  return (
    <>
      {!basketCliked && (
        <div className="basket__on">
          <div className="basketBg" onClick={() => setBasketCliked(true)}></div>
          {!product.products?.length ? (
            <div className="basketWrapper">
              <div className="basketNav">
                <h1>Cart</h1>
                <FiX onClick={() => setBasketCliked(true)} />
              </div>
              <div className="basketCarts">
                <img src={BasketImg} alt="" />
                <h3>Time to start shopping!</h3>
                <h5>Your cart is empty</h5>
                <p>Fill it up with savings from these popular departments.</p>
                <div className="basketBtns">
                  <button>Shop Grocery</button>
                  <button>Shop Electronics</button>
                  <button>Shop Toys</button>
                  <button>Shop Home</button>
                </div>
              </div>
            </div>
          ) : (
            <div className="basketWrapper">
              <div className="basketNav">
                <h1>
                  Cart <span>({product.products?.length})</span>
                </h1>
                <FiX onClick={() => setBasketCliked(true)} />
              </div>
              <div className="bascetProducts">
                {productArr?.map((basketPro, ind) => (
                  <BasketItem
                    key={ind}
                    collectionBtnCount1={collectionBtnCount1}
                    setCollectionBtnCount1={setCollectionBtnCount1}
                    basketPro={basketPro}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Basket;
