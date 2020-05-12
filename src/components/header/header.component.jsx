import React from 'react';
import {Link} from 'react-router-dom';
import './header.style.scss';
import Logo from '../../logo.svg';
// import { ReactComponent as ReactLogo } from '../../logo.svg';
import {auth} from '../../firebase/firebase.utils';

const Header = ({ currentUser} ) => (
    <div class='header-container'>
        <div className='logo-container'>
            <Link to='/'>
                <img src={Logo} alt='Logo'/>
            </Link>
        </div>
        <div className='other-nav-item'>
            <span>
            <Link className='option' to='/shop'>Shop</Link>
            </span>
            <span>
            <Link className='option' to='/cart'>My Cart</Link>
            </span>
            <span>
            {
                currentUser?
                <span className='option' onClick={() => auth.signOut()}>LogOut</span>:
                <Link className='option' to='/auth'>Login</Link>
            }
            </span>

        </div>
    </div>
)

export default Header;