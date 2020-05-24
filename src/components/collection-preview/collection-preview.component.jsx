import React from 'react';

import './collection-preview.style.scss';

import CollectionItem from '../collection-item/collection-item.component.jsx';

const CollectionPreview = ({title,items}) => (
    <div className='collection-container'>
        <span className='title'>{title.toUpperCase()}</span>
        <div className='preview'>
            {
                items.filter( (item,idx) => idx<4 )
                // .map( ({ id, ...otherProps })=>(
                .map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;