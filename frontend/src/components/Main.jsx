import React from "react";
import MainInfo from "./MainInfo";
import "../styles/Main.css";
import articles from "../assets/data/articles";

export default function Main() {
  return (
    <React.Fragment>
      <p className="important">
        Disclaimer: This is just a mock up of a flight-searching site. We offer
        no real services! Also there is no affiliation with any airlines!
      </p>
      <section className="landing">
        {articles.map((article, index) => {
          return <MainInfo article={article} key={index} />;
        })}
      </section>
    </React.Fragment>
  );
}
