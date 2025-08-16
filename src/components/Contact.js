import React, { Component } from 'react';
import { Container, Card, Navbar } from 'react-bootstrap';

class Contact extends Component {
  state = {
    phone: "91+ 7385773322",
    address: "khed shivapur, pune"
  };

  render() {
    return (
      <>
        {/* Simple Navbar with only Contact */}
        <Navbar bg="dark" variant="dark" className="justify-content-center">
          <Navbar.Brand>Contact</Navbar.Brand>
        </Navbar>

        <Container className="my-4">
       
          <Card className="text-center">
            <Card.Img
              variant="top"
              src="https://img.freepik.com/premium-vector/avatar-girl-contact-us-information-service-vector-illustration_1195-555.jpg"
              style={{ width: "200px", height: "200px", marginLeft: "auto", marginRight: "auto" }}
            />
            <Card.Body>
              <Card.Text><b>Phone:</b> {this.state.phone}</Card.Text>
              <Card.Text><b>Address:</b> {this.state.address}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}

export default Contact;
