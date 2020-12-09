import React, { useContext } from "react";
import FlightCard from "./FlightCard";
import appContext from "../context";
import "./Results.css";

function Results() {
  const { results } = useContext(appContext);

  console.log(results);
  return (
    <React.Fragment>
      <div className="flights">
        <h2>Departing flights</h2>
        {results.goFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>

      <div className="flights">
        <h2>Returning flights</h2>
        {results.backFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Results;
