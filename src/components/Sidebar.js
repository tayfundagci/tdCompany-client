import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3" id='sidebar'>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            </a>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">
                        Home
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to="/companies" className="nav-link ">
                        Companies
                    </Link>
                </li>
                <li>
                    <Link to="/addcompany" className="nav-link ">
                        Add a New Company
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to="/employees" className="nav-link ">
                        Employees
                    </Link>
                </li>
                <li>
                    <Link to="/addemployee" className="nav-link ">
                        Add a New Employee
                    </Link>
                </li>
                <hr />
                <li>
                    <Link to="/dashboard" className="nav-link ">
                        Dashboard
                    </Link>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/tayfundagci.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                    <strong>Tayfun Dagci</strong>
                </a>
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar