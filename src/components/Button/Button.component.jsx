import React from 'react';
import './Button.styled.css';

export default function Button(props) {
    return (
        <div className='button'>
            {props.children}
        </div>
    )};
