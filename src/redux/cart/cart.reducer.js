import CartActionTypes from './cart.states';
import { addItemToCart, removeItemfromCart, subtractItemFromCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE , action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems,action.payload)
                // cartItems:[...state.cartItems, action.payload]
            }
        case CartActionTypes.SUBTRACT_ITEM:
            return{
                ...state,
                cartItems: subtractItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                cartItems: removeItemfromCart(state.cartItems, action.payload)
            }
    
        default:
            return state;
    }
}

export default cartReducer;