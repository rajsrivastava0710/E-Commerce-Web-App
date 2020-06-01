import React from 'react';
import { connect } from 'react-redux';
import './cart-icon.style.scss';

import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartIconLogo from '../../assets/cart-icon.svg';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <div className='cart-icon-logo-container'>
            <img src={CartIconLogo} alt='Cart'/>
        </div>
        <span className='item-count'>{itemCount}</span>
    </div>
)

// const mapStateToProps =({cart:{cartItems}}) => ({
//     itemCount: cartItems.reduce(
//         (accumulator, item) =>
//     accumulator + item.quantity , 0
//     )
// })

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);
// export default CartIcon;