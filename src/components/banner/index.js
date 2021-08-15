import React, {useEffect, useState} from 'react'
import './banner.css'
import axios from '../../axios';
import requests from '../../request';
function Banner() {
    const[movie, setMovie] = useState([])
    function truncate(string,n){
        return string?.length > n ? string.substr(0,n - 1) + '...' : string
    }

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            const moviesBanner =  request.data.results.filter( x => x.backdrop_path != null)
            setMovie(
                moviesBanner[
                    Math.floor(Math.random() * moviesBanner.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    },[])
    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            // backgroundPosition: "center center",
            objectFit:"contain"
        }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                   {
                       truncate(movie?.overview)
                   } 
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner
