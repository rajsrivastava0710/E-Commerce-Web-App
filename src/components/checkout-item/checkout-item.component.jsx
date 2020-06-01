import React from 'react';
import './checkout-item.style.scss';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import { subtractItem } from '../../redux/cart/cart.actions'; 
import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({item, addItem, removeItem, subtractItem}) => (
    <div className='single-item-container'>
        <div className= 'item-attribute-container image'>
        <img src={item.imageUrl} alt='Cart_Item'/>
        </div>
        <div className= 'item-attribute-container name'>
        <span>{item.name}</span>
        </div>
        <div className= 'item-attribute-container quantity'>
        <span className='minus-quantity' onClick={() => subtractItem(item)}>&#x2296;</span>
        <span>{item.quantity}</span>
        <span className='plus-quantity' onClick={() => addItem(item)}>&#x2295;</span>
        </div>
        <div className= 'item-attribute-container price'>
        <span>&#8377;{item.price}</span>
        </div>
        <div className= 'item-attribute-container remove'>
        <span onClick={ () => removeItem(item) }>X</span>
        </div>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    subtractItem: item => dispatch(subtractItem(item)),
    removeItem: item => dispatch(removeItem(item))
})



export default connect(null, mapDispatchToProps)(CheckoutItem);