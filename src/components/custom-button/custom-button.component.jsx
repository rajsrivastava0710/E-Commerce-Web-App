import React from 'react';

import './custom-button.style.scss';


const CustomButton = ({ children,isGoogleLogin,inverted,type,...otherProps }) => (

 <button type={type} className={`${isGoogleLogin?'google-login':''} ${inverted?'inverted':''} custom-button`} {...otherProps}>{children}</button>
)

export default CustomButton;