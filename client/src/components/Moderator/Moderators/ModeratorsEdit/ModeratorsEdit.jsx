import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';
import { useState,  useEffect } from 'react';
import './ModeratorsEdit.css';


function ModeratorsEdit() {
    const MODERATOR_GET_API = "http://localhost:8000/get_user";
    const ROLES_GET_API = "http://localhost:8000/roles/get_roles";
    let match = useRouteMatch();

    const [moderator, setModerator] = useState({});
    const getModerator = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(MODERATOR_GET_API+`?id=${match.params.id}`, {headers: headers}).then(res => {
            setModerator(res.data)
        });
    }

    useEffect(() => {
        getModerator();
    }, {});


    const [roles, setRoles] = useState([]);
    const getRoles = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        axios.get(ROLES_GET_API+`?id=${match.params.id}`, {headers: headers}).then(res => {
            setRoles(res.data)
        });
    }

    useEffect(() => {
        getRoles();
    }, []);


    const SET_ROLE_API = "http://localhost:8000/roles/set_role_to_user";
    const history = useHistory();

    const UpdateRole = (role) => {
        const newRole = {
            id: match.params.id,
            role: role
        }

        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        // alert(headers.Authorization)

        axios.post(SET_ROLE_API, newRole , {headers: headers})
          .then(res => {
            alert('Успешно');
            history.push(`/god_mode/moderator/${match.params.id}`);
        }).catch(err=> {
            alert("Вышла ошибка");
        })
    }

    return (
        <div className='container-fluid row'>
            <div className="col-6">
                <img className='avatar_img' src='/images/avatars/avatar_default.jpeg' />
                <div className='moderator_form mt-3'>
                    <div class="form-group">
                        <label for="name">Полное имя</label>
                        <p class="form-control"> {moderator.full_name}</p>
                    </div>
                    <div class="form-group">
                        <label for="description">Почта</label>
                        <p class="form-control"> {moderator.email} </p>
                    </div>
                    <div class="form-group">
                        <label for="loan_rate">ИИН</label>
                        <p class="form-control"> {moderator.iin} </p>
                    </div>
                </div>
            </div>
            <div>

            <h2 className="mb-5">Roles:</h2>
            <div className="moderator_form_div">
            {roles.map((role) => 
                <form className='moderator_form mt-3' onSubmit={e => { UpdateRole(role.role)}}>
                    <div className="row">
                        <div className="col-8">
                            <p className="role_text">{role.role}</p>
                        </div>
                        
                        <div className="col-4">
                        {role.have ?
                            <button type="submit" class="btn btn-success">+</button>
                            :
                            <button type="submit" class="btn btn-danger">-</button>
                        }
                        </div>
                    </div>
                </form>
            )}
            </div>
            </div>
        </div>
    )
}

export default ModeratorsEdit
