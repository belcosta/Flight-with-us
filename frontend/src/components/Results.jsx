import React, { useContext } from "react";
import FlightCard from "./FlightCard";
import appContext from "../context";
import "./Results.css";

function Results() {
  const { results } = useContext(appContext);

  console.log(results);
  return (
    <React.Fragment>
      <section className="flights">
        <h2>Departing flights</h2>
        {results.goFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </section>

      <section className="flights">
        <h2>Returning flights</h2>
        {results.backFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
      </section>
    </React.Fragment>
  );
}

export default Results;
