import React from "react";
import feature3 from './feature-4.png';

const Card3 = () => {
    return(
        <>
            <div className="container-fluid bg-black d-flex justify-content-center align-items-center p-5" style={{minHeight:'60vh'}}>
                <div className="row">
                    <div className="container-fluid col-lg-6 col-md-6 p-5" >
                        <h1 style={{fontWeight:'800'}}>Create profiles for kids</h1>
                        <p className="fs-5 mt-3">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </div>
                    <div className="container-fluid col-lg-6 col-md-6  d-flex justify-content-center align-items-center" style={{objectFit:'contain'}}>
                        <img src={feature3} alt="" style={{width:'80%', objectFit:'contain'}}/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Card3;