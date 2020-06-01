import React from 'react';
import { connect } from 'react-redux';
import './checkout.style.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsValue, selectCartItems } from '../../redux/cart/cart.selectors';

const checkoutPage  =({cartValue, cartItems, addItem, subtractItem, removeItem}) =>(
<div className= 'checkout-container'>
    <div className='checkout-header-container'>
        <span>Checkout Page</span>
    </div>
    <div className = 'checkout-item-container'>
    {
        cartItems.map(item=>(
            <CheckoutItem key={item.id} item={item} />
        ))
    }
    </div>
    <div className= 'total-value-container'>
        <span>Total: &#8377;{cartValue}</span>
    </div>
</div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartValue: selectCartItemsValue
})

export default connect(mapStateToProps)(checkoutPage);