import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../redux/auth/services';

function Register() {
    const [name, setName] = React.useState("");
    const [confirmName, setConfirmName] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        if (name === confirmName && password === confirmPassword) {
            dispatch(userRegister({
                username: name,
                password: password
            })).then(() => {
                navigate("/")
            })
        }
        else {
            alert("Name or password does not match");
        }
    }


    return (
        <div id="register">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" >
                                <h3 className="text-center text-info">Register</h3>
                                <div className="form-group mt-3">
                                    <label htmlFor="email" className="text-info">Username:</label><br />
                                    <input type="text" name="username" className="form-control" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-info">Confirm Username:</label><br />
                                    <input type="text" name="username" className="form-control" onChange={(e) => setConfirmName(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Confirm Password:</label><br />
                                    <input type="password" name="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="form-group">
                                        <button id='new-company' className='btn btn-info btn-md' style={{ padding: "10px 30px" }} onClick={register}>Register</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register