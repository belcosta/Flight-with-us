import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import appContext from "./context";
import FormDisplay from "./components/FormDisplay";
import Results from "./components/Results";

function App() {
  const [search, setSearch] = useState({});
  const [filter, setFilter] = useState({});
  const [results, setResults] = useState({});

  const [companies, setCompanies] = useState([]);

  //useEffect for companies -> for the Filter component

  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     url: "http://localhost:3500/flights/get/companies",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setCompanies(res.data.companies);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  const getValueFilter = (e) => {
    setFilter((prevFilter) => {
      return { ...prevFilter, [e.target.name]: e.target.value };
    });
  };

  const getResults = () => {
    console.log("Calling for results");
    console.log(search);
    // Axios({
    //   method: "GET",
    //   url: "http://localhost:3500/flights/results",
    //   data: search,
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setResults(res.data.results);
    //   })
    //   .catch((err) => console.log(err));
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
      <Results />
    </appContext.Provider>
  );
}

export default App;
