import React from "react";
import video from './featurevideo.mp4';

const Card1 = () => {
    return(
        <>
            <div className="container-fluid bg-black d-flex justify-content-center align-items-center p-5" style={{minHeight:'60vh'}}>
                <div className="row">
                    <div className="container-fluid col-lg-6 col-md-6 p-5" >
                        <h1 style={{fontWeight:'800'}}>Enjoy on your TV</h1>
                        <p className="fs-5 mt-3">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </div>
                    <div className="container-fluid col-lg-6 col-md-6  d-flex justify-content-center align-items-center" style={{objectFit:'contain'}}>
                        <video  src={video} autoPlay loop muted playsInline type="video/mp4" style={{ width:'80%', objectFit: "contain"  }}></video>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Card1;