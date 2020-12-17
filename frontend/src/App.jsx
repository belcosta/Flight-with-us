import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import appContext from "./context";
import FormDisplay from "./components/FormDisplay";
import Results from "./components/Results";
import Filterbar from "./components/Filterbar";
import SidebarSpecialOffers from "./components/SidebarSpecialOffer";
import NoResults from "./components/NoResults";
import Pivot from "./components/Pivot";

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
        companyLogo:
          "https://kprn.de/wp-content/uploads/2019/02/latam-logo.jpg",
      },
      {
        departure: "ABC",
        destination: " DEF",
        hourOfStart: "9:30",
        hourOfLanding: "23:00",
        duration: "13:30",
        price: "800",
        companyLogo:
          "https://www.flughafen-zuerich.ch/-/jssmedia/airport/portal/logos/airline/easy.svg?vs=1",
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
        companyLogo:
          "https://kprn.de/wp-content/uploads/2019/02/latam-logo.jpg",
      },
      {
        departure: "DEF",
        destination: " ABC",
        hourOfStart: "15:30",
        hourOfLanding: "5:00",
        duration: "13:30",
        price: "800",
        companyLogo:
          "https://www.flughafen-zuerich.ch/-/jssmedia/airport/portal/logos/airline/easy.svg?vs=1",
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
            <Results />
          ) : (
            <NoResults />
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
