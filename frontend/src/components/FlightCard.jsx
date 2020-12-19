import React, { useState, useContext } from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import "./FlightCard.css";

export default function FlightCard(props) {
  const flight = props.flight;

  return (
    <div className="result">
      <img
        id="company-logo"
        src={flight.companyLogo}
        alt="logo"
        style={{ width: "6rem" }}
      ></img>
      <div className="flight-info">
        <h3>{flight.hourOfStart}</h3>
        <p>{flight.departure}</p>
      </div>
      <div className="extra">
        <p>
          {flight.duration.split(":")[0]}h{" "}
          {flight.duration.split(":")[1].substr(0, 2)} m{" "}
        </p>
        <span id="airplane">
          <IoAirplaneSharp />
        </span>
      </div>

      <div className="flight-info">
        <h3>{flight.hourOfLanding}</h3>
        <p>{flight.destination}</p>
      </div>

      <div className="buyFlight">
        <button>{flight.price}€</button>
      </div>
    </div>
  );
}
