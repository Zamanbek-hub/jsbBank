import React from 'react';
import Program from './Program/Program';


function Programs() {
    const carousel_style = {
        marginRight: 'auto',
        marginLeft: 'auto'
    }

    return (
        <div className='container row mt-5' style={carousel_style}>
            <Program props={{title: 'Бақытты отбасы', path:'/images/programs/program_1.jpeg'}}/>
            <Program props={{title: 'Title', path:'/images/programs/program_default.jpeg'}}/>
            <Program props={{title: 'Title', path:'/images/programs/program_default.jpeg'}}/>
            <Program props={{title: 'Title', path:'/images/programs/program_default.jpeg'}}/>
        </div>
    )
}

export default Programs
