import * as actionTypes from "./search-types";

export const UpdateQuery = (query) => {
  console.log("query >>> " + query);
  return {
    type: actionTypes.UPDATE_QUERY,
    payload: query,
  };
};

export const UpdateResults = (results) => {
  console.log("results >>> " + results);
  return {
    type: actionTypes.UPDATE_RESULTS,
    payload: results,
  };
};
