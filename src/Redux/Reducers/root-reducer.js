import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import cartReducer from './cart.reducer'
import userReducer from './user.reducer'
import directoryReducer from './directory.reducer'
import shopRedcer from './shop.reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopRedcer
})

export default persistReducer(persistConfig, rootReducer)