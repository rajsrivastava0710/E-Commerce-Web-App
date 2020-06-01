import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.style.scss';
import Logo from '../../assets/logo.svg';
// import { ReactComponent as ReactLogo } from '../../logo.svg';

import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
 
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {auth} from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden} ) => (
    
    <div className='header-container'>
        <div className='logo-container'>
            <Link to='/'>
                <img src={Logo} alt='Logo'/>
            </Link>
        </div>
        <div className='other-nav-item'>
            <span>
            <Link className='option' to='/shop'>Shop</Link>
            </span>
            {/* <span>
            <Link className='option' to='/cart'>My Cart</Link>
            </span> */}
            <span>
            {
                currentUser?
                <span className='option' style={{cursor:'pointer'}} onClick={() => auth.signOut()}>LogOut</span>:
                <Link className='option' to='/auth'>Login</Link>
            }
            </span>
            <span className='cart-component-container'>
                <CartIcon/>
            </span>
        </div>
        {
            hidden?
            null:
            <CartDropdown/>
        }
    </div>
)

// const mapStateToProps = (state) => ({
//     currentUser: state.user.currentUser,
//     hidden:state.cart.hidden
// })

// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
//     currentUser,
//     hidden
// })

// const mapStateToProps = (state) => ({
//     currentUser: selectCurrentUser(state),
//     hidden: selectCartHidden(state)
// })

const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    })


export default connect(mapStateToProps)(Header);