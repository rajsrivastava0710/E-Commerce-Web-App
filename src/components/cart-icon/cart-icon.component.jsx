import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.style.scss';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartIconLogo from '../../assets/cart-icon.svg';

const CartIcon = ({toggleCartHidden}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <div className='cart-icon-logo-container'>
            <img src={CartIconLogo} alt='Cart'/>
        </div>
        <span className='item-count'>0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);
// export default CartIcon;