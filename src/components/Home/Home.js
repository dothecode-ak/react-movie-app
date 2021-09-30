import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import movieApi from '../../common/api/movieApi';
import { movieApiKey } from '../../common/api/movieApiKey';
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movie/movieSlice';
const Home = () => {
    const movieText = 'Harry';
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieApi.get(`?apiKey=${movieApiKey}&s=${movieText}&type=movie`).catch((err) => {
                console.log('Error', err);
            });
            dispatch(addMovies(response.data));
        }
        fetchMovies();
    });
    return (<>
        <div className="banner-img">
            <MovieListing />
        </div>
    </>);
}

export default Home;