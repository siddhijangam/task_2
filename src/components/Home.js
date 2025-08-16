import React from 'react';
import { Container, Card } from 'react-bootstrap';
import NavbarComp from './NavbarComp';

const Home = () => {
  return (
    <>
      <NavbarComp />
      <Container 
        className="my-4 d-flex justify-content-center align-items-center" 
        style={{
          backgroundImage: "url('https://c0.wallpaperflare.com/preview/912/739/608/black-coffee-break-break-time-brewed-coffee.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "400px",
          borderRadius: "10px",
          color: "white",
          textShadow: "1px 1px 4px rgba(0,0,0,0.7)"
        }}
      >
        <Card 
          className="text-center p-4" 
          style={{ backgroundColor: "rgba(255, 255, 255, 0.69)", border: "none" }}
        >
          <Card.Title style={{ fontSize: "2rem", fontWeight: "bold" }}>Welcome to My App</Card.Title>
          <Card.Text style={{ fontSize: "1.2rem" }}>
            This is a simple React app with Bootstrap styling.
          </Card.Text>
        </Card>
      </Container>
    </>
  );
};

export default Home;
