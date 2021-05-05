import React from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';


function Login() {
    const LOGIN_API = "http://localhost:8000/auth";
    const history = useHistory();

    const login_form_style = {
        width: "500px",
        marginLeft:"auto",
        marginRight:"auto",
    }

    const login_button_style = {
        width:"100px",
        float:"right",
        backgroundColor:"#091473",
    }

    const input_style = {
        // borderRight: '0px',
        // borderLeft: '0px',
        // borderTop: '0px'
    }



    const login = event => {
        const loginData = {
            email: event.target[0].value,
            password: event.target[1].value,
        }

        axios.post(LOGIN_API,  loginData )
          .then(res => {
            localStorage.setItem('jwtToken', res['data']['jwtToken']);
            localStorage.setItem('email', loginData.email);
            history.push("")
        }).catch(err=> {
            console.log(err)
            alert("Invalid username or login");
        })
    }


    return (
        <div className="container">
            <div>
                <form className="mt-5" style={login_form_style} onSubmit={e => { e.preventDefault(); login(e)}}>
                    <div className="row">
                        <div className="col-lg-12 mb-4 text-center">
                            <h1 className="text-center mb-3 float-left">Вход</h1>
                        </div>
                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend" style={input_style}>
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-envelope text-muted"></i>
                                </span>
                            </div>
                            <input id="email" type="email" name="email" style={input_style} placeholder="Email Address" className="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="input-group col-lg-12 mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text bg-white px-4 border-md border-right-0">
                                    <i className="fa fa-lock text-muted"></i>
                                </span>
                            </div>
                            <input id="password" type="password" name="password" style={input_style} placeholder="Password" className="form-control bg-white border-left-0 border-md" />
                        </div>

                        <div className="form-group col-lg-12 mx-auto mb-0">
                            <button type="submit" className="btn btn-primary py-2" style={login_button_style}>
                                Login
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
