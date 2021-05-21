import React from 'react'

function PayedBox({props}) {
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

    return (
        <div class="col-md-3 col-sm-6">
            <div class="pricingTable green">
                <div class="pricingTable-header">
                    <i class="fas fa-hands-helping"></i>
                    <div class="price-value">
                        {props.amount} ТГ
                        <span class="month">
                            {bigNumToDate(props.stamp)}
                        </span> 
                    </div>
                </div>
                <h3 class="heading">Оплачено</h3>
            </div>
        </div>
    )
}

export default PayedBox
