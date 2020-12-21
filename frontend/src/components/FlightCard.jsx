import React, { useState, useContext } from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import "./FlightCard.css";

export default function FlightCard(props) {
  const flight = props.flight;

  return (
    <div className="result">
      <img id="company-logo" src={flight.companyLogo} alt="logo" style={{ width: "6rem" }}></img>
      <div className="flight-info1">
        <h3>{flight.hourOfStart.slice(0,5)}</h3>
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

      <div className="flight-info2">
        <h3>{flight.hourOfLanding.slice(0,5)}</h3>
        <p>{flight.destination}</p>
      </div>

        <button>{flight.price}€</button>
    </div>
  );
}
