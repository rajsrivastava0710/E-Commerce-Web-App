import React from 'react';
import {connect} from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';
import MenuItem from '../menu-item/menu-item.component.jsx'
import './directory.style.scss'

const Directory = ({ sections }) =>(
    <div className='directory-menu'>
        {sections.map( ({id, ...remainingProps}) => (
            <MenuItem key={id} { ...remainingProps }/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);