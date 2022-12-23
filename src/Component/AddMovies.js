import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const AddMovies = ({add}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    const [title , setTitle] = useState("")
    const [rate , setRate] = useState("")
    const [description , setDescription] = useState("")
    const [posterUrl , setPosterUrl] = useState("")
    //target
    const handleTitle = (e)=> {
      setTitle(e.target.value)
    }
    const handleRate = (e)=> {
      setRate(e.target.value)
    }
    const handleDescription = (e)=> {
      setDescription(e.target.value)
    }
    const handlePosterUrl = (e)=> {
      setPosterUrl(e.target.value)
    }

const handleAdd = () => {
  let newMovie = {title , rate , description , posterUrl}
  add(newMovie)
}

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <p>- Title :</p>
        <Form.Control type="text" placeholder="title" onChange={(e) => handleTitle(e)} />
        <p>- Rate :</p>
        <Form.Control type="number" placeholder="rate" onChange={(e) => handleRate(e)} />
        <p>- Description :</p>
        <Form.Control type="text" placeholder="description"onChange={(e) => handleDescription(e)}  />
        <p>- PosterUrl :</p>
        <Form.Control type="url" placeholder="posterUrl" onChange={(e) => handlePosterUrl(e)}/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleAdd()}>
            Add movie Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovies
