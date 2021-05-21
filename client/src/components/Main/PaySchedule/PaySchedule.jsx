import React from 'react';
import './PaySchedule.css';
import axios from "axios";
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import ProgramPage from '../Programs/ProgramPage';
import NotPayedBox from './NotPayedBox';
import PayedBox from './PayedBox';

function PaySchedule() {
    let match = useRouteMatch();

    const PAY_SCHEDULE_PAYED_GET_API = "http://localhost:8000/pay_schedule/get_payed";
    const [payedSchedule, setPayedSchedule] = useState([]);
    const [payedLen, setPayedLen] = useState(1);
    const getPayedSchedule = async () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        await axios.get(PAY_SCHEDULE_PAYED_GET_API+`?program_id=${match.params.id}`, {headers: headers}).then(res => {
            setPayedSchedule(res.data);
            setPayedLen(res.data.length);
        });

    }

    useEffect(() => {
        getPayedSchedule();
    }, []);

    const PAY_SCHEDULE_NOT_PAYED_GET_API = "http://localhost:8000/pay_schedule/get_not_payed";
    const [notPayedSchedule, setNotPayedSchedule] = useState([]);
    const [restNotPayed, setRestNotPayed] = useState(0);
    const getNotPayedSchedule = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(PAY_SCHEDULE_NOT_PAYED_GET_API+`?program_id=${match.params.id}`, {headers: headers}).then(res => {
            let not_payeds = res.data;
            setNotPayedSchedule(not_payeds.slice(0, 8 - payedLen));
            setRestNotPayed(not_payeds.length - (8 - payedLen));
        });

    }

    useEffect(() => {
        setTimeout(getNotPayedSchedule(), 3000);
    }, []);

    return (
        <div class="container pay_schedule">
            <ProgramPage />
            <div class="row">

            {payedSchedule.map((schedule, i) => 
                <PayedBox props={schedule}/>
            )}

            {notPayedSchedule.map((schedule, i) => 
                <NotPayedBox props={{schedule: schedule, index: i}}/>
            )}       
            </div>

            <div className='text-right w-100'>
                <h3>...Осталось {restNotPayed} погашений</h3>
            </div>
        </div>
    )
}

export default PaySchedule
