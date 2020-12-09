import React, { useState, useContext } from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import "./FlightCard.css";

export default function FlightCard(props) {
  const flight = props.flight;

  return (
    <div className="result">
      <img src={flight.companyLogo} alt="logo" style={{ width: "6rem" }}></img>
      <div>
        <h3>{flight.hourOfStart}</h3>
        <p>{flight.departure}</p>
      </div>
      <div className="extra">
        <p>
          {flight.duration.split(":")[0]}h {flight.duration.split(":")[1]}m{" "}
        </p>
        <span id="airplane">
          <IoAirplaneSharp />
        </span>
      </div>

      <div>
        <h3>{flight.hourOfLanding}</h3>
        <p>{flight.destination}</p>
      </div>

      <div className="buyFlight">
        <button>{flight.price}€</button>
      </div>
    </div>
  );
}
