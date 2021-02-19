import { ADD_CART_ITEM, CART_VIEW_TOGGLE_HIDDEN, REMOVE_CART_ITEMS_ON_SIGNOUT, REMOVE_CART_ITEM_FROM_CART, REMOVE_SELECTED_CART_ITEM_FROM_CART } from "../constants";
import { addItemToCart, removeItemFromCart } from "../Utils/cart.utils";

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
        case REMOVE_CART_ITEM_FROM_CART:
            return ({
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            })
        case REMOVE_SELECTED_CART_ITEM_FROM_CART:
            return ({
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
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