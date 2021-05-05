import React from 'react';
import axios from "axios";
import ModeratorsOne from './ModeratorOne/ModeratorsOne';
import './Moderators.css';
import {Link} from 'react-router-dom';
import { useState,  useEffect } from 'react';

function Moderators() {
    const MODERATORS_GET_API = "http://localhost:8000/get_moderators";

    const [moderators, setModerators] = useState([]);
    const getModerators = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(MODERATORS_GET_API, {headers: headers}).then(res => {
            setModerators(res.data);
        });
    }

    useEffect(() => {
        getModerators();
    }, []);

    return (
        <div className='container'>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">ID</div>
                    <div class="col col-2">Full Name</div>
                    <div class="col col-3">Email</div>
                    <div class="col col-4">IIN</div>
                </li>
                
                {moderators.map((m, i) => <ModeratorsOne props={m}/>)}
            </ul>
        </div>
    )
}

export default Moderators
