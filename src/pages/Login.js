import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../redux/auth/services';

function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(userLogin({
            username: username,
            password: password
        })).then(() => {
            navigate("/")
        })
    }

    return (
        <div id="login">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" >
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group mt-3">
                                    <label htmlFor="email" className="text-info">Username:</label><br />
                                    <input type="text" name="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                    <input type="password" name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="form-group">
                                        <button id='new-company' className='btn btn-md' style={{ padding: "10px 30px" }} onClick={handleLogin}>Login</button>
                                    </div>
                                    <div id="register-link" className="text-right">
                                        <Link to="/register" className="text-info">Register here</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login