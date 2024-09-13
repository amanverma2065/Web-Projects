import React from "react";
import './navbar.css';
import navlogo from './netflixpng.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="container-fluid inner-container px-lg-5 px-3 py-3 d-flex align-items-center " >
                    <Link to='/'><img className="logo-img" src={navlogo} alt="logo" /></Link>
                    <Link to='/login'><div className="btn signin-btn" >Sign In</div></Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;