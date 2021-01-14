import React, { useState } from "react";
import Axios from "axios";
import "./styles/App.css";
import appContext from "./context";
import Header from "./components/Header";
import MainResults from "./components/MainResults";
import SidebarFilter from "./components/SidebarFilter";
import MsgNoResults from "./components/MsgNoResults";
import SidebarOffers from "./components/SidebarOffers";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MsgOutOfService from "./components/MsgOutOfService";

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

  const [outOfService, setOutOfService] = useState(false);

  const [cleanFilter, setCleanFilter] = useState(false);

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
        setOutOfService(false);
        console.log("res.data", res.data);
        if (!res.data.goFlights.length || !res.data.backFlights.length) {
          setNoResults(true);
        }
        setResultsToBeFiltered(res.data);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
        setOutOfService(true);
      });
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
        setOutOfService,
        cleanFilter,
        setCleanFilter,
      }}
    >
      <Header />

      <div className="home bg-light">
        <div className="sidebarFilter">
          <SidebarFilter />
        </div>

        <main>
          {outOfService ? <MsgOutOfService /> : null}
          {results.goFlights.length || results.backFlights.length ? (
            <MainResults />
          ) : noResults ? (
            <MsgNoResults />
          ) : (
            <Main />
          )}
        </main>
        <div className="sidebarOffers">
          <SidebarOffers />
        </div>
      </div>
      <Footer />
    </appContext.Provider>
  );
}

export default App;
