import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <section className="info">
     
      <article className="travel-requirements">
        <h3 className="info-title">Travel and entry requirements</h3>
        <p className="info-text">
          Check the latest information on country-region travel restrictions as
          well as visa and passport requirements
        </p>
        <button class="learn-more">
          <a className="link"
            href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html"
            target="_blank"
          >
            Learn More
          </a>
        </button>
      </article>
    </section>
  );
}
