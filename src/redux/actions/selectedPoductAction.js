import { SELECTED_PRODUCT } from "./actionTypes";

export function selectedProductAction(selectedProduct) {
  return {
    type: SELECTED_PRODUCT,
    payload: selectedProduct,
  };
}
