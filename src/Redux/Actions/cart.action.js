import { ADD_CART_ITEM, CART_VIEW_TOGGLE_HIDDEN, REMOVE_CART_ITEMS_ON_SIGNOUT, REMOVE_CART_ITEM_FROM_CART, REMOVE_SELECTED_CART_ITEM_FROM_CART } from "../constants"

export const toggleCartViewHidden = () => ({
    type: CART_VIEW_TOGGLE_HIDDEN
})

export const addItemToCart = item => ({
    type: ADD_CART_ITEM,
    payload: item
})

export const removeCartItemFromCart = item => ({
    type: REMOVE_CART_ITEM_FROM_CART,
    payload: item
})

export const removeSelectedCartItemFromCart = item => ({
    type: REMOVE_SELECTED_CART_ITEM_FROM_CART,
    payload: item
})

export const removeCartItemsOnSignOut = () => ({
    type: REMOVE_CART_ITEMS_ON_SIGNOUT
})