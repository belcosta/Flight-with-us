import React, { useContext, useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import appContext from "../context";
import "./Results.css";

function Results() {
  const { results, setResults, filter, noResults, setNoResults } = useContext(
    appContext
  );

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
    setResults({
      goFlights: filteredGoFlights,
      backFlights: filteredBackFlights,
    });
    //filter based of specific selected company
    if (filter.selectedComp.length) {
      filter.selectedComp.map((company) => {
        let filteredGoFlights2 = [];
        let filteredBackFlights2 = [];
        //map throught goflights
        filteredGoFlights.forEach((elem) => {
          if (elem.companyName === company) {
            filteredGoFlights2.push(elem);

            setResults({
              goFlights: filteredGoFlights2,
              backFlights: filteredBackFlights,
            });
          } else {
            setResults({
              goFlights: filteredGoFlights2,
              backFlights: filteredBackFlights,
            });
          }
        });

        //map throught backFlights
        filteredBackFlights.forEach((elem) => {
          if (elem.companyName === company) {
            filteredBackFlights2.push(elem);

            setResults({
              goFlights: filteredGoFlights2,
              backFlights: filteredBackFlights2,
            });
          } else {
            setResults({
              goFlights: filteredGoFlights2,
              backFlights: filteredBackFlights2,
            });
          }
        });
      });
    } else {
      setResults({
        goFlights: filteredGoFlights,
        backFlights: filteredBackFlights,
      });
    }
    console.log("results", results);
  }, [filter]);

  return (
    <React.Fragment>
      <section className="flights">
        <h2>Departing flights</h2>
        {results.goFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
        {results.goFlights.length ? null : (
          <h5 className="noFlights">No flights available...</h5>
        )}
      </section>

      <section className="flights">
        <h2>Returning flights</h2>
        {results.backFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
        {results.backFlights.length ? null : (
          <h5 className="noFlights">No flights available...</h5>
        )}
      </section>
    </React.Fragment>
  );
}

export default Results;
