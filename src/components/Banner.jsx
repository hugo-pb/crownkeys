import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import Trajerojo from "../images/trajerojo.png";
import "../styles/Banner.css";
import Vid from "../video/video.MP4";
export default function Banner() {
  return (
    <Container fluid className="Banner">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          zIndex: "-1",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)"
        }}
      >
        <source src={Vid} type="video/mp4" />
      </video>
     
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
    </Container>
  );
}
