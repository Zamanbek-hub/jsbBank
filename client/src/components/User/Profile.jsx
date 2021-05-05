import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';
import { useState,  useEffect } from 'react';

function Profile() {
    const history = useHistory();
    const PROFILE_API = "http://localhost:8000/profile";
    const UPDATE_PROFILE_API = "http://localhost:8000/update_profile";
    const UPDATE_PASSWORD_API = "http://localhost:8000/update_password";
    const [user, setUsers] = useState({});

    const update_form_style = {
        width: "500px",
        marginLeft:"auto",
        marginRight:"auto",
    }

    const update_button_style = {
        width:"100px",
        float:"right",
        backgroundColor:"#091473",
    }


    const getProfile = () => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }
        
        axios.get(PROFILE_API, {headers:headers}).then(res => {
            console.log(res);
            setUsers(res.data);
        });
    }

    

    useEffect(() => {
        getProfile();
    }, {});



    const update_full_name = event => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        let full_name = user.full_name;
        if (full_name != event.target[0].value){
            full_name = event.target[0].value;
        }

        const updateData = {
            full_name: full_name,
            email: user.email,
        }
        
        // console.log("registerData =");
        console.log(updateData);

        axios.post(UPDATE_PROFILE_API,  updateData, {headers:headers} )
        .then(res => {
            setUsers(res.data);
            history.push('profile');
        })
        
        
    }


    const update_password = event => {
        const headers = {
            "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
        }

        const updateData = {
            full_name: user.full_name,
            email: user.email,
            password: event.target[1].value,
            re_password: event.target[2].value,
        }
        
        // console.log("registerData =");
        console.log(updateData);

        axios.post(UPDATE_PASSWORD_API,  updateData, {headers:headers}  )
        .then(res => {
            setUsers(res.data);
            localStorage.removeItem('jwtToken');
            history.push('login');

        })
        
        
    }

    return (
        <div className="container">
            <div>
                <form className="mt-5" style={update_form_style} onSubmit={e => { e.preventDefault(); update_full_name(e)}}>
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h1 className="text-center mb-3 float-left">Update Profile</h1>
                        </div>
                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <p class="form-control bg-white border-left-0 border-md"> {user.email}</p>
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-user text-muted"></i>
                                </span>
                            </div>
                            <input id="full_name" name="full_name" type="text" placeholder={user.full_name} class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div class="form-group col-lg-12 mx-auto mb-0">
                            <button type="submit" className="btn btn-primary py-2" style={update_button_style}>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <div>
                <form className="mt-5" style={update_form_style} onSubmit={e => { e.preventDefault(); update_password(e)}}>
                    <div className="row">
                        <div className="col-lg-12 mb-4">
                            <h1 className="text-center mb-3 float-left">Update Password</h1>
                        </div>
                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i class="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="old_password" type="password" name="old_password" placeholder="Old Password" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password"  type="password" name="password"  placeholder="New Password" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="re_password"  type="password" name="re_password"  placeholder="Re New Password" class="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div class="form-group col-lg-12 mx-auto mb-0">
                            <button type="submit" className="btn btn-primary py-2" style={update_button_style}>
                                Update
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile
