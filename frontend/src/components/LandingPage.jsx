import React from "react";
import Article from "./Article";

export default function LandingPage() {
  const articles = [
    {
      title: "Safe travelling in time of Covid-19",
      image: "../assets/img/covid.png",
      alt: "Women in mask staying before the plane",
      class: "covid",
      text:
        "Explore  new procedures implemented by airlines because of Covid-19 as well as tips on the most safety travelling in these days.",
    },
    {
      title: "Travel and entry requirements",
      image: "../assets/img/requirements.jpg",
      alt: "row of the planes at airport",
      class: "requirements",
      text:
        "Check the latest information on country/region travel restrictions as well as visa and passport requirements",
    },
    {
      title: "About us",
      image: "../assets/img/about.png",
      alt: "Silhouette women throwing paper plane",
      class: "about",
      text: "Meet people responsible for this site",
    },
    {
      title: "Terms of service",
      image: "../assets/img/terms.jpg",
      alt: "people waiting at the airport",
      class: "terms",
      text: "Learn what are the rules of using this website.",
    },
  ];
  return (
    <section>
      {articles.map((article, index) => {
        return <Article article={article} key={index} />;
      })}
    </section>
  );
}
