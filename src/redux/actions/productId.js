import { PRODUCT_ID } from "./actionTypes";

export function productId(productid) {
  return {
    type: PRODUCT_ID,
    payload: productid,
  };
}
