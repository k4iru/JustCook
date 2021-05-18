import { createStore } from 'redux';
// importing ability to work with redux dev tools in browser
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// enhancing the store component with the composeWithDevTools function to be able to use redux dev tools.
const store = createStore(rootReducer, composeWithDevTools());

export default store;