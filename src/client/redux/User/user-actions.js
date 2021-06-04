import * as actionTypes from "./user-types";

export const UpdateUser = (user) => {
  return {
    type: actionTypes.UPDATE_USER,
    payload: user,
  };
};
