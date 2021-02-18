import { CART_VIEW_TOGGLE_HIDDEN } from "../constants";

const initialState = {
    hidden: true
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_VIEW_TOGGLE_HIDDEN:
            return ({
                ...state,
                hidden: !state.hidden
            })
        default:
            return state;
    }
}

export default cartReducer;