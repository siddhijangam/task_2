import React, { Component } from 'react';
import { Container, Card, Navbar } from 'react-bootstrap'; 

class Contact extends Component {
  state = {
    phone: "91+ 7385773322",
    address: "Khed Shivapur, Pune"
  };

  render() {
    return (
      <>
        
        <Navbar bg="dark" variant="dark" className="justify-content-center">
        <p style ={{ color: 'white', fontSize: '26px'}}>Contact</p>
        </Navbar>
       
        <Container className="my-4 d-flex justify-content-center">
          <Card className="text-center p-3" style={{ width: "1200px"}}>
            <img
              src="https://img.freepik.com/premium-vector/avatar-girl-contact-us-information-service-vector-illustration_1195-555.jpg"
              alt="Contact"
              style={{ width: "200px", height: "200px", margin: "0 auto 15px auto" }}
            />
            <h5><b>Phone:</b> {this.state.phone}</h5>
            <h5><b>Address:</b> {this.state.address}</h5>
          </Card>
        </Container>
      </>
    );
  }
}

export default Contact;
