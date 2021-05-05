import React from 'react';
import axios from "axios";
import { useState,  useEffect } from 'react';
import Program from './Program/Program';

const carousel_style = {
    marginRight: 'auto',
    marginLeft: 'auto'
}

const add_button_style = {
    marginLeft: '94%',
}


function Programs() {
    const PROGRAMS_GET_API = "http://localhost:8000/program/all";

    const [programs, setPrograms] = useState([]);
    const getPrograms = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(PROGRAMS_GET_API, {headers:headers}).then(res => {
            setPrograms(res.data);
        });
    }

    useEffect(() => {
        getPrograms();
    }, []);

    return (
        <div className='container mt-5' style={carousel_style}>
            <div className=''>
                <a href='/god_mode/program_add' style={add_button_style}>
                    <button className='btn btn-success' >
                        +Add
                    </button>
                </a>
            </div>
            <div className='row mt-5'>
                {programs.map((program, i) => <Program props={{id:program.id, title: program.name, path:'/images/programs/program_1.jpeg'}}/>)}
            </div>
        </div>
    )
}

export default Programs
