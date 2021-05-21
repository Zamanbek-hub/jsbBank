import React from 'react';
import { useHistory } from 'react-router-dom';
import ModeratorMain from '../Moderator/ModeratorMain';
import './Header.css';
import axios from "axios";
import { useState,  useEffect } from 'react';

function Header() {
    const history = useHistory();
    const nav_link_style = {
        color: "white",
    }

    const nav_style = {
        backgroundColor: '#008B8A'
    }

    /* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
    const openNav = () =>{
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }

    const PROGRAM_ADD_API = "http://localhost:8000/roles/have_role";

    const [role, setRole] = useState({});
    const checkRole = (role) => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(PROGRAM_ADD_API+`?role=${role}`, {headers: headers}).then(res => {
            setRole({have:res.data})
        });
    }

    useEffect(() => {
        checkRole("PROGRAM_CHANGE_1");
    }, []);

    console.log("role =");
    console.log(role)
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={nav_style}>
                <a className="navbar-brand" href="/" style={nav_link_style}>JSBBank</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">


                        { ! localStorage.getItem('jwtToken') &&
                            <li className="nav-item">
                                <a className="nav-link" href="/login" style={nav_link_style}>Login</a>
                            </li>
                        }

                        { ! localStorage.getItem('jwtToken') &&
                            <li className="nav-item">
                                <a className="nav-link" href="/register" style={nav_link_style}>Register</a>
                            </li>
                        }

                        { localStorage.getItem('jwtToken') &&
                            <li className="nav-item">
                                <a type="button" className="nav-link" style={nav_link_style}  onClick={e => { e.preventDefault(); {localStorage.removeItem('jwtToken'); localStorage.removeItem('email'); history.push("/login"); window.location.reload(); }}}>Logout</a>
                            </li>
                        }

                        {role.have &&
                            <li className="nav-item">
                                <span  className="nav-link moderator" style={nav_link_style} onClick={e => { e.preventDefault(); openNav()}}>Moderator</span>
                            </li>
                        }

                        { localStorage.getItem('email') &&
                            <li className="nav-item profile_link">
                                <a type="button" className="nav-link" style={nav_link_style}>{localStorage.getItem('email')}</a>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
            <ModeratorMain />
        </div>
    )
}

export default Header
