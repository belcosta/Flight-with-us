import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import appContext from "../context";
import "../styles/Header.css";
import logo from "../assets/img/logo.svg";
import { RiArrowLeftRightFill, RiArrowUpDownLine } from "react-icons/ri";
function Header() {
  const {
    search,
    setSearch,
    getResults,
    setOutOfService,
    cleanFilter,
    setCleanFilter,
  } = useContext(appContext);

  const [cities, setCities] = useState([]);
  // const [newDestination, setNewDestination] = useState({});

  const getValue = (e) => {
    setSearch((prevSearch) => {
      setCleanFilter(!cleanFilter);
      return { ...prevSearch, [e.target.name]: e.target.value };
    });
  };

  const invertRoute = () => {
    let newDestination = search.departure;
    setSearch({ departure: search.destination, destination: newDestination });
  };

  const getDateValue = (e) => {
    setSearch((prevSearch) => {
      let date = e.target.value
        .split("-")
        .reverse()
        .join("-")
        .replaceAll("-", ".");
      return { ...prevSearch, [e.target.name]: date };
    });
  };

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:3500/flights/get/cities",
    })
      .then((res) => {
        let citiesSorted = res.data.cities.sort(function (a, b) {
          var keyA = a.cityName.trim();
          var keyB = b.cityName.trim();
          if (keyA < keyB) return -1;
          if (keyA > keyB) return 1;
          return 0;
        });
        console.log(citiesSorted);
        setCities(citiesSorted);
      })
      .catch((err) => {
        console.log(err);
        setOutOfService(true);
      });
  }, []);

  useEffect(() => {
    console.log("search changed");
  }, [search]);

  return (
    <>
      {/* <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> */}
      <header className='bgHead container-fluid'>
        <h1 className='mb-5'>
          <span className='gradient'>Fly with us</span>{" "}
          <img src={logo} alt='' />
        </h1>
        <form>
          <h4>Book a Flight</h4>
          <section className='search'>
            <div className='route'>
              <div className='box-input'>
                <select custom name='departure' onChange={getValue}>
                  <option value=''>DEPARTURE</option>
                  {cities.map((city) => (
                    <option
                      value={city.cityId}
                      key={`dep-${city.cityName}`}
                      selected={
                        parseInt(search.departure) === city.cityId
                          ? "selected"
                          : "false"
                      }
                    >
                      {city.cityName.trim().substr(0, 1).toUpperCase() +
                        city.cityName
                          .trim()
                          .substr(1, city.cityName.length - 1)}
                    </option>
                  ))}
                </select>
              </div>
              <p onClick={invertRoute}>
                <RiArrowUpDownLine />
              </p>

              <p onClick={invertRoute}>
                <RiArrowLeftRightFill />
              </p>
              <div className='box-input'>
                <select custom name='destination' onChange={getValue}>
                  <option value=''>DESTINATION</option>
                  {cities.map((city) => {
                    if (city.cityId !== +search.departure) {
                      return (
                        <option
                          value={city.cityId}
                          key={`dest-${city.cityName}`}
                        >
                          {city.cityName.trim().substr(0, 1).toUpperCase() +
                            city.cityName
                              .trim()
                              .substr(1, city.cityName.length - 1)}
                        </option>
                      );
                    }
                    return null;
                  })}
                </select>
              </div>
            </div>

            <div className='date'>
              <div className='box-input'>
                <label htmlFor='dateFrom'>Outbound</label>
                <input
                  type='date'
                  aria-label='from which date'
                  size='sm'
                  id='dateFrom'
                  name='dateFrom'
                  onChange={getDateValue}
                />
              </div>
              <div className='box-input'>
                <label htmlFor='dateTo'>Return</label>
                <input
                  type='date'
                  placeholder='to'
                  aria-label='until when'
                  size='sm'
                  id='dateTo'
                  name='dateTo'
                  onChange={getDateValue}
                />
              </div>
            </div>
            <div className='searchButton'>
              <button
                type='submit'
                value='Submit'
                size='md'
                className='btn'
                onClick={getResults}
              >
                Search
              </button>
            </div>
          </section>
        </form>
      </header>
    </>
  );
}

export default Header;
