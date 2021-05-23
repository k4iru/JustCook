import * as actionTypes from './search-types';

export const UpdateQuery = query => {
    return {
        type: actionTypes.UPDATE_QUERY,
        payload: {
            query: query
        }
    }
}

export const UpdateResults = results => {
    return {
        type: actionTypes.UPDATE_RESULTS,
        payload: {
            results: results
        }
    }
}