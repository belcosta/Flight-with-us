import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import FlightCard from "./FlightCard";
import appContext from "../context";
import "./Results.css";

function Results() {
  const { results } = useContext(appContext);

  console.log(results);
  return (
    <React.Fragment>
        <h2 className="text-center my-5">To the Destination</h2>

        <div className="container"
        className="bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
        >
          {results.goFlights.map((flight, index) => (
            <div key={index}>
              <FlightCard flight={flight} />
            </div>
          ))}
        </div>

        <h2 className="text-center my-5">Back</h2>
        <Container
          className="bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
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
