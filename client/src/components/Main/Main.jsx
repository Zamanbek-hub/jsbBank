import React from 'react';
import UnAuthorizeMain from './UnAuthorize/UnAuthorizeMain';
import AuthorizeMain from './Authorize/AuthorizeMain';
import Header from '../Header/Header';

function Main() {
    return (
        <div className='main'>
            <div className="container-fluid mt-5">
                { localStorage.getItem('jwtToken') ? <AuthorizeMain /> : <UnAuthorizeMain /> }
            </div>
        </div>
    )
}

export default Main
