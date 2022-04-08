import { ADMIN } from "../actions/actionTypes";
const intialState = {
  admin: null,
};

const adminReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADMIN:
      return {
        admin: action.admin,
      };
    default:
      return state;
  }
};

export default adminReducer;
