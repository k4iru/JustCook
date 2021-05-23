import * as actionTypes from "./search-types";

const INITIAL_STATE = {
  query: "",
  results: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_QUERY:
      return {
        ...state,
        query: 'aaa',
      };

    case actionTypes.UPDATE_RESULTS:
      return {
        ...state,
        results: 'tes',
      };
    default:
      return state;
  }
};

export default searchReducer;
