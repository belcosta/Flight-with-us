import React, { useEffect } from "react";
import "./Article.css";
import covid from "../assets/img/covid.png";
import requirement from "../assets/img/requirements.jpg";
import about from "../assets/img/about.png";
import terms from "../assets/img/terms.jpg";

export default function Article(props) {
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
    </article>
  );
}
