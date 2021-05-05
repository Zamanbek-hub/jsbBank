import React from 'react';
import {Link} from 'react-router-dom';

function ModeratorsOne({props}) {
    return (
        <li class="table-row">  
            <div class="col col-1" data-label="Job Id"><Link to={`/god_mode/moderator/${props.id}`}>{props.id}</Link></div>
            <div class="col col-2" data-label="Customer Name">{props.full_name}</div>
            <div class="col col-3" data-label="Amount">{props.email}</div>
            <div class="col col-4" data-label="Payment Status">{props.iin}</div>
        </li>
    )
}

export default ModeratorsOne
