import React from 'react';
import axios from "axios";
import './ModeratorMain.css';
import { useState,  useEffect } from 'react';



function ModeratorMain() {
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
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
        checkRole("ROLE_ADMIN");
    }, []);

    console.log("role =");
    console.log(role)

    return (
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn"  onClick={e => { e.preventDefault(); closeNav()}}>&times;</a>
                <a href="/god_mode/programs">Programs</a>
                {role.have &&
                    <a href="/god_mode/moderators">Moderators</a>
                }
            </div>
            <div id="main">
            </div>
        </div>
    )
}

export default ModeratorMain
