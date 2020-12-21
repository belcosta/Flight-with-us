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
import Info from "./components/Info";

function App() {
  const [search, setSearch] = useState({});
  const [filter, setFilter] = useState({});
  const [results, setResults] = useState({
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
        console.log(res.data);
        if (!res.data.goFlights.length || !res.data.backFlights.length) {
          setNoResults(true);
        }
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
            <div>
              <LandingPage /> <Info />
            </div>
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
