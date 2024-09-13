import React from "react";
import icon from './favourite.png';

const MovieComponent = (props) => {


    return (
        <>
            <div className="container-fluid m-1" style={{ padding: '0', borderRadius: '5px', objectFit: 'contain' }}>

                <div className="container-fluid" style={{ padding: '0', position: 'relative' }}>
                    <img src={`https://image.tmdb.org/t/p/original${props.movieImg}`} alt="{props.movieTitle}" style={{ minWidth: '120px', maxWidth: '30vw', borderRadius: '10px' }} />
                    <div className="container-fluid" style={{ padding:'0',position: 'absolute', left: '0', height:'100%', width:'100%',background:'linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3))', top:'0' }}>
                        <img src={icon} alt="icon" className="m-2" style={{minWidth:'15px', maxWidth:'2.4vw'}}/>
                    </div>
                </div>

                <p className="text-center px-3" style={{ fontSize: 'clamp(10px, 1.3vw, 1.3vw)' }}>{props.movieTitle}</p>
            </div>
        </>
    );
};

export default MovieComponent;