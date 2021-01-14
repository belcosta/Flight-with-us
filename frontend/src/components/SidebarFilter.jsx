import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import appContext from "../context";
import "../styles/SidebarFilter.css";

export default function SidebarFilter() {
  const {
    setFilter,
    setOutOfService,
    cleanFilter,
    setResultsToBeFiltered,
    resultsToBeFiltered,
  } = useContext(appContext);
  const [setStops] = useState({});
  const [price, setPrice] = useState({ from: 0, to: 5000 });
  const [selectedComp, setSelectedComp] = useState([]);
  const [companies, setCompanies] = useState([]);

  //useEffect for companies -> for the Filter component

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:3500/flights/get/companies",
    })
      .then((res) => {
        let companiesSorted = res.data.companies.sort(function (a, b) {
          var keyA = a.companyName.trim();
          var keyB = b.companyName.trim();
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        setCompanies(companiesSorted);
      })
      .catch((err) => {
        console.log(err);
        setOutOfService(true);
      });
  }, []);

  useEffect(() => {
    setFilter({ price, selectedComp });
  }, [price, selectedComp]);

  useEffect(() => {
    //why is it not working?
    setResultsToBeFiltered({
      goFlights: [],
      backFlights: [],
    });
    setPrice({ from: 0, to: 5000 });
    setSelectedComp([]);
    document.getElementsByClassName("filter-form")[0].reset();
  }, [cleanFilter]);

  return (
    <form className="filter-form">
      <section className="filter-block">
        {/* STOPS */}
        {/* <article className="filter filter-stops">
          <h6 className="filter-titles">Stops</h6>
          <div className="list-stops">
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
        </article> */}
        {/* PRICE */}
        <article className="filter filter-price">
          <h6 className="filter-titles">Price</h6>
          <div className="price-range">
            <div className="priceInput">
              <label>From </label>

              <input
                type="number"
                onChange={(e) => {
                  e.preventDefault();
                  setPrice({ ...price, from: +e.target.value });
                }}
              />
            </div>
            <div className="priceInput">
              <label>To </label>
              <input
                type="number"
                onChange={(e) => {
                  e.preventDefault();
                  let value;
                  if (e.target.value === "") {
                    value = 50000;
                  } else {
                    value = +e.target.value;
                  }
                  setPrice({ ...price, to: value });
                }}
              />
            </div>
          </div>
        </article>
        {/* COMPANIES */}
        <article className="filter filter-companies">
          <h6 className="filter-titles">Airlines</h6>
          <div className="list-companies">
            {companies.map((companyName, index) => {
              return (
                <div key={index}>
                  <input
                    className="form-check-input"
                    id={companyName.companyName}
                    type="checkbox"
                    onChange={(e) => {
                      let isChecked = document.getElementById(
                        `${companyName.companyName}`
                      ).checked;
                      if (isChecked) {
                        setSelectedComp([...selectedComp, e.target.id]);
                      } else {
                        setSelectedComp(
                          selectedComp.filter((item) => item !== e.target.id)
                        );
                      }
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={companyName.companyName}
                  >
                    {companyName.companyName.substr(0, 1).toUpperCase() +
                      companyName.companyName.substr(
                        1,
                        companyName.companyName.length - 1
                      )}
                  </label>
                </div>
              );
            })}
          </div>
        </article>
      </section>
    </form>
  );
}
