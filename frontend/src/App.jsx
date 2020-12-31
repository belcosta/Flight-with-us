import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import appContext from "./context";
import FormDisplay from "./components/FormDisplay";
import Results from "./components/Results";
import Filterbar from "./components/Filterbar";
import NoResults from "./components/NoResults";
import Pivot from "./components/Pivot";
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState({});
  const [filter, setFilter] = useState({});
  const [results, setResults] = useState({
    goFlights: [],
    backFlights: [],
  });
  const [resultsToBeFiltered, setResultsToBeFiltered] = useState({
    goFlights: [],
    backFlights: [],
  });
  const [noResults, setNoResults] = useState(false);

  const getResults = () => {
    console.log("Calling for results");
    console.log(search);
    setNoResults(false);
    Axios({
      method: "POST",
      url: "http://localhost:3500/flights/result",
      data: search,
    })
      .then((res) => {
        console.log("res.data", res.data);
        if (!res.data.goFlights.length || !res.data.backFlights.length) {
          setNoResults(true);
        }
        setResultsToBeFiltered(res.data);
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
        noResults,
        resultsToBeFiltered,
        setResultsToBeFiltered,
      }}
    >
      <FormDisplay />

      <div className="home bg-light">
        <div className="sidebar">
          <Filterbar />
        </div>

        <main>
          {/* {noResults ? <NoResults /> : <Results />} */}
          {results.goFlights.length || results.backFlights.length ? (
            <Results />
          ) : noResults ? (
            <NoResults />
          ) : (
            <LandingPage />
          )}
        </main>
        <div className="special-offers">
          <Pivot />
        </div>
      </div>
      <Footer />
    </appContext.Provider>
  );
}

export default App;
