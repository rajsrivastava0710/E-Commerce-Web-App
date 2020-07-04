import React from 'react';
// import SHOP_DATA from './shop.data.js';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import './collection-overview.style.scss'
import { selectShopData } from '../../redux/shop/shop.selector.js';


const CollectionOverview = ({collections}) => (
        <div className='collection-overview'>
            {
                collections.map(({id,...otherProps}) => (
                    <CollectionPreview key={id} {...otherProps}/>
                ))
            }
        </div>
    )


const mapStateToProps = createStructuredSelector({
    collections: selectShopData
})

export default connect(mapStateToProps)(CollectionOverview);