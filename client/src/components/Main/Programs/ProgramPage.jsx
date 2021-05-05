import React from 'react';
import './ProgramPage.css';
import {Link} from 'react-router-dom';

function ProgramPage() {
    return (
        <div className='container mt-5'>
            <div className='header_text'>
                <h1 className='program_text'>Title</h1>
                <h5 className='program_text'>Description Description Description Description</h5>
            </div>
            <br />
            <div className='program_img_div'>
                <img className='program_img' src='/images/unregister_main_1.jpeg'/>
            </div>
            <div className='mt-5'>
                <h2 className='program_text conditions'>УСЛОВИЯ ПРОГРАММЫ:</h2>
                <div className='mt-5 row'>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>1%</p>
                        <h4>Ставка по займу</h4>
                    </div>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>10%</p>
                        <h4>Минимальный первоначальный взнос</h4>
                    </div>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>20 лет</p>
                        <h4>Срок займа</h4>
                    </div>
                    <div className='col-6 text-center info_block'>
                        <p className='program_big_info'>15 000 000 тг</p>
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
