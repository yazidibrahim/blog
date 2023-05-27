import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";



export default function AddItem() {


        const handleClick = () => {
          alert('submitted');
        };
    
    return (
    <div>
      <Container className="">
        <h1 className="mx-3"> Add Blog</h1><br></br>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Blog Name</Form.Label>
            <Form.Control type="text" name="title"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" name="desc" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author Name</Form.Label>
            <Form.Control type="text" name="image" />
          </Form.Group>

          <Button variant="primary" onClick={handleClick} type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );

}