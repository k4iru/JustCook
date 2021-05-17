import { combineReducers } from 'redux';

import shopReducer from './Shopping/shopping-reducer';

// Combining all of the reducers that we will be using
const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;