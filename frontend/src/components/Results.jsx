import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import box from "../assets/img/box.png";

function Results() {
  return (
    <>
      <Container className="card-group bg-light mx-auto p-2 border border-light rounded-right-top rounded-left-bottom shadow-sm">
        <Card>
          <Card.Body className="d-flex align-content-center flex-wrap">
            <Row>
              <Col xs>
                <Image src={box} />
              </Col>
              <Col xs>
                <h3>6.30</h3>
                <p>DUS</p>
              </Col>
              <Col xs></Col>
              <Col xs id="">
                <h3>6.30</h3>
                <p>DUS</p>
              </Col>
            </Row>
            <Row>
              <Col xs>
                <Image src={box} />
              </Col>
              <Col xs>
                <h3>6.30</h3>
                <p>DUS</p>
              </Col>
              <Col xs></Col>
              <Col xs>
                <h3>6.30</h3>
                <p>DUS</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card md="auto ">
          <Card.Body className="d-flex align-content-center flex-wrap">
            <div>
              <Card.Title>230€</Card.Title>
              <Button variant="primary">Select</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Results;
