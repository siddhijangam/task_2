import React, { Component } from "react";
import { Container, Card, Navbar, Row, Col } from "react-bootstrap";

class Services extends Component {
  render() {
    const { service1, service2, service3 } = this.props.serviceData;

    return (
      <> 
     
           <Navbar bg="dark" variant="dark" className="justify-content-center">
              <p style ={{ color: 'white', fontSize: '26px'}}>Services</p>
              </Navbar>

        
        <Container className="my-4">
          <h2 className="text-center mb-4">Our Services</h2>
          <Row className="g-4 justify-content-center">

           
            <Col md={4}>
              <Card className="text-center p-3">
                <img
                  src="https://icons.veryicon.com/png/o/internet--web/multi-color-fill-business-enterprise-ppt-icon/development-2.png"
                  style={{ width: "150px", height: "150px", margin: "0 auto 10px auto" }}
                  alt="Service1"
                />
                <h5>{service1}</h5>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center p-3">
                <img
                  src="https://img.freepik.com/premium-vector/mobile-app-development-line-icon-isolated-white-background_268104-5494.jpg"
                  style={{ width: "150px", height: "150px", margin: "0 auto 10px auto" }}
                  alt="Service2"
                />
                <h5>{service2}</h5>
              </Card>
            </Col>

            
            <Col md={4}>
              <Card className="text-center p-3">
                <img
                  src="https://cdn-icons-png.freepik.com/256/12003/12003920.png?semt=ais_white_label"
                  style={{ width: "150px", height: "150px", margin: "0 auto 10px auto" }}
                  alt="Service3"
                />
                <h5>{service3}</h5>
              </Card>
            </Col>

          </Row>
        </Container>
      </>
    );
  }
}

export default Services;
