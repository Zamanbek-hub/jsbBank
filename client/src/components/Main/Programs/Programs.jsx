import React from 'react';
import Program from './Program';
import axios from "axios";
import { useState,  useEffect } from 'react';


function Programs() {
    const carousel_style = {
        marginRight: 'auto',
        marginLeft: 'auto'
    }

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
        <div className='container row mt-5' style={carousel_style}>
            {programs.map((program, i) => <Program props={{title: program.name, id:program.id, path:'/images/programs/program_1.jpeg'}}/>)}
        </div>
    )
}

export default Programs
