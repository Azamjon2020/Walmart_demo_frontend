import { PRODUCT } from "./actionTypes";

export function productAction(product) {
  return {
    type: PRODUCT,
    payload: product,
  };
}
