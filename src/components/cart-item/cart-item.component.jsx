import React from 'react';

import './cart-item.style.scss';

const CartItem = ({item: {imageUrl,price, name, quantity}} ) => (
    <div className='cart-item'>
        {/* <div className='item-image-container'> */}
            <img src={imageUrl} alt='item'/>
        {/* </div> */}
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>{quantity} X ${price}</span>
        </div>
    </div>
)

export default CartItem;