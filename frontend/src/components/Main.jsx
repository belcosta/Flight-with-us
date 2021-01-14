import React from "react";
import MainInfo from "./MainInfo";
import "../styles/Main.css";

export default function Main() {
  const articles = [
    {
      title: "Safe travelling",
      image: "../assets/img/covid.png",
      alt: "Women in mask staying before the plane",
      class: "covid",
      text:
        "Explore  new procedures implemented by airlines because of Covid-19 as well as tips on the most safety travelling in these days.",
      url: "https://www.lufthansa.com/de/en/protection-measures",
    },
    {
      title: "Travel and entry requirements",
      image: "../images/airplane.jpeg",
      alt: "row of the planes at airport",
      class: "requirements",
      text:
        "Check the latest information on country/region travel restrictions as well as visa and passport requirements",
      url: "https://www.dw.com/en/traveling-germany-coronavirus/a-54124541",
    },
    {
      title: "About us",
      image: "../assets/img/about.png",
      alt: "Silhouette women throwing paper plane",
      class: "about",
      text:
        "Meet the team of Flight with us - what are they favorite destinations? And how much challenging was this project for them?",
      url: "https://github.com/belccarvalho/Flight-Search",
    },
    {
      title: "Terms of service",
      image: "../assets/img/terms.jpg",
      alt: "people waiting at the airport",
      class: "terms",
      text: "Learn rules of using this service.",
      url: "https://github.com/belccarvalho/Flight-Search/blob/main/LICENSE",
    },
  ];
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
