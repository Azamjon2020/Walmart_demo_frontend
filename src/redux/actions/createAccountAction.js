import { CREATE_ACCOUNT } from "./actionTypes";

export function createAccountAction(newUser) {
  return {
    type: CREATE_ACCOUNT,
    payload: newUser,
  };
}
