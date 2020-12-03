import React, { useContext, useState } from "react";
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

function FormDisplay() {
  const { search, setSearch, getResults } = useContext(appContext);

  const [cities, setCities] = useState(["Prague", "Leipzig", "London"]);

  const getValue = (e) => {
    setSearch((prevSearch) => {
      return { ...prevSearch, [e.target.name]: e.target.value };
    });
  };

  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     url: "http://localhost:3500/flights/get/cities",
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setCities(res.data.cities);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <>
      {/* <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner> */}
      <header className="bgHead p-5 container-fluid">
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
                    <option value={`${city.toLowerCase()}`}>{city}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col md="auto">
            <h1 className="justify-content-center">&#8826; &#8827;</h1>
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
                    if (city.toLowerCase() !== search.departure) {
                      return (
                        <option value={`${city.toLowerCase()}`}>{city}</option>
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
        <Row>
          <Col></Col>
          <Col md="auto">
            <Button
              type="submit"
              value="Submit"
              size="md"
              variant="light"
              className="border border-dark justify-content-center"
              onClick={getResults}
            >
              Search
            </Button>
          </Col>
          <Col></Col>
        </Row>
      </header>
    </>
  );
}

export default FormDisplay;
