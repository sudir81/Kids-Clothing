import { ADD_CART_ITEM, CART_VIEW_TOGGLE_HIDDEN, REMOVE_CART_ITEMS_ON_SIGNOUT } from "../constants";
import { addItemToCart } from "../Utils/cart.utils";

const initialState = {
    hidden: false,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_VIEW_TOGGLE_HIDDEN:
            return ({
                ...state,
                hidden: !state.hidden
            })
        case ADD_CART_ITEM:
            return ({
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            })
        case REMOVE_CART_ITEMS_ON_SIGNOUT:
            return ({
                ...state,
                cartItems: []
            })
        default:
            return state;
    }
}

export default cartReducer;