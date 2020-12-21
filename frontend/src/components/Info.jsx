import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div className="info">
      <div className="travel-safely">
        <h3>Travel safely</h3>
        <p>
          {" "}
          We continue to ensure that our safety and hygiene measures are of the
          highest standard, with new procedures implemented throughout your
          journey, from check in to arrival at your journey, from check in to
          arrival at your destination.{" "}
        </p>
        <button>
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html"
            target="_blank"
          >
            Learn More
          </a>
        </button>
      </div>
      <div className="travel-requirements">
        <h3>Travel and entry requirements</h3>
        <p>
          Check the latest information on country-region travel restrictions as
          well as visa and passport requirements
        </p>
        <button>
          <a
            href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/travel-during-covid19.html"
            target="_blank"
          >
            Learn More
          </a>
        </button>
      </div>
    </div>
  );
}
