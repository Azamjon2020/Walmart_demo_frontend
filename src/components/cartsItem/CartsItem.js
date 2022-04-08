import React, { useState } from "react";
import { productAction } from "../../redux/actions/productAction";
// import { selectedProductAction } from "../../redux/actions/selectedPoductAction";
import { productId } from "../../redux/actions/productId";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

function CartsItem({ product, ind }) {
  const dispatch = useDispatch();
  const productAll = useSelector((state) => state.product.products);
  const selectedProduct = useSelector((state) => state.selectedProduct);
  // const productLength = useSelector((state) => state.product);
  const [collectionBtnCount1, setCollectionBtnCount1] = useState(0);
  const [quontity, setQuontity] = useState();
  const [numberShow, setNumberShow] = useState(false);
  let a = productAll.length;
  String(a);
  // console.log(typeof a);

  // const addProduct = (product) => {
  //   dispatch({
  //     type: "SELECTED_PRODUCT",
  //     selectedProduct: [...selectedProduct.payload, product],
  //   });
  // };

  const ProBtnInc = (item) => {
    let itemIndex = productAll.findIndex((i) => i._id === item._id);
    console.log(itemIndex);
    if (itemIndex < 0) {
      dispatch(
        productAction([
          ...productAll,
          {
            ...product,
            quontity: 1,
          },
        ])
      );
      product.quontity ? setQuontity({ ...product, quontity: 1 }) : <></>;
    } else {
      const newOrder = productAll.map((order, inx) => {
        if (inx === itemIndex) {
          return {
            ...order,
            quontity: order.quontity + 1,
          };
        } else {
          return order;
        }
      });
      dispatch(productAction(newOrder));
    }

    setCollectionBtnCount1(collectionBtnCount1 + 1);
  };

  // console.log(quontity);

  const ProBtnDec = (productid) => {
    setCollectionBtnCount1(collectionBtnCount1 - 1);
    dispatch(productId(productid));
  };

  return (
    <>
      <div
        className="cartCollections"
        // style={{ backgroundColor: "red" }}
      >
        <div className="cartCollectionImg">
          {/* <Link to="">
            <img
              src={product.productImg}
              alt=""
              onClick={() =>
                dispatch(
                  selectedProductAction([...selectedProduct.payload, product])
                )
              }
            />
          </Link> */}
          <img src={product.productImg} alt="" />
          {collectionBtnCount1 === 0 ? (
            <input
              type="button"
              value="+ Add"
              className="cartCollectionBtn"
              // onFocus={() => }
              onClick={() => ProBtnInc(product)}
            />
          ) : !numberShow ? (
            <div>
              <div className="cartCollectionBtnAdd">
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
              <div onClick={() => setNumberShow(true)} className="shadow"></div>
            </div>
          ) : (
            <input
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
        </div>
        <div className="cartCollectionInfos">
          <div className="cartCollectionInfosCost">
            <h1>{`$ ${product.productCost}`}</h1>
            <span
              style={{ textDecoration: "line-through" }}
            >{`$ ${product.productSale}`}</span>
          </div>
          <h3>{product.productTitle}</h3>

          <div className="cartCollectionPick">
            <span>Pickup</span> <span>Delivery</span>
          </div>
          <div className="cartCollectionDay">
            <span>3+ day shopping</span>
          </div>
          {/* <details>
            <summary>title</summary>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              quo?
            </p>
          </details> */}
        </div>
      </div>
    </>
  );
}

export default CartsItem;
