
import MovieList from './Component/MovieList';
import { useState } from 'react';
import './App.css';
import { moviesData } from './Component/MovieData';
import Navbarr from './Component/Navbarr';
import AddMovies from './Component/AddMovies';


function App() {
  const [movies, setMovies ] = useState (moviesData)
  const add = (newMovie) => {
    setMovies([...movies,newMovie])
    
  }
  const [InputSearch , setInputSearch] = useState("")
  return (
    
    <div className="App">
     <Navbarr InputSearch={InputSearch} setInputSearch={setInputSearch}/>
     <MovieList movies={movies} InputSearch={InputSearch}/>
     <AddMovies add={add} /> 
     
    </div>
  );
}

export default App;
