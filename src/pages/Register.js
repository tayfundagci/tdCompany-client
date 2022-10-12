import React from 'react'

function Register() {
    return (
        <div id="register">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">
                            <form className="form" >
                                <h3 className="text-center text-info">Register</h3>
                                <div className="form-group mt-3">
                                    <label htmlFor="email" className="text-info">Email:</label><br />
                                    <input type="text" name="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="text-info">Confirm Email:</label><br />
                                    <input type="text" name="email" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Password:</label><br />
                                    <input type="text" name="password" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="text-info">Confirm Password:</label><br />
                                    <input type="text" name="password" className="form-control" />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div className="form-group">
                                        <button id='new-company' className='btn btn-info btn-md' style={{ padding: "10px 30px" }}>Register</button>
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