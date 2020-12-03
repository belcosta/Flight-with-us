// import React, {useContext} from "react";
import React from "react";
import { Container } from "react-bootstrap";
import FlightCard from "./FlightCard";
// import appContext from "../context";

function Results() {
  // const results = useContext(appContext);
  let results = [1, 2];
  return (
    // <appContext.Provider
    //   value={{
    //     results
    //   }}>
    <React.Fragment>
      <h2 className="text-center my-5">Direction to the Destination</h2>
      <Container
        className="card-group bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
      >
        {results.map((flight, index) => (
          <div key={index}>
            <FlightCard />
          </div>
        ))}
      </Container>

      <h2 className="text-center my-5">Direction Back</h2>
      <Container
        className="card-group bg-light mx-auto px-5 pt-5 border border-light rounded-right-top rounded-left-bottom shadow-sm"
        style={{ maxWidth: "50rem" }}
      >
        {results.map((flight, index) => (
          <div key={index}>
            <FlightCard />
          </div>
        ))}
      </Container>
    </React.Fragment>
    // </appContext.Provider>
  );
}

export default Results;
