import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Trajerojo from "../images/trajerojo.png";
import "../styles/Banner.css";
export default function Banner() {
  return (
    <Container fluid className="Banner">
      <Row>
        <Col>
          <div className="center">
            <h1> Suited for a king </h1>
            <Button
              className="btn-grad"
              variant="secondary"
              style={{
                marginTop: "2rem",
              }}
            >
              {" "}
              Request An Appointment
            </Button>
          </div>
        </Col>
        <Col>
          <img src={Trajerojo} alt="Red custom suit" />
        </Col>
      </Row>
    </Container>
  );
}
