import React, { useContext, useState, useEffect } from "react";
import Axios from "axios";
import "./FormDisplay.css";
import appContext from "../context";
import {
  Button,
  Col,
  FormControl,
  InputGroup,
  Row,
  Spinner,
  Form,
} from "react-bootstrap";
import "./FormDisplay.css";
import logo from "../assets/img/logo.svg";

function FormDisplay() {
  const { search, setSearch, getResults } = useContext(appContext);

  const [cities, setCities] = useState([]);

  const getValue = (e) => {
    setSearch((prevSearch) => {
      return { ...prevSearch, [e.target.name]: e.target.value };
    });
  };

  const compare = (a, b) => {
    if (a.cityName < b.cityName) {
      return -1;
    }
    if (a.cityName > b.cityName) {
      return 1;
    }
    return 0;
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
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {/* <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> */}
      <header className="bgHead p-5 container-fluid">
        <h1 className="mb-5">
          <span className="gradient">Fly with us</span>{" "}
          <img src={logo} alt="" />
        </h1>
        <div className="test">
          <Row className="m-2 p-2 justify-content-md-center">
            <Col xs md="4">
              <Form className="mb-3 ">
                <Form.Group
                  controlId="exampleForm.SelectCustom"
                  className="border border-dark"
                >
                  <Form.Control
                    as="select"
                    custom
                    name="departure"
                    onChange={getValue}
                  >
                    <option value="">DEPARTURE</option>
                    {cities.map((city) => (
                      <option value={city.cityId} key={`dep-${city.cityName}`}>
                        {city.cityName.trim().substr(0, 1).toUpperCase() +
                          city.cityName
                            .trim()
                            .substr(1, city.cityName.length - 1)}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col md="auto">
              <p className="justify-content-center">&#8826; &#8827;</p>
            </Col>
            <Col xs md="4">
              <Form className="mb-3 ">
                <Form.Group
                  controlId="exampleForm.SelectCustom"
                  className="border border-dark"
                >
                  <Form.Control
                    as="select"
                    custom
                    name="destination"
                    onChange={getValue}
                  >
                    <option value="">DESTINATION</option>
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
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
          </Row>
          <Row className="m-2 p-2 justify-content-md-center">
            <Col xs sm="2">
              <InputGroup className="mb-3">
                <FormControl
                  type="date"
                  placeholder="From"
                  aria-label="from wich date"
                  size="sm"
                  className="border border-dark"
                  name="dateFrom"
                  onChange={getValue}
                />
              </InputGroup>
            </Col>
            <Col md="1"></Col>
            <Col xs sm="2">
              <InputGroup>
                <FormControl
                  type="date"
                  placeholder="to"
                  aria-label="until when"
                  size="sm"
                  className="border border-dark"
                  name="dateTo"
                  onChange={getValue}
                />
              </InputGroup>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button
              type="submit"
              value="Submit"
              size="md"
              className="justify-content-center"
              onClick={getResults}
            >
              Search
            </Button>
          </Row>
        </div>
      </header>
    </>
  );
}

export default FormDisplay;
