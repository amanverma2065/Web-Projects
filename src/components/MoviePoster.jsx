import React, { useEffect, useState } from "react";
import apiObject from "../pages/movieApi";
import { Link } from 'react-router-dom';
import navlogo from "./netflixpng.png";

const MoviePoster = () => {

    const fetchApiData = async (api) => {
        try {
            const response = await fetch(api);
            const resData = await response.json();
            const movieData = resData.results;
            const movie = movieData[Math.floor(Math.random() * movieData.length)];
            setRandomMovie(movie);

        } catch (error) {
            console.log(error);
        }
    }

    const [randomMovie, setRandomMovie] = useState({});

    const truncate = (str, length) => {
        if (!str) {
            return ("");
        }
        else {
            if (str.length > length) {
                return (str.slice(0, length) + "...");
            }
        }
    }

    useEffect(() => {
        fetchApiData(apiObject.popular);
    }, []);

    const { title, backdrop_path, release_date, overview } = randomMovie;

    return (
        <>
            <div className="container-fluid" style={{ objectFit: 'cover', padding: "0", position: 'relative' }}>
                <nav className="navbar" style={{ width: '100vw', position:'absolute', zIndex:'1' }}>
                    <div className="container-fluid inner-container px-lg-5 px-3 py-3 d-flex align-items-center" style={{ width: '100vw' }} >
                        <Link to='/'><img className="logo-img" src={navlogo} alt="logo" /></Link>
                    </div>
                </nav>

                <div className="container-fluid" style={{ padding: "0", objectFit: 'cover', maxHeight: '80vh' }}>

                    <img src={`https://image.tmdb.org/t/p/original/${backdrop_path}`} alt="image" style={{ minHeight: '50vh', maxHeight: '80vh', width: '100%' }} />

                    <div className="container-fluid px-lg-5 px-3 d-flex align-items-end" style={{ padding: '0', position: 'absolute', bottom: '0', boxShadow: 'inset 140px 140px 200px rgba(0, 0, 0, 0.6),inset -140px -140px 200px rgba(0, 0, 0, 0.6)', height: 'clamp(30vh, 80vh,80vh)' }}>
                        <div className="container-fluid" style={{padding:'0'}}>
                            <h1 className="mb-3" style={{ fontSize: 'clamp(15px, 4vw, 6vw)' }}>{title}</h1>
                            <div className="mb-3">
                                <div className="btn me-3" style={{ color: 'white', border: '1px solid white', borderRadius: '0', fontSize: 'clamp(10px, 1.3vw, 1.3vw)' }}>Play</div>
                                <div className="btn" style={{ color: 'white', border: '1px solid white', borderRadius: '0', fontSize: 'clamp(10px, 1.3vw, 1.3vw)' }}>Watch Later</div>
                            </div>
                            <p className="mb-1" style={{ fontSize: 'clamp(10px, 1.3vw, 1.3vw)' }}>{release_date}</p>
                            <p style={{ fontSize: 'clamp(10px, 1.3vw, 1.3vw)' }}>{truncate(overview, 165)}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default MoviePoster;