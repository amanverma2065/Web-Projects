import React from "react";
import MoviePoster from "../components/MoviePoster";
import PopularMovies from "../components/PopularMovies";
import apiObject from "./movieApi";

const Movies = () => {
    return(
        <>
            <>
                <MoviePoster />
                <PopularMovies 
                    movieApiii={apiObject.topRated}
                    category="Top Rated"
                />
                <PopularMovies 
                    movieApiii={apiObject.trending}
                    category="Trending"
                />
                <PopularMovies 
                    movieApiii={apiObject.upcoming}
                    category="Upcoming"
                />
            </>
        </>
    );
};

export default Movies;