import React, { useState } from 'react'
import Button from '../../components/Button/Button.component'
import './Login.styled.css'
import axios from 'axios'

export default function Login(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    function auth(){
        if(login !== '' && password !== ''){
            let formData = {
                login: login,
                password: password
            };
            console.log('formData:', formData);
            axios({
                method: 'post',
                url: ``,
                data: formData,
                withCredentials: true,
                headers: {
                    "Access-Control-Allow-Credentials": true,
                    "Access-Control-Allow-Origin": 'http://localhost:3000',
                    'Accept': 'application/json',
                    'Content-Type': 'x-www-form-urlencoded',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            })
                .then(res => {
                    console.log(res);
                })
                .catch( error => {
                    console.log(error);
                })
        }
    }

    return(
        <div className='login-page'>
            <div className="login-form">
                <div className="input-line">
                    <h5>Login</h5>
                    <input type="text" value={login} onChange={(e) => {setLogin(e.target.value)}}/>
                </div>
                <div className="input-line">
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <div className='button-line'>
                    <input id='rememberMe' type="checkbox" value={rememberMe} onChange={() => {setRememberMe(!rememberMe); console.log('Remember me', rememberMe)}} defaultChecked={true} />
                    <label htmlFor="rememberMe">Remember me</label>
                </div>
                <div className="input-line button-line">
                    <button onClick={auth}>Login</button>
                </div>
            </div>
        </div>
    )
}
