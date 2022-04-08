import React from "react";
import { productId } from "../../redux/actions/productId";
import { useDispatch } from "react-redux";
import { productAction } from "../../redux/actions/productAction";
import { useSelector } from "react-redux";

function BasketItem({ basketPro }) {
  const productAll = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  const ProBtnInc = () => {
    let newItem = {
      ...basketPro,
      quontity: basketPro.quontity + 1,
    };
    let res = productAll.findIndex((i) => i._id === basketPro._id);
    dispatch(
      productAction([
        ...productAll.slice(0, res),
        newItem,
        ...productAll.slice(res + 1),
      ])
    );
  };
  const ProBtnDec = (productid) => {
    if (basketPro.quontity > 1) {
      let newItem = {
        ...basketPro,
        quontity: basketPro.quontity - 1,
      };
      let res = productAll.findIndex((i) => i._id === basketPro._id);
      dispatch(
        productAction([
          ...productAll.slice(0, res),
          newItem,
          ...productAll.slice(res + 1),
        ])
      );
    } else {
      // console.log("aaa", productId(productid));
      dispatch(productId(productid));
    }
  };
  return (
    <>
      {productAll.length && (
        <div className="AddedCarts">
          <div className="AddedCartsInfo">
            <img src={basketPro.productImg} alt="" />
            <p>{basketPro.productTitle}</p>
            <div className="addedProductCost">
              <h3>{`$ ${basketPro.productCost * basketPro.quontity} `}</h3>
              <h5>$ {basketPro.productSale * basketPro.quontity}</h5>
            </div>
          </div>
          <div className="AddedCartsCount">
            <span className="AddedCartsCountText">Remove</span>
            <span className="AddedCartsCountText">Save for later</span>
            <div className="AddedCartsCountBtn">
              <input
                type="button"
                value="-"
                onClick={() => {
                  ProBtnDec(basketPro._id);
                }}
              />
              <h4>{basketPro.quontity}</h4>
              <input
                type="button"
                value="+"
                onClick={() => {
                  ProBtnInc(basketPro);
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BasketItem;
