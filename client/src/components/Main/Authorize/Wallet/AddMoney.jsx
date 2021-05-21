import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import './AddMoney.css';


function AddMoney({props}) {
    const ADD_MONEY_API = "http://localhost:8000/add_money";
    const history = useHistory();

    const container_style = {
        width: '500px',
        height: '300px'
    }

    const form_style = {
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block'
    }

    const input_style = {
        
    }

    const addMoney = event => {
        const money = {
            email: event.target[0].value,
            amount: event.target[1].value,
        }

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }
        
        axios.post(ADD_MONEY_API,  money , {headers: headers})
          .then(res => {
            alert('Платеж успешно совершен');
            history.push('');
        }).catch(err=> {
            alert("Вышла ошибка");
        })

    }

    return (
        <div className='container mt-5' style={container_style}> 
            <form style={form_style} onSubmit={e => { e.preventDefault(); addMoney(e)}}>
                <div className='custom_form mt-3'>
                    <input type='text' placeholder='email' style={input_style} value={localStorage.getItem('email')}/>
                </div>
                <div className='custom_form mt-3'>
                    <input type='number' placeholder='Сумма платежа, ТГ' />
                </div>

                <button className='button do_pay mt-4'>Сделать платеж</button>
            </form>
        </div>
    )
}

export default AddMoney
