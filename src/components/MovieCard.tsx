import { ReactElement } from "react";
import { IMovieInfo } from "../Interfaces";
import Card from 'react-bootstrap/Card';


import "./MovieCard.css"

interface IMovieInfoProp{
  iteam:IMovieInfo
}

export function MovieCard({iteam}: IMovieInfoProp): ReactElement {
  return (
    <Card  style={{width: "18rem"}}>
      <Card.Body className="">
      <Card.Title className="card-title ">Title: {iteam.title}</Card.Title>
        <Card.Title>Range:{iteam.rating}</Card.Title>
        <Card.Title>Genre:{iteam.genre}</Card.Title>

        <div className="description-container ">
          <Card.Title>Description:</Card.Title>
          <Card.Text className="card-description">
          {iteam.description}
        </Card.Text>
        </div>
       
      </Card.Body>
    </Card>
  );
}
