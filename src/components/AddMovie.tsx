import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  ReactElement,
  SetStateAction,
  useState,
} from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

import "./AddMovie.css";
import { startMovies } from "../Data";
import { IMovieInfo } from "../Interfaces";

interface AddMovieProps {
  onAddMovie: (newMovie: IMovieInfo) => void
}

export function AddMovie({onAddMovie}:AddMovieProps): ReactElement {
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [genre, setSelectedGenre] = useState<string>("Drama");
  const [description, setDescription] = useState<string>("");

  //handle all inputa dn changes
  const handleOnChangeTitle: ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.target.value);
  };

  const handleOnChangeRating: ChangeEventHandler<HTMLInputElement> = (e) => {
    setRating(parseInt(e.target.value));
  };

  const handleSelectGenre = (eventKey: string | null) => {
    if (eventKey) {
      setSelectedGenre(eventKey);
    }
  };


  const handleOnChangeDescription: ChangeEventHandler<HTMLInputElement> = (e) => {
    setDescription(e.target.value);
  };


  
  const handleClickEdit: MouseEventHandler<HTMLButtonElement> = () => {
    //clear our form 
    setTitle("")
    setRating(0)
    setSelectedGenre("")
    setDescription("")
  };

  const handleClickAdd: MouseEventHandler<HTMLButtonElement> = () => {
    //add to our arry the movice data which we imported from data
    
    const newMovie: IMovieInfo = {
      id:  new Date().getTime(),
      title: title,
      rating: rating,
      genre: genre,
      description: description,
    };
  
    onAddMovie(newMovie);
     //clear our form after added too
     setTitle('');
     setRating(0);
     setSelectedGenre('Drama');
     setDescription('');
    

  };




  return (
    <Form className="form">
      <Form.Group as={Row} className=" mb-4" controlId="formText">
        <Form.Label column sm="1" className="me-5">
          Title
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            placeholder=""
            onChange={handleOnChangeTitle}
            value={title}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formRanget">
        <Form.Label column sm="1" className="me-5">
          Range
        </Form.Label>
        1
        <Col sm="9">
          <Form.Range
            min={1}
            max={5}
            onChange={handleOnChangeRating}
            value={rating}
          />
        </Col>
        5
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formGenre">
        <Form.Label column sm="1" className="me-5">
          Genre
        </Form.Label>
        <Col sm="10">
          <DropdownButton
            id="dropdown"
            variant="secondary"
            title={genre}
            onSelect={handleSelectGenre}
          >
            <Dropdown.Item eventKey="Action">Action</Dropdown.Item>
            <Dropdown.Item eventKey="Animated">Animated</Dropdown.Item>
            <Dropdown.Item eventKey="Fantasy">Fantasy</Dropdown.Item>
            <Dropdown.Item eventKey="Science Fiction">
              Science Fiction
            </Dropdown.Item>
            <Dropdown.Item eventKey="Mystery">Mystery</Dropdown.Item>
            <Dropdown.Item eventKey="Romantic Comedy">
              Romantic Comedy
            </Dropdown.Item>
          </DropdownButton>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-4" controlId="formDescription">
        <Form.Label column sm="1" className="me-5">
          Description
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="textarea"
            rows={10}
            onChange={handleOnChangeDescription}
            value={description}
          />
        </Col>
      </Form.Group>

      <div className="formbutton mb-5">
        <Button variant="warning" className="mx-5" onClick={handleClickEdit}>
          Clear
        </Button>{" "}
        <Button variant="success" className="mx-5" onClick={handleClickAdd}>
          Add
        </Button>{" "}
      </div>
    </Form>
  );
}
