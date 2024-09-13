import React from "react";
import feature2 from './feature-2.png';

const Card2 = () => {
    return (
        <>
            <div className="container-fluid bg-black d-flex justify-content-center align-items-center p-5" style={{ minHeight: '60vh' }}>
                <div className="row">
                    <div className="container-fluid col-lg-6 col-md-6 d-flex justify-content-center align-items-center" >
                        <img src={feature2} alt="" style={{width:'80%', objectFit:'contain'}}/>
                    </div>
                    <div className="container-fluid col-lg-6 col-md-6 p-5" style={{ objectFit: 'contain' }}>
                        <h1 style={{ fontWeight: '800' }}>Download your shows to watch offline</h1>
                        <p className="fs-5 mt-3">Save your favourites easily and always have something to watch.</p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Card2;