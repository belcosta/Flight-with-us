var router = require("express").Router();
const mysql = require("mysql");

let poolConnection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  //?
  port: "3306",
  user: "root",
  password: "Password123!",
  database: "flight_search",
  //?
});
//request for cities (for select) - return all city names from city table
router.get("/get/cities", (req, res, next) => {
  console.log("pool Connection ");
  poolConnection.getConnection((err, con) => {
    if (err) throw err;
    con.query("SELECT cityName, cityId from city", (error, result, fields) => {
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
    con.query("SELECT* from company", (error, result, fields) => {
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
  console.log("server is listening");
  let goFlights;
  let backFlights;
  console.log(req.body);
  poolConnection.getConnection((err, con) => {
    if (err) throw err;
    //destructuring request data
    let { departure, destination } = req.body;
    con.query(
      "select c.citycode, c.cityName, d.citycode, d.cityName, co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where c.cityId =? AND d.cityId=?",
      [Number(departure), Number(destination)],
      (err, result, fields) => {
        if (err) throw err;
        goFlights = result;
      }
    );

    // 2 -  use departure from Frontend as ARRIVAL and START as destination
    con.query(
      "select c.citycode, c.cityName, d.citycode, d.cityName, co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where c.cityId =? AND d.cityId=?",
      [destination, departure],
      (err, result, fields) => {
        if (err) throw err;
        backFlights = result;
      }
    );
    con.release();
  });
  res.json({ goFlights, backFlights });
});

module.exports = router;
