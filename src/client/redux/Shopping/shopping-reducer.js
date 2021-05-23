import * as actionTypes from './shopping-types';

const INITIAL_STATE = {
    recipes: [
        // THIS CAN BE POPULATED BY DATA FROM API
        {
            id: 1,
            title: "Salmon and Rice",
            description: "This is the description for the salmon and rice recipe",
            price: 15.00,
            image:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/quick-citrus-salmon-wdy-1118-1540312428.jpg?crop=1xw:0.99975xh;center,top&resize=768:*",
        },
        {
            id: 2,
            title: "Garden Salad",
            description: "This is the description for the garden salad recipe",
            price: 10.00,
            image:
                "https://www.culinaryhill.com/wp-content/uploads/2016/06/Easy-Garden-Salad-Recipe-Culinary-Hill-HR-06SQ.jpg",
        },
    ], // {id, title, description, price, img}
    cart: [], // {id, title, description, price, img, qty}
    currentItem: null,
}

// reducer is basically just a function, it takes in a state and an action
// action is the part that gets dispatched
// state is the state (we are passing a default state if no state is set)
const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            // Get the items data from the products array
            const item = state.recipes.find(recipe => recipe.id === action.payload.id);
            // Check if the item is in the cart already
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                // Spread the state because the object is a reference type, this prevents us from losing the currentItem or the products from the state.
                ...state,
                // if inCart is true, state.cart.map the item where the item id == payload id and spread that item into a new object and alter it's quantity. Otherwise, send the item
                // if inCart is false, create a new array, spread the current state.cart into it, and add a new object that refers to the specific item found above and set it's quantity to 1 inside the cart
                // if the item is in the cart, map through the cart to find the item and increase it's quantity by 1 otherwise keep the same quantity
                // if it's not in the cart create an array, spread the cart into an array, add the new item with a quantity of 1
                cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}],

                // The above ternary written in if/else statements
                // if (inCart === true) {
                //     state.cart.map(item => 
                //         if (item.id === action.payload.id) {
                //             {...item, qty: item.qty + 1}
                //         } else {
                //             item
                //         }
                // } else {
                //     [...state.cart, {...item, qty: 1}]
                // }

            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                // return every item in the cart EXCEPT the one we want to delete
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                // find the specific item in the cart, then set the quantity of the item to be whatever is send in the payload. Otherwise, return the item.
                // adding the "+" before the action.payload.qty changes the value to an integer
                cart: state.cart.map(item => item.id === action.payload.id ? {...item, qty: +action.payload.qty} : item) 
            }
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                // set the current item state to be equal to the value provided through the action.payload
                currentItem: action.payload, 
            };
        default:
            return state;
    }
};


export default shopReducer