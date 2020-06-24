import React from 'react';
// import SHOP_DATA from './shop.data.js';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';
import './shop.style.scss'
import { selectShopData } from '../../redux/shop/shop.selector.js';


const ShopPage = ({collections}) => (
        <div className='shop-page'>
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

export default connect(mapStateToProps)(ShopPage);