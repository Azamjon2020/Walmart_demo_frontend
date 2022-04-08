import { ADMIN } from "./actionTypes";

export const adminAction = (admin) => {
  return {
    type: ADMIN,
    payload: admin,
  };
};
