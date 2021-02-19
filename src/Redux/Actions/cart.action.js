import { ADD_CART_ITEM, CART_VIEW_TOGGLE_HIDDEN, REMOVE_CART_ITEMS_ON_SIGNOUT } from "../constants"

export const toggleCartViewHidden = () => ({
    type: CART_VIEW_TOGGLE_HIDDEN
})

export const addItemToCart = item => ({
    type: ADD_CART_ITEM,
    payload: item
})

export const removeCartItemsOnSignOut = () => ({
    type: REMOVE_CART_ITEMS_ON_SIGNOUT
})