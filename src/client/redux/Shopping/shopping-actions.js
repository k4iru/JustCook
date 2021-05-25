import * as actionTypes from './shopping-types';

// The functions below will be "dispatched" to their respective reducers indicated by the string identifier (eg. addToCart function will be sent to the ADD_TO_CART reducer)

// adds values for the specific itemID to the cart
export const addToCart = (itemID) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemID,
        }
    }
}

// deletes values for the specific itemID from the cart
export const removeFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemID,
        }
    }
}

// adjusts the quantity of the item in the cart. 
// takes in two parameters: itemID = current qty, value = new qty
export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value,
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item,
    }
}