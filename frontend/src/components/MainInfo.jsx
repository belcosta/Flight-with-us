import React from "react";
import { Button } from "react-bootstrap";
import "../styles/MainInfo.css";
import covid from "../assets/img/covid.png";
import requirement from "../assets/img/airplane.jpeg";
import about from "../assets/img/about.png";
import terms from "../assets/img/terms.jpg";

export default function MainInfo(props) {
  const { article } = props;
  let picture;

  const choosePicture = (image) => {
    switch (image) {
      case "covid":
        picture = covid;
        break;
      case "requirements":
        picture = requirement;
        break;
      case "about":
        picture = about;
        break;
      default:
        picture = terms;
    }
  };

  choosePicture(article.class);

  return (
    <article
      className={`basic, ${article.class}`}
      style={{ backgroundImage: `url(${picture})` }}
    >
      <h3>{article.title}</h3>
      <p>{article.text}</p>
      <a href={article.url} target="blank" className="btn">
        Learn more
      </a>
    </article>
  );
}
