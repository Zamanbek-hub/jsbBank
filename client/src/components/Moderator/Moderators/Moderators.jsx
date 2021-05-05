import React from 'react';
import ModeratorsOne from './ModeratorOne/ModeratorsOne';
import './Moderators.css';
import {Link} from 'react-router-dom';

function Moderators() {
    return (
        <div className='container'>
            <ul class="responsive-table">
                <li class="table-header">
                    <div class="col col-1">Job Id</div>
                    <div class="col col-2">Customer Name</div>
                    <div class="col col-3">Amount Due</div>
                    <div class="col col-4">Payment Status</div>
                </li>
                
               <ModeratorsOne props={{}}/>
               <ModeratorsOne />
               <ModeratorsOne />
            </ul>
        </div>
    )
}

export default Moderators
