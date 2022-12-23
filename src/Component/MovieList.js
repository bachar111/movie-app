import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css'
const MovieList = ({movies , InputSearch}) => {
  return (
    <div className='MovieList'>
    {movies
    .filter(movie => movie.title.toUpperCase().includes(InputSearch.toUpperCase()) )
    .map((movie) => (
        <MovieCard movie={movie} key= {movie.id}/>
    ))}
    </div>
  );
}

export default MovieList
