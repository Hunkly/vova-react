import React, { useState } from 'react'
import Button from '../../components/Button/Button.component'
import './Register.styled.css'

export default function Register(){
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    function passwordCheck(e){
        if(e.target.value === password){
            setError(false);
        } else {
            setError(true);
            setMessage('Passwords are not equal');
        }
    }

    return(
        <div className='register-page'>
            <div className="register-form">
                <div className="input-line">
                    <h5>Login</h5>
                    <input type="text" value={login} onChange={(e) => {setLogin(e.target.value)}}/>
                </div>
                <div className="input-line">
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value); }}/>
                </div>
                <div className="input-line">
                    <h5>Confirm password</h5>
                    <input type="password" value={confirmedPassword} onChange={(e) => {setConfirmedPassword(e.target.value); passwordCheck(e);}}/>
                </div>
                <div className="input-line button-line">
                    <Button>Sign up</Button>
                </div>

            </div>
            {
                error ? <div className='error-message'>{message}</div> : null
            }
        </div>
    )
}
