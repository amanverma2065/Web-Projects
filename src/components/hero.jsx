import React from "react";
import './hero.css';
import Navbar from "./navbar";
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <>
            <div className="container-fluid main-container">
                <Navbar />
                <div className="row d-flex justify-content-center align-items-center" style={{height:'70vh'}}>
                    <div className="hero-inner col-md-8 text-center" >
                        <h1 className="mb-4 ">Enjoy big movies, hit series and more from ₹149.</h1>
                        <p className="para1 mb-4">Join today.Cancel anytime.</p>
                        <p className="para2 mb-4">Ready to watch? Just sign in or create an account to enjoy.</p>
                        <Link to='/movies'><div className="btn start-btn py-2 px-4 mb-3">Explore</div></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;