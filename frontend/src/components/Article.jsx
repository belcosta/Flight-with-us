import React from "react";
import "./Article.css";

export default function Article(props) {
  const { article } = props;
  return (
    <article
      className={`basic, ${article.class}`}
      style={{ backgroundImage: `url(${article.image})` }}
    >
      <img src={article.image} alt="" />
      <h3>{article.title}</h3>
    </article>
  );
}
