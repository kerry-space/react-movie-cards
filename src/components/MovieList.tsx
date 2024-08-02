import { ReactElement } from "react";
import { MovieCard } from "./MovieCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./MovieList.css"
import { IMovieInfo } from "../Interfaces";

interface IListMoviesProp{
    listMovies: IMovieInfo[]
}


export function MovieList({listMovies}:IListMoviesProp ):ReactElement{
    return(
      <div className="movielist">
      {listMovies.map((movie) => (
        <div className="card-item" key={movie.id}>
          <MovieCard iteam={movie} />
        </div>
      ))}
    </div>
    )
}

