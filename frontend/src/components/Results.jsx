import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import FlightCard from "./FlightCard";
import appContext from "../context";

function Results() {
  const { results } = useContext(appContext);

  console.log(results);
  return (
    <React.Fragment>
      <h2 className="text-center my-5">Direction to the Destination</h2>
      <Container
        className="card-group bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
      >
        {results.goFlights.map((flight, index) => (
          <div key={index}>
            <FlightCard flight={flight} />
          </div>
        ))}
      </Container>

      <h2 className="text-center my-5">Direction Back</h2>
      <Container
        className="card-group bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
      >
        {results.backFlights.map((flight, index) => (
          <div key={index}>
            <FlightCard flight={flight} />
          </div>
        ))}
      </Container>
    </React.Fragment>
  );
}

export default Results;
