import React from "react";
import "./FormDisplay.css";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import "./FormDisplay.css";

function FormDisplay() {
  return (
    <>
      {/* <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> */}
      <header className="bgHead p-5 container-fluid">
        <Row className="m-2 p-2 justify-content-md-center">
          <Col xs md="4">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Departure"
                aria-label="from where"
                className="border border-dark"
              />
            </InputGroup>
          </Col>
          <Col md="auto">
            <h1 className="justify-content-center">&#8826; &#8827;</h1>
          </Col>
          <Col xs md="4">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Destination"
                aria-label="to where"
                className="border border-dark"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className="m-2 p-2 justify-content-md-center">
          <Col xs sm="2">
            <InputGroup className="mb-3">
              <FormControl
                type="date"
                placeholder="From"
                aria-label="from wich date"
                size="sm"
                className="border border-dark"
              />
            </InputGroup>
          </Col>
          <Col md="1"></Col>
          <Col xs sm="2">
            <InputGroup>
              <FormControl
                type="date"
                placeholder="to"
                aria-label="until when"
                size="sm"
                className="border border-dark"
              />
            </InputGroup>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col md="auto">
            <Button
              type="submit"
              value="Submit"
              size="md"
              variant="light"
              className="border border-dark justify-content-center"
            >
              Search
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </header>
    </>
  );
}

export default FormDisplay;
