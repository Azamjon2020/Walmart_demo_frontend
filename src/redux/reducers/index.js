import { combineReducers } from "redux";
import product from "./productReducer";
import admin from "./adminReducer";
import createAccountReducer from "./createAccountReducer";
import selectedProductReducer from "./selectedProductReducer";

export default combineReducers({
  product: product,
  admin: admin,
  createAccountReducer: createAccountReducer,
  selectedProductReducer: selectedProductReducer,
});
