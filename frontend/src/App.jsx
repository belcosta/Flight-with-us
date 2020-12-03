import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import appContext from "./context";
import FormDisplay from "./components/FormDisplay";
import Results from "./components/Results";
import Filterbar from "./components/Filterbar";

function App() {
  const [search, setSearch] = useState({});
  const [filter, setFilter] = useState({});
  const [results, setResults] = useState({
    goFlights: [
      {
        departure: "ABC",
        destination: " DEF",
        hourOfStart: "6:30",
        hourOfLanding: "20:00",
        duration: "13:30",
        price: "2300",
        logo: "https://kprn.de/wp-content/uploads/2019/02/latam-logo.jpg",
      },
    ],
    backFlights: [
      {
        departure: "DEF",
        destination: " ABC",
        hourOfStart: "0:30",
        hourOfLanding: "14:00",
        duration: "13:30",
        price: "1300",
        logo: "https://kprn.de/wp-content/uploads/2019/02/latam-logo.jpg",
      },
    ],
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
      method: "GET",
      url: "http://localhost:3500/flights/result",
      data: search,
    })
      .then((res) => {
        console.log(res);
        // setResults(res.data.results);
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
        getResults, //where is getResults defined? (Bel is asking Alice)
      }}
    >
      <FormDisplay />
      <Results />
      <Filterbar />
    </appContext.Provider>
  );
}

export default App;
