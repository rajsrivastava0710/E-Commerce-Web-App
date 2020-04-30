import React from 'react';
import './collection-item.style.scss';

const CollectionItem = ({id,name,price,imageUrl}) => (
    <div className='collection-item'>
        <div className='image' style={{
            background:`url(${imageUrl})`,
            backgroundPosition:'center',
            backgroundSize:'cover'
        }}/>
        <div className='collection-footer'>
            <span className='name'>{name}</span>
            <span className='price'>${price}</span>
        </div>
    </div>
)
export default CollectionItem;