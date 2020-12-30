import React, { useContext, useEffect} from "react";
import FlightCard from "./FlightCard";
import appContext from "../context";
import "./Results.css";
import { FaRegCalendarAlt } from 'react-icons/fa';

function Results() {
  const { results, setResults, filter, resultsToBeFiltered, setResultsToBeFiltered, search} = useContext(
    appContext
  );

  useEffect(() => {
    console.log("useEffect runned");
    setResultsToBeFiltered({results});
    let filteredGoFlights = resultsToBeFiltered.goFlights.filter(function (item) {
      return (
        item["price"] >= parseInt(filter.price.from) &&
        item["price"] <= parseInt(filter.price.to)
      );
    });
    let filteredBackFlights = resultsToBeFiltered.backFlights.filter(function (item) {
      return (
        item["price"] >= parseInt(filter.price.from) &&
        item["price"] <= parseInt(filter.price.to)
      );
    });
    
    //filter based of specific selected company
    if (filter.selectedComp.length) {
      let filteredGoFlights2 = [];
      let filteredBackFlights2 = [];
      filter.selectedComp.map((company) =>{
        //map throught goflights
        filteredGoFlights.forEach((elem) => {
          if (elem.companyName === company) {
            filteredGoFlights2.push(elem);
          }
        });

        //map throught backFlights
        filteredBackFlights.forEach((elem) => {
          if (elem.companyName === company) {
            filteredBackFlights2.push(elem);
          }
        });
      });
      setResultsToBeFiltered({
        goFlights: filteredGoFlights2,
        backFlights: filteredBackFlights2,
      });
    }else {
      setResultsToBeFiltered({
        goFlights: filteredGoFlights,
        backFlights: filteredBackFlights,
      });
    }
  }, [filter]);

  return (
    <React.Fragment>
      <section className="flights">
        <h2>Departing flights</h2>
        <h5 className="date"><FaRegCalendarAlt/> {search.dateFrom}</h5>
        {resultsToBeFiltered.goFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
        {resultsToBeFiltered.goFlights.length ? null : (
          <h5 className="noFlights">No flights available...</h5>
        )}
      </section>

      <section className="flights">
        <h2>Returning flights</h2>
        <h5 className="date"><FaRegCalendarAlt/> {search.dateTo}</h5>
        {resultsToBeFiltered.backFlights.map((flight, index) => (
          <FlightCard key={index} flight={flight} />
        ))}
        {resultsToBeFiltered.backFlights.length ? null : (
          <h5 className="noFlights">No flights available...</h5>
        )}
      </section>
    </React.Fragment>
  );
}

export default Results;
