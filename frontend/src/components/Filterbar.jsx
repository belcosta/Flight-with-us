import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import appContext from "../context";
import "./filterbar.css";

export default function Filterbar() {
  const { filter, setFilter } = useContext(appContext);
  const [stops, setStops] = useState({});
  const [price, setPrice] = useState({ from: 0, to: 50000 });
  const [companies, setCompanies] = useState([
    "Latam",
    "Lufthansa",
    "Britisch Airlines",
  ]);

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
  return (
    <appContext.Provider
      value={{
        filter,
        setFilter,
      }}
    >
      <form className="filter-block">
        <div>
          <div className="filter">
            <h6>Stops</h6>
            <div className="form-check">
              <input
                className="form-check-input"
                id="noStop"
                type="checkbox"
                onClick={() => {
                  setStops(0);
                }}
              />
              <label className="form-check-label" htmlFor="noStop">
                Non-stop
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="1Stop"
                type="checkbox"
                onClick={() => {
                  setStops(1);
                }}
              />
              <label className="form-check-label" htmlFor="1Stop">
                1 stop
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                id="moreStops"
                type="checkbox"
                onClick={() => {
                  setStops(2);
                }}
              />
              <label className="form-check-label" htmlFor="moreStops">
                2+ stops
              </label>
            </div>
          </div>
          <div className="filter">
            <h6>Price</h6>
            <div className="filter-price">
              <div className="priceInput">
                <label>From </label>
                <input
                  type="number"
                  onClick={(e) => {
                    e.preventDefault();
                    setPrice({ from: e.target.value });
                  }}
                />
              </div>
              <div className="priceInput">
                <label>To </label>
                <input
                  type="number"
                  onClick={(e) => {
                    e.preventDefault();
                    setPrice({ to: e.target.value });
                  }}
                />
              </div>
            </div>
          </div>

          <div className="filter">
            <h6>Airlines</h6>
            {companies.map((companyName, index) => {
              return (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    id={companyName}
                    type="checkbox"
                    onClick={(e) => {
                      setCompanies([...companies, e.target.name]);
                    }}
                  />
                  <label className="form-check-label" htmlFor={companyName}>
                    {companyName}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </appContext.Provider>
  );
}
