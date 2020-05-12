import React from 'react';

import './custom-button.style.scss';


const CustomButton = ({ children,isGoogleLogin,type,...otherProps }) => (

 <button type={type} className={`${isGoogleLogin?'google-login':''} custom-button`} {...otherProps}>{children}</button>
)

export default CustomButton;