import React from "react";
import { Card, Container } from "react-bootstrap";
import FlightCard from "./FlightCard";

function Results() {
  return (
    <React.Fragment>
      <h2 className="text-center my-5">Direction to the Destination</h2>
      <Container
        className="card-group bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
      >
        <FlightCard />
        <FlightCard />
      </Container>

      <h2 className="text-center my-5">Direction Back</h2>
      <Container
        className="card-group bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
      >
        <FlightCard />
        <FlightCard />
      </Container>
    </React.Fragment>
  );
}

export default Results;
