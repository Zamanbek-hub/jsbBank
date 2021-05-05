import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';

function ProgramsEdit() {
    let match = useRouteMatch();
    const PROGRAM_GET_API = "http://localhost:8000/program/get";
    const PROGRAM_EDIT_API = "http://localhost:8000/program/edit_program";
    const history = useHistory();

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

    console.log("program =");
    console.log(program);

    const handleChange = e => {
        setProgram({
          [e.target.name]: e.target.value
        });
      };

    

    const editProgram = event => {
        const newProgram = {
            id: match.params.id,
            name: event.target[0].value,
            description: event.target[1].value,
            loan_rate: event.target[2].value,
            initial_fond: event.target[3].value,
            loan_term: event.target[4].value,
            loan_amount: event.target[5].value,
        }
        
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        console.log("newProgram =");
        console.log(newProgram);
        // alert(headers.Authorization)

        axios.post(PROGRAM_EDIT_API, newProgram , {headers: headers})
          .then(res => {
            alert('Программа успешно обновлено');
            history.push("/god_mode/programs")
        }).catch(err=> {
            alert("Вышла ошибка");
        })
    }

    return (
        <div className='container'>
            <img className='program_add_img' src='/images/programs/program_default.jpeg' />
            <form className='add_form mt-3' onSubmit={e => { e.preventDefault(); editProgram(e)}}>
                <div class="form-group">
                    <label for="name">Название</label>
                    <input type="text" class="form-control" id="name" name="name" value={program.name} onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="description">Описание</label>
                    <textarea type="text" class="form-control" id="description" name="description" value={program.description} onChange={handleChange}></textarea>
                </div>
                <div class="form-group">
                    <label for="loan_rate">Ставка по займу (%)</label>
                    <input type="number" class="form-control" id="loan_rate" name="loan_rate" value={program.loan_rate} onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="initial_fond">Минимальный первоначальный взнос (%)</label>
                    <input type="number" class="form-control" id="initial_fond" name="initial_fond" value={program.initial_fond} onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="loan_term">Срок займа (лет)</label>
                    <input type="number" class="form-control" id="loan_term" name="loan_term" value={program.loan_term} onChange={handleChange}/>
                </div>
                <div class="form-group">
                    <label for="loan_amount">Сумма займа (тг)</label>
                    <input type="number" class="form-control" id="loan_amount" name="loan_amount" value={program.loan_amount} onChange={handleChange}/>
                </div>
                
                <button type="submit" class="btn btn-primary program_add_btn">Обновить</button>
            </form>
        </div>
    )
}

export default ProgramsEdit
