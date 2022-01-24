import React from 'react';
import './custom-button.styless.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button className={`${isGoogleSignIn ? 'goole-sign-in' : ''} custom-button`}
        {...otherProps}>
        {children}
    </button>
);

export default CustomButton;