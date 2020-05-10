import React, {useState} from 'react'
import Button from '../../components/Button/Button.component';
import './Resume.styled.css'
import axios from "axios";

export default function Resume() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [secondName, setSecondName] = useState('');
    const [age, setAge] = useState(0);
    const [skype, setSkype] = useState('');
    const [skills, setSkills] = useState('');
    const [olimpiads, setOlimpiads] = useState('');
    const [database, setDatabase] = useState('');
    const [about, setAbout] = useState('');

    function senData(){
        if(name !== '' && surname !== '' && secondName !== '' && age !== 0 && skype !== '' && skills !== '' && olimpiads !== '' && database !== '' && about !== ''){
            let formData = {
                name: name,
                sName: surname,
                fName: secondName,
                age: age,
                skype: skype,
                skills: skills,
                olimpiads: olimpiads,
                database: database,
                about: about
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
        <div className='resume-page'>
            <h1>Resume</h1>
            <div className="resume-form">
                <div className="input-elem">
                    <h5>Имя</h5>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Фамилия</h5>
                    <input type="text" value={surname} onChange={(e) => {setSurname(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Отчество</h5>
                    <input type="text" value={secondName} onChange={(e) => {setSecondName(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Возраст</h5>
                    <input type="number" value={age} onChange={(e) => {setAge(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Скайп</h5>
                    <input type="text" value={skype} onChange={(e) => {setSkype(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Навыки программирования</h5>
                    <textarea value={skills} onChange={(e) => {setSkills(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Участие в олимпиадах, конкурсы</h5>
                    <textarea value={olimpiads} onChange={(e) => {setOlimpiads(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Знание баз данных</h5>
                    <textarea value={database} onChange={(e) => {setDatabase(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <h5>Расскажите о себе</h5>
                    <textarea value={about} onChange={(e) => {setAbout(e.target.value)}}/>
                </div>
                <div className="input-elem">
                    <button>Сохранить</button>
                    <button onClick={senData}>Отправить</button>
                </div>
            </div>
        </div>
    )
}
