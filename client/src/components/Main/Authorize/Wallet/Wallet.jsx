import React from 'react';
import axios from "axios";
import { useState,  useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Wallet.css';

const wallet_style = {
    width: '70%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
}

const total_money = {
    color: '#2C2D3E',
}

const rest = {
    color: '#99999A',
}

const last_added_money = {
    color: '#2C2D3E',
}

const card_body = {
    height: 'auto',
}

const next_pay = {
    fontSize: '12px',
    color: '#99999A',
}

const wallet_inner_style = {
    borderLeft: '4px solid #F4B624'
}

const dot_div_style = {
    width: '50px',  
}

const add_dot_style = {
    backgroundColor: 'green',
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    display: 'inline-block',
    marginTop: '35%'
}

const pay_dot_style = {
    backgroundColor: '#D65D0D',
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    display: 'inline-block',
    marginTop: '35%'
}

const add_money = {
    color: '#1DAE91',
    fontWeight: 'bolder',
    fontSize: '17px'
}

function Wallet() {
    const GET_USER_API = 'http://localhost:8000/profile';
    const GET_USER_LAST_INVEST = 'http://localhost:8000/invest/my_last';
    
    const [user, setUser] = useState({});
    const getUser = () =>  {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(GET_USER_API, {headers:headers}).then(res => {
            setUser(res.data)
        });
    }

    useEffect(() => {
        getUser();
    }, {});


    const [invest, setInvest] = useState({});
    const getLastInvest = () =>  {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(GET_USER_LAST_INVEST, {headers:headers}).then(res => {
            setInvest(res.data)
        });
    }

    useEffect(() => {
        getLastInvest();
    }, {});

    const GET_NEXT_PAY_API = 'http://localhost:8000/pay_schedule/get_not_payed_first';
    const [nextPay, setNextPay] = useState({});
    const getNextPay = () =>  {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(GET_NEXT_PAY_API, {headers:headers}).then(res => {
            setNextPay(res.data)
        });
    }

    useEffect(() => {
        getNextPay();
    }, {});

    const GET_ATTACHED_PROGRAM = 'http://localhost:8000/pay_schedule/get_attached_program';
    const [attachedProgram, setAttachedProgram] = useState({});
    const getAttachedProgram = () =>  {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(GET_ATTACHED_PROGRAM, {headers:headers}).then(res => {
            setAttachedProgram(res.data)
        });

        console.log("attached program =");
        console.log(attachedProgram);

    }

    useEffect(() => {
        getAttachedProgram();
    }, {});

    const beautifyDate = date => {
        if(date < 10){
            return `0${date}`;
        }

        return date;
    }

    const bigNumToDate = (stamp) => {
        let date = new Date(stamp);
        let date_str = `${beautifyDate(date.getDay() + 1)}.${beautifyDate(date.getMonth() + 1)}.${beautifyDate(date.getFullYear())} ??`;
        
        return date_str;
    }

    const CalculateRest = (wallet) => {
        return 1500000 - wallet;
    }

    const CalculateRestRate = (wallet) => {
        let total = 1500000;
        let rest = wallet * 100 / total;
        return Math.round(rest, -1);
    }

    let rest_rate = CalculateRestRate(user.wallet);

    return (
        <div className="container mt-5">
            <div className="card text-left" style={wallet_style}>
                <div className="card-header">
                    ?????? ????????????????????
                </div>
                <div className="card-body" style={card_body}>
                    <div className='container' style={wallet_inner_style}>
                        <div className='row'>
                            <div className='col-6'>
                                <div className=''>
                                    <h1 className="card-title my-auto" style={total_money}>{user.wallet} ????</h1>
                                    <p className="card-title my-auto mt-2" style={rest}>???????????????? ????????????????: {CalculateRest(user.wallet)} ????</p>
                                </div>
                                
                                <div className='row mt-4'>
                                    <div className='text-center' style={dot_div_style}>
                                        <span className="dot" style={add_dot_style}></span>
                                    </div>
                                    <div>
                                        <h4 className="card-title my-auto" style={last_added_money}>7500 ????</h4>
                                        <p className="card-title my-auto mt-2" style={next_pay}>?????????????????? ?????????? ???? {bigNumToDate(invest.stamp)}</p>
                                    </div>
                                </div>

                                <div className='row mt-4'>
                                    <div className='text-center' style={dot_div_style}>
                                        <span className="dot" style={pay_dot_style}></span>
                                    </div>
                                    { nextPay ?
                                    <div className=''>
                                        <h4 className="card-title my-auto" style={last_added_money}>{nextPay.amount} ????</h4>
                                        <p className="card-title my-auto mt-2" style={next_pay}>
                                            <a href={`/pay_schedule/${attachedProgram.id}`} className='next_pay'>
                                                ?????????????????? ???????????? ???? {bigNumToDate(nextPay.stamp)} ??
                                            </a>
                                        </p>
                                    </div>
                                    : 
                                    <div className=''>
                                        <h4 className="card-title my-auto" style={last_added_money}>7500 ????</h4>
                                        <p className="card-title my-auto mt-2" style={next_pay}>?????????????????? ???????????? ???? 31.05.2021 ??</p>
                                    </div>   
                                    }
                                </div>
                            </div>
                            <div className='col-6 container'>
                                <div className='circular_out_div'>
                                    <CircularProgressbar className='circular' value={rest_rate} maxValue={100} text={`${rest_rate}%`} />
                                </div>
                            </div>
                        </div>
                        

                        <div className='mt-5'>
                            <h6>
                                <a href='/add_money' style={add_money}>
                                    ??????????????????
                                </a>
                            </h6>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Wallet
