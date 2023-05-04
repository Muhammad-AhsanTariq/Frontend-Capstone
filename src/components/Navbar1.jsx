import React from 'react';
import Button from 'react-bootstrap/Button';

 import { NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
       
        <div className="container-fluid position-fixed nav-color mt-0">
     
        <nav className=" nav navbar navbar-expand-lg navbar-light fw-medium pt-2">
            <div className="container d-flex align-items-center">
                <img src="https://quiety.themetags.com/assets/img/logo-color.png" alt="logoImg" />

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar"
                    aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbar">
                    <ul className="navbar-nav col-12 col-md-auto justify-content-center main-menu">
                        <li className="nav-item mx-2">
                            <a className="nav-link " aria-current="page" href="/" ><NavLink to='/home' className="text-secondary text-decoration-none"> Home </NavLink></a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/" >Services</a>
                        </li>
                        <li className="nav-item dropdown mx-2">
                            <a className="nav-link dropdown-toggle" href="/"  role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">Resources</a>
                            <div className="dropdown-menu border-0 rounded-custom shadow py-0 bg-white">
                                <div className="dropdown-grid rounded-custom width-full-3">
                                    <div className="dropdown-grid-item list-unstyled px-3">
                                        <h6 className="drop-heading">Reusable Section</h6>

                                        <a href="/"  className="dropdown-link">

                                            <div className="drop-title">Testimonials</div>
                                        </a>
                                        <a href="/"  className="dropdown-link">
                                        
                                            <div className="drop-title">Call to Action</div>
                                        </a>
                                        <a href="/"  className="dropdown-link">

                                            <div className="drop-title">Tab Style</div>
                                        </a>
                                        <a href="/"  className="dropdown-link">

                                            <div className="drop-title">Services</div>
                                        </a>
                                        <a href="/"  className="dropdown-link">

                                            <div className="drop-title">Header</div>
                                        </a>
                                        <a href="/"  className="dropdown-link">

                                            <div className="drop-title">Help Center</div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/" >Prices</a>
                        </li>

                        <li className="nav-item mx-2">
                            <a className="nav-link" href="/" >Company</a>
                        </li>
                    </ul>

                </div>

                <div className="collapse navbar-collapse justify-content-end me-5 mt-2" id="navbar">

                    <Button variant="link" className="nav-link d-inline ps-2 " href=""> <NavLink to='/login' className="text-decoration-none"> Sign In  </NavLink> </Button>
                    <Button className="btn btn-primary d-inline ms-3 " href="" ><NavLink to= '/signUp' className="text-decoration-none  btn-primary text-white  "> Sign up  </NavLink> </Button>

                </div>
            </div>
        </nav>
    </div>
    );
  }


