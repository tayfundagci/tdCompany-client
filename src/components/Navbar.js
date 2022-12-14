import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { dispatch, useSelector } from "react-redux";

function Navbar() {

    const user = localStorage.getItem("user");




    return (
        <div>
            <nav id='navbar' className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-bold" to="/">tDCompany</Link>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    </div>
                    <div className=''>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                {!user ? (<Link className='nav-link ' to="/login"><button type="button" className="btn ">Login</button></Link>) : <Link className='nav-link ' to="/profile"><button type="button" className="btn ">Profile</button></Link>}
                            </li>
                            <li className='nav-item'>
                                {!user && <Link className='nav-link ' to="/register"><button type="button" className="btn ">Register</button></Link>}
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar