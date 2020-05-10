import React from 'react'
import './Container.styled.css'

export default function Container(props) {
    return(
        <div className='container'>
            {props.children}
        </div>
    )
}
