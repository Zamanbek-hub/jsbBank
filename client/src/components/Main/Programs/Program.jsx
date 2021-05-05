import React from 'react';
import './Program.css';
import {Link} from 'react-router-dom';


function Program({props}) {

    const card_style = {
        width: '250px',
        height: 'auto',
        margin: 'auto',
    }
    
    const card_img_style = {
        width: '100%',
        height: '200px',
    }

    return (
        <div className="col-sm-12 col-lg-3">
            <div className="card" style={card_style}>
                <img src={props.path} style={card_img_style} class="card-img-top" />
                <div className="card-body text-center">
                    <h4 className="card-title">{props.title}</h4>
                    <div className="mt-5">
                        <Link to={`program/${props.id}`}>
                            <button type="button mt-3" className='btn btn-warning more_button'>Подробнее</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Program
