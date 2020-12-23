import React, { useContext, useEffect } from "react";
import FlightCard from "./FlightCard";
import appContext from "../context";
import "./Results.css";

function Results() {
  const { results, setResults, filter } = useContext(appContext);

  useEffect(() => {
    let filteredGoFlights = results.goFlights.filter(function (item) {
      return (
        item["price"] >= parseInt(filter.price.from) &&
        item["price"] <= parseInt(filter.price.to)
      );
    });
    let filteredBackFlights = results.backFlights.filter(function (item) {
      return (
        item["price"] >= parseInt(filter.price.from) &&
        item["price"] <= parseInt(filter.price.to)
      );
    });
    console.log(filteredGoFlights);

    // filter companies !filter.selectedComp ?null  ?(console.log(object))

    setResults({goFlights: filteredGoFlights, backFlights: filteredBackFlights})
  
  },[filter]);

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
