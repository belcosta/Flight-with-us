import React, { useState, useContext } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import appContext from "../context";
import { FaArrowRight } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";

import box from "../assets/img/box.png";

export default function FlightCard(oneflight) {
  // const { results } = useContext(appContext);
  // let {departure, destination, hourOfStart, hourOfLandind, duration, price, logo} = results;
  let flight = {
    departure: "ABC",
    destination: " DEF",
    hourOfStart: "6:30",
    hourOfLanding: "20:00",
    duration: "13:30",
    price: "2300",
    logo: "https://kprn.de/wp-content/uploads/2019/02/latam-logo.jpg",
  };

  return (
    <>
      {/* <appContext.Provider
        value={{
          results,
        }}
      > */}
      <Container className="card-group mb-5 col-12">
        <Card>
          <Card.Body className="d-flex justify-content-center">
            <Row className="flex-nowrap">
              <Col xs id="">
                <Image src={flight.logo} style={{ width: "4rem" }} />
              </Col>
              <Col xs id="">
                <h3>{flight.hourOfStart}</h3>
                <p>{flight.departure}</p>
              </Col>
              <Col xs className="justify-content-center">
                <p>{flight.duration}</p>
                <IoAirplaneSharp />
              </Col>
              <Col xs id="">
                <h3>{flight.hourOfLanding}</h3>
                <p>{flight.destination}</p>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card md="auto" className="col-4">
          <Card.Body className="d-flex align-content-center justify-content-center flex-wrap">
            <div className="m-2  align-content-center justify-content-center">
              <Card.Title id="totalPrice">
                <h1 id="">{flight.price}€</h1>
              </Card.Title>
              <Button variant="primary">
                {" "}
                Select <FaArrowRight />
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
      {/* </appContext.Provider> */}
    </>
  );
}
