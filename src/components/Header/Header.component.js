import React from 'react';
import './Header.styled.css';
import Container from "../Container/Container.component";

export default function Header(){

    return(
        <div className='header'>
            <Container>
                <div className="link-box">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                    <a href="/resume">Resume</a>
                    <a href="/">Home</a>
                </div>
            </Container>
        </div>
    )
}
