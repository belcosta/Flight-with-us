var router = require("express").Router();
const mysql = require("mysql");

let poolConnection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  //?
  port: "3306",
  user: "root",
  password: "Password123!",
  database: "flightSearch",
  //?
});
//request for cities (for select) - return all city names from city table
router.get("/get/cities", (req, res, next) => {
  console.log("pool Connection ");
  poolConnection.getConnection((err, con) => {
    if (err) throw err;
    con.query("SELECT cityName from city", (error, result, fields) => {
      if (error) {
        res.json({ msg: "cityName was not accessed" });
      }
      res.send({ cities: result });
    });
    con.release();
  });
});

//request for companies (for checkboxes) - return all companies names from company table
router.get("/get/companies", (req, res, next) => {
  poolConnection.getConnection((err, con) => {
    if (err) throw err;
    con.query("SELECT companyName from company", (error, result, fields) => {
      if (error) {
        res.json({ msg: "companyName was not accessed" });
      }
      res.send({ companies: result });
    });
    con.release();
  });
});

//request for flights (for results) - return all contain of the flight table

// 1 -  use departure from Frontend as start and arrival as destination
router.post("/result", (req, res, err) => {
  let goFlights;
  let backFlights;
  poolConnection.getConnection((err, con) => {
    if (err) throw err;
    //destructuring request data
    let { departure, destination } = req.body;
    console.log(departure, destination);
    con.query(
      "SELECT cityCode, companyName, companyLogo, hourOfStart, hourOfLanding, duration from flights natural join city natural join company WHERE flights.start = ? AND flights.destination = ?",
      [departure, destination],
      (err, result, fields) => {
        if (err) throw err;
        goFlights = result;
      }
    );

    // 2 -  use departure from Frontend as ARRIVAL and START as destination
    con.query(
      "SELECT cityCode, companyName, companyLogo, hourOfStart, hourOfLanding, duration from flights natural join city natural join company WHERE flights.start = ? AND flights.destination = ?",
      [destination, departure],
      (err, result, fields) => {
        if (err) throw err;
        backFlights = result;
      }
    );
    res.json({ goFlights, backFlights });
    con.release();
  });
});

module.exports = router;
