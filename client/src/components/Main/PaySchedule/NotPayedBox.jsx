import React from 'react';
import './NotPayedBox.css';
import axios from "axios";

function NotPayedBox({props}) {
    const beautifyDate = date => {
        if(date < 10){
            return `0${date}`;
        }

        return date;
    }

    const bigNumToDate = (stamp) => {
        let date = new Date(stamp);
        let date_str = `${beautifyDate(date.getDay() + 1)}.${beautifyDate(date.getMonth() + 1)}.${beautifyDate(date.getFullYear())} г`;
        
        return date_str;
    }

    const PAY_DEBT_API = "http://localhost:8000/pay_schedule/pay_debt";
    const PayDebt = event => {
        const paySchedule = {
            id: props.schedule.id
        }

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }
            
        axios.post(PAY_DEBT_API,  paySchedule , {headers: headers})
          .then(res => {
            alert('Платеж успешно совершен');
            window.location.reload();
        }).catch(err=> {
            alert("Вышла ошибка");
        })

    }
    
    return (
        <div class="col-md-3 col-sm-6 mb-5">
            <div class="pricingTable red">
            
                <div class="pricingTable-header">
                    <i class="far fa-clock"></i>
                    <div class="price-value"> 
                        {props.schedule.amount} ТГ
                        <span class="month">
                            {bigNumToDate(props.schedule.stamp)}
                        </span> 
                    </div>
                </div>
                <h3 class="heading">Не оплачено</h3>
                
                {! props.index && 
                <form onSubmit={e => { e.preventDefault(); PayDebt(e)}}>
                    <button className='pricingTable-signup'>Оплатить</button>
                </form>
                }
        
            </div>
        </div>
    )
}

export default NotPayedBox
