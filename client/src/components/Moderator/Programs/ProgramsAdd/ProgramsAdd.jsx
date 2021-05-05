import React from 'react';
import axios from "axios";
import './ProgramsAdd.css';
import { useHistory } from 'react-router-dom';

function ProgramsAdd() {
    const PROGRAM_ADD_API = "http://localhost:8000/program/create_program";
    const history = useHistory();

    const saveProgram = event => {
        const newProgram = {
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

        axios.post(PROGRAM_ADD_API, newProgram , {headers: headers})
          .then(res => {
            alert('Программа успешно создано');
            history.push("/god_mode/programs")
        }).catch(err=> {
            alert("Вышла ошибка");
        })
    }

    return (
        <div className='container'>
            <img className='program_add_img' src='/images/programs/program_default.jpeg' />
            <form className='add_form mt-3' onSubmit={e => { e.preventDefault(); saveProgram(e)}}>
                <div class="form-group">
                    <label for="name">Название</label>
                    <input type="text" class="form-control" id="name" name="name" />
                </div>
                <div class="form-group">
                    <label for="description">Описание</label>
                    <textarea type="text" class="form-control" id="description" name="description" ></textarea>
                </div>
                <div class="form-group">
                    <label for="loan_rate">Ставка по займу (%)</label>
                    <input type="number" class="form-control" id="loan_rate" name="loan_rate" />
                </div>
                <div class="form-group">
                    <label for="initial_fond">Минимальный первоначальный взнос (%)</label>
                    <input type="number" class="form-control" id="initial_fond" name="initial_fond" />
                </div>
                <div class="form-group">
                    <label for="loan_term">Срок займа (лет)</label>
                    <input type="number" class="form-control" id="loan_term" name="loan_term" />
                </div>
                <div class="form-group">
                    <label for="loan_amount">Сумма займа (тг)</label>
                    <input type="number" class="form-control" id="loan_amount" name="loan_amount" />
                </div>
                <button type="submit" class="btn btn-primary program_add_btn">Создать</button>
            </form>
        </div>
    )
}

export default ProgramsAdd
