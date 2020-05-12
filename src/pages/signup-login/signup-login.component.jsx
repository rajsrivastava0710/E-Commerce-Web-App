import React from 'react';
import './signup-login.style.scss';
import Signin from '../../components/signin/signin.component.jsx';
import Signup from '../../components/signup/signup.component.jsx';

const SignupLogin = () => (
    <div className='auth-container'>
        <Signin/>
        <Signup/>
    </div>
)

export default SignupLogin;