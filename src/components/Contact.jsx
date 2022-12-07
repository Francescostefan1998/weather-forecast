import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Carousel,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

const Contact = () => {
  return (
    <Container>
      <Form className="mt-5">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
