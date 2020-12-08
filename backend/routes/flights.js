var router = require("express").Router();
const mysql = require("mysql");
const async = require("async");

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
  let goFlights = [];
  let backFlights = [];
  console.log(req.body);
  poolConnection.getConnection((err, con) => {
    if (err) throw err;
    //destructuring request data
    let { departure, destination } = req.body;
    var resultsTogether = {};
    async.parallel(
      [
        function () {
          con.query(
            "select c.citycode as 'departure', c.cityName as 'departureName', d.citycode as 'destination', d.cityName as 'destinationName', co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where f.departure =? AND f.destination=?",
            [Number(departure), Number(destination)],
            (err, result, fields) => {
              if (err) throw err;
              goFlights = result;
              console.log("results to", result);
              resultsTogether.goFlights = goFlights;
            }
          );
        },
        function () {
          con.query(
            "select c.citycode as 'departure', c.cityName as 'departureName', d.citycode as 'destination', d.cityName as 'destinationName', co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where f.departure =? AND f.destination=?",
            [destination, departure],
            (err, result, fields) => {
              if (err) throw err;
              backFlights = result;
              console.log("results back", result);
              resultsTogether.backFlights = backFlights;
              console.log(resultsTogether);
            }
          );
        },
      ],
      function (err, res) {
        if (err) console.log(err);
        console.log("sending results");
        res.json(resultsTogether);
        con.release();
      }
    );
    // con.query(
    //   "select c.citycode as 'departure', c.cityName as 'departureName', d.citycode as 'destination', d.cityName as 'destinationName', co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where f.departure =? AND f.destination=?",
    //   [Number(departure), Number(destination)],
    //   (err, result, fields) => {
    //     if (err) throw err;
    //     goFlights = result;
    //     console.log("results to", result);
    //     console.log(goFlights);
    //     res.json(goFlights);
    //   }
    // );

    // 2 -  use departure from Frontend as ARRIVAL and START as destination
    // con.query(
    //   "select c.citycode as 'departure', c.cityName as 'departureName', d.citycode as 'destination', d.cityName as 'destinationName', co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where f.departure =? AND f.destination=?",
    //   [destination, departure],
    //   (err, result, fields) => {
    //     if (err) throw err;
    //     backFlights = result;
    //     console.log(result);
    //     res.json(backFlights);
    //   }
    // );
    // con.release();
  });
  // res.json({ goFlights, backFlights });
});

module.exports = router;
