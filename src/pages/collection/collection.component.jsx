import React from 'react';
import { connect } from 'react-redux';

import {selectCollection} from '../../redux/shop/shop.selector';
 
import './collection.style.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) =>{
    console.log(collection)
    return (
    <div className='collection-page'>
        <h1>Collection Page</h1>
    </div>
)
    }

    const mapStateToProps = (state, ownProps) => ({
        collection : selectCollection(ownProps.match.params.collectionId)(state)
    })

export default connect(mapStateToProps)(CollectionPage);