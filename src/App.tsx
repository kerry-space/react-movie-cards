import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbarheader } from './components/Navbarheader'
import { AddMovie } from './components/AddMovie';
import { MovieList } from './components/MovieList';
import { startMovies } from './Data';
import { IMovieInfo } from './Interfaces';
import { useState } from 'react';

function App() {

  const [movies, setMovies] = useState<IMovieInfo[]>(startMovies);

  const handleAddMovie = (newMovie: IMovieInfo) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };
  return (
    <div className='app'>
      <Navbarheader/>
      <main className='main-container'>
        <AddMovie onAddMovie={handleAddMovie}/>
        <MovieList listMovies={movies} />
      </main>
    </div>
  )
}

export default App
