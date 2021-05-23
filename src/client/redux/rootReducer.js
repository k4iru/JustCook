import { combineReducers } from 'redux';

import shopReducer from './Shopping/shopping-reducer';
import searchReducer from './Search/search-reducer';
// Combining all of the reducers that we will be using
const rootReducer = combineReducers({
    shop: shopReducer,
    search: searchReducer,
});

export default rootReducer;