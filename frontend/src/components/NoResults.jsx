import React from "react";
import "./NoResults.css";
import noFlight from "../assets/img/no-flight.png";

export default function NoResults() {
  return (
    <article className="noResults">
      <img src={noFlight} alt="empty departure board" />
      <h2>Sorry, there is no flight available in this route... </h2>
      <p>Please, make a new search.</p>
    </article>
  );
}
