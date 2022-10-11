import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav id='navbar' className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">tDCompany</Link>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">

                    </div>
                    <div className=''>
                        <ul className='navbar-nav'>
                            <li className='nav-item'>
                                <Link className='nav-link active' to="/companies">Companies</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link active' to="/employees">Employees</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar