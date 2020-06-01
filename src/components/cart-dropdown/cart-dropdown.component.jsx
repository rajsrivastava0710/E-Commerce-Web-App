import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.style.scss';

import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        {
        cartItems.length>0?
        <div className='cart-items'>
            {
                cartItems.map(cartItem => 
                    <CartItem key ={cartItem.id} item= {cartItem} />
                )
            }
        </div>:
        <div className = 'empty-message'>
            Your Cart is Empty
        </div>
        }
        <CustomButton onClick= {()=>{
             history.push('/checkout')
             dispatch(toggleCartHidden())
            }}
        >GoTo Checkout</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));