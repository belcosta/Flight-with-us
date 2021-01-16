import React, { useContext, useEffect } from "react";
import MainResultsCards from "./MainResultsCards";
import appContext from "../context";
import "../styles/MainResults.css";
import { FaRegCalendarAlt } from "react-icons/fa";

function MainResults() {
  const {
    results,
    filter,
    resultsToBeFiltered,
    setResultsToBeFiltered,
    search,
  } = useContext(appContext);

  useEffect(() => {
    console.log("useEffect runned");
    // setResultsToBeFiltered(results);
    let filteredResults = { ...results };
    console.log(filter, results, filteredResults);
    console.log(filter.price.from, filter.price.to);
    let filteredGoFlights = filteredResults.goFlights.filter(function (item) {
      return (
        item["price"] >= parseInt(filter.price.from) &&
        item["price"] <= parseInt(filter.price.to)
      );
    });
    let filteredBackFlights = filteredResults.backFlights.filter(function (
      item
    ) {
      return (
        item["price"] >= parseInt(filter.price.from) &&
        item["price"] <= parseInt(filter.price.to)
      );
    });

    console.log(filteredGoFlights, filteredBackFlights);

    //filter based of specific selected company
    if (filter.selectedComp.length) {
      let filteredGoFlights2 = [];
      let filteredBackFlights2 = [];
      filter.selectedComp.map((company) => {
        //map throught goflights
        filteredGoFlights.forEach((elem) => {
          if (elem.companyName === company) {
            return filteredGoFlights2.push(elem);
          }
        });

        //map throught backFlights
        filteredBackFlights.forEach((elem) => {
          if (elem.companyName === company) {
            return filteredBackFlights2.push(elem);
          }
        });
      });
      filteredResults = {
        goFlights: filteredGoFlights2,
        backFlights: filteredBackFlights2,
      };
    } else {
      filteredResults = {
        goFlights: filteredGoFlights,
        backFlights: filteredBackFlights,
      };
    }
    setResultsToBeFiltered(filteredResults);
    filteredResults = {};
  }, [filter]);

  return (
    <React.Fragment>
      <section className='flights'>
        <h2>Departing flights</h2>
        <h5>
          <FaRegCalendarAlt /> {search.dateFrom}
        </h5>
        {resultsToBeFiltered.goFlights.map((flight, index) => (
          <MainResultsCards key={index} flight={flight} />
        ))}
        {resultsToBeFiltered.goFlights.length ? null : (
          <h5 className='noFlights'>No flights available...</h5>
        )}
      </section>

      <section className='flights'>
        <h2>Returning flights</h2>
        <h5>
          <FaRegCalendarAlt /> {search.dateTo}
        </h5>
        {resultsToBeFiltered.backFlights.map((flight, index) => (
          <MainResultsCards key={index} flight={flight} />
        ))}
        {resultsToBeFiltered.backFlights.length ? null : (
          <h5 className='noFlights'>No flights available...</h5>
        )}
      </section>
    </React.Fragment>
  );
}

export default MainResults;
