import React, { useEffect, useState } from "react";
import MovieComponent from "./MovieComponent";

const PopularMovies = (props) => {

    const fetchPosterApi = async (url) => {
        try {
            const response = await fetch(url);
            const responseData = await response.json();
            const movieRow = responseData.results;
            console.log(movieRow);
            setMoviePoster(movieRow);
            console.log(moviePoster);

        } catch (error) {
            console.log(error);
        }
    }

    const [moviePoster, setMoviePoster] = useState([]);


    useEffect(() => {
        fetchPosterApi(props.movieApiii);
    }, []);

    return (

        <>
            <div className="container-fluid bg-black" style={{padding:'0'}}>
                <h1 className="text-black px-lg-5 px-3 pt-4 pb-3 text-white" style={{ fontSize: 'clamp(15px, 2.5vw, 2.5vw)', fontWeight: '700' }}>{props.category}</h1>

                <div className="container-fluid d-flex" style={{ padding:'0',margin:'0',overflowX: 'auto', scrollbarWidth: 'none', width:'auto'}}>
                    {moviePoster.map((user) => {

                        return (
                            <MovieComponent
                                movieTitle={user.title}
                                movieImg={user.backdrop_path}
                                movieDate={user.release_date}
                                movieOverview={user.overview}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default PopularMovies;