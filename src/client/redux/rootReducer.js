import { combineReducers } from 'redux';

import shopReducer from './Shopping/shopping-reducer';
import searchReducer from './Search/search-reducer';
import userReducer from './User/user-reducer';
// Combining all of the reducers that we will be using
const rootReducer = combineReducers({
    shop: shopReducer,
    search: searchReducer,
    user: userReducer,
});

export default rootReducer;