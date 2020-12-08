import React, { useState, useContext } from "react";
import appContext from "../context";
import { FaArrowRight } from "react-icons/fa";
import { IoAirplaneSharp } from "react-icons/io5";
import "./FlightCard.css";

import box from "../assets/img/box.png";

export default function FlightCard(props) {
  const flight = props.flight;

  return (
    // <>
    <div className="result">
      <div className="information">
        <div className="row">
          <h3>{flight.hourOfStart}</h3>
          <p>{flight.departure}</p>{" "}
          <span>
            <IoAirplaneSharp />
          </span>
          <h3>{flight.hourOfLanding}</h3>
          <p>{flight.destination}</p>
        </div>
        <div className="row">
          <img src={flight.logo} alt="logo" style={{ width: "4rem" }}></img>
          <p>
            {flight.duration.split(":")[0]}h {flight.duration.split(":")[1]}m{" "}
          </p>
        </div>
      </div>

      <div className="buyFlight">
        <button>
          {flight.price}€ <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
