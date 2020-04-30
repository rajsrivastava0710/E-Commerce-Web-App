import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss';

const MenuItem = ({title,imageURL,urlPath,history,location,match}) => {
    console.log('menu',history,location,match,urlPath)
    return(
    <div  className='menu-item' onClick={() => history.push(`${match.url}${urlPath}`)}>
    <div className='bg-image' style={{
        background:`url(${imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
        <div className='content'>
            <span className='title'>{title}</span>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
    </div>
    )
}

export default withRouter(MenuItem);