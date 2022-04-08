import { SIGN_IN } from "./actionTypes";

export function signIn(newUser) {
  return {
    type: SIGN_IN,
    payload: newUser,
  };
}
