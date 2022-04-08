import { CREATE_ACCOUNT } from "../actions/actionTypes";
const intialState = [
  {
    id: 0,
    userFirstName: "azamjon",
    userLastName: "xolmirzayev",
    userEmail: "azamjon@gmail.com",
    userPassword: "12345678",
  },
  {
    id: 1,
    userFirstName: "zokirjon",
    userLastName: "toshpulatov",
    userEmail: "zokirjon@gmail.com",
    userPassword: "87654321",
  },
];

const createAccountReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT:
      state = [...state, action.payload];
      return state;

    default:
      return state;
  }
};

export default createAccountReducer;
