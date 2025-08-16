import React from 'react';
import { Container, Card, Navbar } from 'react-bootstrap';

const About = ({ userData }) => {
  return (
    <>
      {/* Simple Navbar with only About */}
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Navbar.Brand>About</Navbar.Brand>
      </Navbar>

      <Container className="my-4">
       {/* <h2 className="text-center mb-4">About</h2> */}
        <Card className="text-center">
          <Card.Img
            variant="top"
            src="https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg"
            style={{ width: "300px", height: "300px", marginLeft: "auto", marginRight: "auto" }}
          />
          <Card.Body>
            <Card.Title>{userData.name}</Card.Title>
            <Card.Text><b>Email: </b>{userData.email}</Card.Text>
            <Card.Text><b>Role: </b>{userData.role}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default About;
