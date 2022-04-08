import { SELECTED_PRODUCT } from "../actions/actionTypes";
const intialState = {
  selectedProduct: [],
};

const selectedProductReducer = (state = intialState, action) => {
  switch (action.type) {
    case SELECTED_PRODUCT:
      return {
        selectedProduct: action.payload,
      };
    default:
      return state;
  }
};

export default selectedProductReducer;
