import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import appContext from "./context";
import FormDisplay from "./components/FormDisplay";
import Results from "./components/Results";
import Filterbar from "./components/Filterbar";
import NoResults from "./components/NoResults";
import Pivot from "./components/Pivot";

function App() {
  const [search, setSearch] = useState({});
  const [filter, setFilter] = useState({});
  const [results, setResults] = useState({
    goFlights: [],
    backFlights: [],
  });

  const [companies, setCompanies] = useState([]);

  //useEffect for companies -> for the Filter component

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:3500/flights/get/companies",
    })
      .then((res) => {
        console.log(res);
        setCompanies(res.data.companies);
      })
      .catch((err) => console.log(err));
  }, []);

  const getValueFilter = (e) => {
    setFilter((prevFilter) => {
      return { ...prevFilter, [e.target.name]: e.target.value };
    });
  };

  const getResults = () => {
    console.log("Calling for results");
    console.log(search);
    Axios({
      method: "POST",
      url: "http://localhost:3500/flights/result",
      data: search,
    })
      .then((res) => {
        console.log(res);
        setResults(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <appContext.Provider
      value={{
        search,
        setSearch,
        filter,
        setFilter,
        results,
        setResults,
        getResults,
      }}
    >
      <div className="home bg-light">
        <header>
          <FormDisplay />
        </header>
        <div className="sidebar">
          <Filterbar />
        </div>

        <main>
          {!results.goFlights.length && !results.backFlights.length ? (
            <NoResults />
          ) : (
            <Results />
          )}
        </main>
        <div className="special-offers" style={{ border: "solid 3px red" }}>
          <Pivot />
        </div>
      </div>
    </appContext.Provider>
  );
}

export default App;
