import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import Logo from '../../logo.svg';
// import { ReactComponent as ReactLogo } from '../../logo.svg';

const Header = () => (
    <div class='header-container'>
        <div className='logo-container'>
            <Link to='/'>
                <img src={Logo} alt='Logo'/>
            </Link>
        </div>
        <div className='other-nav-item'>
            <span>
            <Link to='/shop'>Shop</Link>
            </span>
            <span>
            <Link to='/cart'>My Cart</Link>
            </span>
            <span>
            <Link to='/auth'>Login</Link>
            </span>

        </div>
    </div>
)

export default Header;