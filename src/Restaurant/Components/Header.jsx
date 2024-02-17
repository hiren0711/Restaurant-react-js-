import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            {/* Navbar & Hero Start */}
            <div className="container-xxl position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <NavLink href className="navbar-brand p-0">
                        <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Restoran</h1>
                        {/* <img src="img/logo.png" alt="Logo"> */}
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0 pe-4">
                            <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                            <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/Service" className="nav-item nav-link">Service</NavLink>
                            <NavLink to="/Menu" className="nav-item nav-link">Menu</NavLink>
                            <div className="nav-item dropdown">
                                <NavLink to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                <div className="dropdown-menu m-0">
                                    <NavLink to="/Booking" className="dropdown-item">Booking</NavLink>
                                    <NavLink to="/Team" className="dropdown-item">Our Team</NavLink>
                                    <NavLink to="/Testimonial" className="dropdown-item">Testimonial</NavLink>
                                </div>
                            </div>
                            <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <NavLink to className="btn btn-primary py-2 px-4">Book A Table</NavLink>
                    </div>
                </nav>
               
            </div>

          
        </div>
    )
}

export default Header