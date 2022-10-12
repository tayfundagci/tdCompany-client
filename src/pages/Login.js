import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div id="login">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" >
                                <h3 className="text-center text-info">Login</h3>
                                <div className="form-group mt-3">
                                    <label htmlFor="email" className="text-info">Email:</label><br />
                                    <input type="text" name="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                    <input type="text" name="password" className="form-control" />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="form-group">
                                        <button id='new-company' className='btn btn-md' style={{ padding: "10px 30px" }}>Login</button>
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