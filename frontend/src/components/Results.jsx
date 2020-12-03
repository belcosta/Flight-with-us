import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import box from "../assets/img/box.png";

function Results() {
  return (
    <>
      <Container
        className="card-group bg-light mx-auto p-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
      >
        <Card>
          <Card.Body className="d-flex align-content-center flex-wrap">
            <Row>
              <Col xs id="">
                <Image src={box} />
              </Col>
              <Col xs id="">
                <h3>6.30</h3>
                <p>DUS</p>
              </Col>
              <Col xs className="justify-content-center">
                &#8827;
              </Col>
              <Col xs id="">
                <h3>6.30</h3>
                <p>DUS</p>
              </Col>
            </Row>
            {/*  <Row>
                            <Col xs>
                                <Image src={box} />
                            </Col>
                            <Col xs>
                                <h3>6.30</h3>
                                <p>DUS</p>
                            </Col>
                            <Col xs className="justify-content-center">
                                &#8826;
                            </Col>
                            <Col xs>
                                <h3>6.30</h3>
                                <p>DUS</p>
                            </Col>
                        </Row> */}
          </Card.Body>
        </Card>
        <Card md="auto ">
          <Card.Body className="d-flex align-content-center justify-content-center flex-wrap">
            <div className="m-2  align-content-center justify-content-center">
              <Card.Title id="totalPrice">
                <h1 id="">2330€</h1>
              </Card.Title>
              <Button variant="primary">Select this option</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Results;
