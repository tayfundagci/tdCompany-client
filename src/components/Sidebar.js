import React from 'react'

function Sidebar() {
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3" id='sidebar'>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <a href="#" className="nav-link" aria-current="page">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link ">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link ">
                        Orders
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link ">
                        Products
                    </a>
                </li>
                <li>
                    <a href="#" className="nav-link ">
                        Customers
                    </a>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="#" className="d-flex align-items-center text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/tayfundagci.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                    <strong>tDagci</strong>
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