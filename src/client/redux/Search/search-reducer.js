import * as actionTypes from './search-types';

const INITIAL_STATE = {
    query: '',
    results: [],
};

const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_QUERY:
            return {
                ...state,
                query: action.query
            }

        case actionTypes.UPDATE_RESULTS:
            return {
                ...state,
                results: action.results
            }
            default: return state;
    }

};

export default searchReducer
