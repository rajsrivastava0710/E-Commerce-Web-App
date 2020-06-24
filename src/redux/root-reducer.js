import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducers';

const persistConfig = {
    key: 'root', //where do we want to start storing
    storage, //storage
    whitelist: ['cart'] //what reducer u want to persist
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
}) 

export default persistReducer(persistConfig, rootReducer);

// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// })