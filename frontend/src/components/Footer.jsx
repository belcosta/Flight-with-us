import React from "react";
import logo from "../assets/img/logo-AR.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        &#169;2020 <img className="logo" src={logo} alt="Alice Rez logo" />{" "}
        Alice Rez & Isabel Costa & Willoid
      </p>
    </footer>
  );
}
