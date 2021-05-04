import React from 'react'

function Wallet() {
    const wallet_style = {
        width: '70%',
        height: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

    const total_money = {
        color: 'yellow',
    }

    const last_added_money = {
        color: 'green',
    }

    return (
        <div className="container mt-5">
            <div className="card text-left" style={wallet_style}>
                <div className="card-header">
                    Мои сбережение
                </div>
                <div className="card-body">
                    <h1 className="card-title my-auto" style={total_money}>768 575 тг</h1>
                    <h5 className="card-title my-auto mt-2" style={last_added_money}>+ 52000 тг</h5>
                </div>
                <div className="card-footer text-muted">
                    Осталось 700 000 тг
                </div>
            </div>
        </div>
    )
}

export default Wallet
