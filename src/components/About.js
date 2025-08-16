import React from 'react';
import { Container, Card, Navbar } from 'react-bootstrap';

const About = ({ userData }) => {
  return (
    <>
      
          <Navbar bg="dark" variant="dark" className="justify-content-center">
             <p style ={{ color: 'white', fontSize: '26px'}}>About</p>
             </Navbar>

      
      <Container className="my-4 d-flex justify-content-center">
        <Card className="text-center p-3" style={{width: "1200px" }}>
          <img
            src="https://i.pinimg.com/736x/8c/6d/db/8c6ddb5fe6600fcc4b183cb2ee228eb7.jpg"
            alt="About"
            style={{ width: "300px", height: "300px", margin: "0 auto 15px auto" }}
          />
          <h5>{userData.name}</h5>
          <p><b>Email: </b>{userData.email}</p>
          <p><b>Role: </b>{userData.role}</p>
        </Card>
      </Container>
    </>
  );
};

export default About;
