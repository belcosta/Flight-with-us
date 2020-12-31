var router = require("express").Router();
const mysql = require("mysql");
const async = require("async");
const { dbPort, dbUser, dbPassword } = require("../config");

console.log(dbPort);

let poolConnection = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  port: dbPort,
  user: dbUser,
  password: dbPassword,
  database: "flight_search",
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
        function (parallel_done) {
          con.query(
            "select c.citycode as 'departure', c.cityName as 'departureName', d.citycode as 'destination', d.cityName as 'destinationName', co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where f.departure =? AND f.destination=?",
            [Number(departure), Number(destination)],
            (err, result, fields) => {
              if (err) return parallel_done(err);
              goFlights = result;
              console.log("results to", result);
              resultsTogether.goFlights = goFlights;
              parallel_done();
            }
          );
        },
        function (parallel_done) {
          con.query(
            "select c.citycode as 'departure', c.cityName as 'departureName', d.citycode as 'destination', d.cityName as 'destinationName', co.companyLogo, co.companyName, f.hourOfStart, f.hourOfLanding, f.duration, f.price from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where f.departure =? AND f.destination=?",
            [destination, departure],
            (err, result, fields) => {
              if (err) return parallel_done(err);
              backFlights = result;
              console.log("results back", result);
              resultsTogether.backFlights = backFlights;
              console.log(resultsTogether);
              parallel_done();
            }
          );
        },
      ],
      function (err) {
        if (err) console.log(err);
        console.log("sending results");
        con.release();
        res.json(resultsTogether);
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

//3 request for special offers


router.get("/specialoffers", (req, res, next) => {
  console.log("request for special offers");
  poolConnection.getConnection((err, con) => {
    if (err) throw err;
    console.log("connection with db");
    con.query(
      "SELECT c.cityName as 'departure', d.cityName as 'destination', f.hourOfStart, f.hourOfLanding, f.price, co.companyLogo, d.background from flights f inner join city c on f.departure=c.cityId inner join city d on f.destination=d.cityId inner join company co on f.companyId = co.companyId where f.isSpecialOffer = 1 ",
      (error, result, fields) => {
        console.log(result);
        if (error) {
          throw error;
        }
        res.send({ specialOffers: result });
      }
    );
    con.release();
  });

module.exports = router;