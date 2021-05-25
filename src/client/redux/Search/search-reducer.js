import * as actionTypes from "./search-types";

const INITIAL_STATE = {
  query: "test",
  results: ['test'],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY:
      return {
        ...state,
        query: action.payload,
      };

    case actionTypes.UPDATE_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
