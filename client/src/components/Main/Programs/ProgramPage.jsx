import React from 'react';
import './ProgramPage.css';
import axios from "axios";
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';

function ProgramPage() {
    let match = useRouteMatch();
    const PROGRAM_GET_API = "http://localhost:8000/program/get";

    const [program, setProgram] = useState({});
    const getProgram = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(PROGRAM_GET_API+`?id=${match.params.id}`, {headers: headers}).then(res => {
            setProgram(res.data)
        });
    }

    useEffect(() => {
        getProgram();
    }, {});

    const PROGRAM_ATTACH_API = "http://localhost:8000/program/attach_program";
    const history = useHistory();

    const attachProgram = () => {
        const obj = {
            id: match.params.id,
        }

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        console.log("attachProgram =");
        console.log(attachProgram);
        // alert(headers.Authorization)

        axios.post(PROGRAM_ATTACH_API, obj, {headers: headers})
          .then(res => {
            alert('Заявка принята успешно');
            history.push(`/`)
        }).catch(err=> {
            alert("Вышла ошибка");
        })
    }

    return (
        <div className='container mt-5'>
            <div className='header_text'>
                <h1 className='program_text'>{program.name}</h1>
                <h5 className='program_text'>{program.description}</h5>
            </div>
            <br />
            <div className='program_img_div'>
                <img className='program_img' src='/images/unregister_main_1.jpeg'/>
            </div>
            <div className='mt-5'>
                <h2 className='program_text conditions'>УСЛОВИЯ ПРОГРАММЫ:</h2>
                <div className='mt-5 row'>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>{program.loan_rate} %</p>
                        <h4>Ставка по займу</h4>
                    </div>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>{program.initial_fond} %</p>
                        <h4>Минимальный первоначальный взнос</h4>
                    </div>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>{program.loan_term} лет</p>
                        <h4>Срок займа</h4>
                    </div>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>{program.loan_amount} тг</p>
                        <h4>Сумма займа</h4>
                    </div>
                </div>
                <a to=''>
                    <button className='program_take'>Подать заявку</button>
                </a>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default ProgramPage
