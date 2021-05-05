import React from 'react'

function ModeratorsOne({props}) {
    return (
        <li class="table-row">  
            <div class="col col-1" data-label="Job Id">{props.id}</div>
            <div class="col col-2" data-label="Customer Name">{props.full_name}</div>
            <div class="col col-3" data-label="Amount">{props.email}</div>
            <div class="col col-4" data-label="Payment Status">{props.iin}</div>
        </li>
    )
}

export default ModeratorsOne
