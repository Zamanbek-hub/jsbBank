import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    const nav_link_style = {
        color: "white",
    }

    const nav_style = {
        backgroundColor: '#008B8A'
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={nav_style}>
                <a className="navbar-brand" href="/" style={nav_link_style}>ITRello</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse mr-auto justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/" style={nav_link_style}>All cards<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/login" style={nav_link_style}>Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/register" style={nav_link_style}>Register</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn" style={nav_link_style}  onClick={e => { e.preventDefault(); {localStorage.removeItem('jwtToken'); history.push("")}}}>Logout</button>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
