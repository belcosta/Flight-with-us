import React from "react";
import { IoAirplaneSharp } from "react-icons/io5";
import "./MainResultsCards.css";

export default function MainResultsCard(props) {
  const flight = props.flight;

  return (
    <article className="result">
      <img className="company-logo" id="company-logo" src={flight.companyLogo} alt="logo" style={{ width: "6rem" }}></img>
      <div className="flight-info1">
        <h3 className="time-flight">{flight.hourOfStart.slice(0,5)}</h3>
        <p className="city-code">{flight.departure}</p>
      </div>
      <div className="extra">
        <p className="duration">
          {flight.duration.split(":")[0]}h{" "}
          {flight.duration.split(":")[1].substr(0, 2)} m{" "}
        </p>
        <span id="airplane">
          <IoAirplaneSharp />
        </span>
      </div>

      <div className="flight-info2">
        <h3 className="time-flight">{flight.hourOfLanding.slice(0,5)}</h3>
        <p className="city-code">{flight.destination}</p>
      </div>

        <button className="buy-button">{flight.price}€</button>
    </article>
  );
}
