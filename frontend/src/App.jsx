import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import appContext from "./context";

function App() {
  const [search, setSearch] = useState({});
  const [filter, setFilter] = useState({});
  const [results, setResults] = useState([]);

  const [cities, getCities] = useState({});

  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     url: "http://localhost:3500/flights/get/cities",
  //   })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);

  const getValueSearch = (e) => {
    setSearch((prevSearch) => {
      return { ...prevSearch, [e.target.name]: e.target.value };
    });
  };

  const getValueFilter = (e) => {
    setFilter((prevFilter) => {
      return { ...prevFilter, [e.target.name]: e.target.value };
    });
  };

  const getResults = () => {};

  return (
    <appContext.Provider
      value={{ search, setSearch, filter, setFilter, results, setResults }}
    >
      <div>
        <p>test</p>
      </div>
    </appContext.Provider>
  );
}

export default App;
