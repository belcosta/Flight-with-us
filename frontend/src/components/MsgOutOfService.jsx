import React from "react";
import "../styles/MsgOutOfService.css";
import outOfServiceLogo from "../assets/img/out-of-service.png";

export default function MsgOutOfService() {
  return (
    <div className="out-of-service">
      <img src={outOfServiceLogo} alt="" />
      <p>We are terribly sorry, but our server is currently out of order :(</p>
    </div>
  );
}
