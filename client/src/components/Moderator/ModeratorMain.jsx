import React from 'react';
import './ModeratorMain.css';


function ModeratorMain() {
    /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }

        
    return (
        <div>
            <div id="mySidenav" class="sidenav">
                <a href="javascript:void(0)" class="closebtn"  onClick={e => { e.preventDefault(); closeNav()}}>&times;</a>
                <a href="/got_mode/programs">Programs</a>
                <a href="/got_mode/moderators">Moderators</a>
            </div>
            <div id="main">
            </div>
        </div>
    )
}

export default ModeratorMain
