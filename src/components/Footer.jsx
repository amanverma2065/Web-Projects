import React from "react";

const Footer = () => {
    return(
        <>
            <div className="container-fluid bg-black py-5">
                <div className="container" style={{maxWidth:'80%'}}>
                    <p style={{color:'grey'}}>Questions? Call <span style={{cursor:'pointer'}}><u>000-800-919-1694</u></span></p>
                    <div className="row">
                        <div className="col-md-3 col-sm-6" >
                            <p style={{color:'grey', cursor:'pointer'}}><u>FAQ</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Investor Relations</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Privacy</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Speed Test</u></p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <p style={{color:'grey', cursor:'pointer'}}><u>Help Centre</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Jobs</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Cookie Preferences</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Legal Notices</u></p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <p style={{color:'grey', cursor:'pointer'}}><u>Account</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Ways to Watch</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Corporate Information</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Only on Netflix</u></p>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <p style={{color:'grey', cursor:'pointer'}}><u>Media Centre</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Terms of Use</u></p>
                            <p style={{color:'grey', cursor:'pointer'}}><u>Contact Us</u></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;