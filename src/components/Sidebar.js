import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {

    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);

    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        window.location.href = "/";
    }


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
                    {user && user.role == 1 &&
                        <Link to="/addcompany" className="nav-link ">
                            Add a New Company
                        </Link>
                    }
                </li>
                {user && user.role == 1 && <hr />}
                <li>
                    <Link to="/employees" className="nav-link ">
                        Employees
                    </Link>
                </li>
                <li>
                    {user && user.role == 1 &&
                        <Link to="/addemployee" className="nav-link ">
                            Add a New Employee
                        </Link>
                    }
                </li>
                <hr />
                <li>
                    <Link to="/dashboard" className="nav-link ">
                        Dashboard
                    </Link>
                </li>
            </ul>
            <div className="dropdown">
                {user &&
                    <>
                        <hr />
                        <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" alt="" width={32} height={32} className="rounded-circle me-2" />
                            <strong>{user.username}</strong>
                        </a>
                    </>
                }
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a style={{ cursor: "pointer" }} className="dropdown-item" onClick={logout}>Sign out</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar