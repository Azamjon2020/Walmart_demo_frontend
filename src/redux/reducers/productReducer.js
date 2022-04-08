import { PRODUCT_ID, PRODUCT } from "../actions/actionTypes";
const intialState = {
  products: [],
};

const productReducer = (state = intialState, action) => {
  switch (action.type) {
    case PRODUCT:
      return {
        products: action.payload,
      };
    case PRODUCT_ID:
      let index = [...state.products].findIndex(
        (product) => product._id === action.payload
      );
      return {
        products: [
          ...state.products.slice(0, index),
          ...state.products.slice(index + 1),
        ],
      };
    default:
      return state;
  }
};

export default productReducer;
