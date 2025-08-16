import React, { Component } from "react";
import { Container, Card, Navbar, Row, Col } from "react-bootstrap";

class Services extends Component {
  render() {
    const { service1, service2, service3 } = this.props.serviceData;

    return (
      <>
        {/* Simple Navbar with only Services */}
        <Navbar bg="dark" variant="dark" className="justify-content-center">
          <Navbar.Brand>Services</Navbar.Brand>
        </Navbar>

        {/* Services Section */}
        <Container className="my-4">
          <h2 className="text-center mb-4">Our Services</h2>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src="https://icons.veryicon.com/png/o/internet--web/multi-color-fill-business-enterprise-ppt-icon/development-2.png"
                  style={{ width: "150px", height: "150px", margin: "20px auto" }}
                />
                <Card.Body>
                  <Card.Title>{service1}</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src="https://img.freepik.com/premium-vector/mobile-app-development-line-icon-isolated-white-background_268104-5494.jpg"
                  style={{ width: "150px", height: "150px", margin: "20px auto" }}
                />
                <Card.Body>
                  <Card.Title>{service2}</Card.Title>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src="https://cdn-icons-png.freepik.com/256/12003/12003920.png?semt=ais_white_label"
                  style={{ width: "150px", height: "150px", margin: "20px auto" }}
                />
                <Card.Body>
                  <Card.Title>{service3}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Services;
