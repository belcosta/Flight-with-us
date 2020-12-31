import React from "react";
import "./OutOfService.css";
import outOfServiceLogo from "../assets/img/out-of-service.png";

export default function OutOfService() {
  return (
    <div className="out-of-service">
      <img src={outOfServiceLogo} alt="" />
    </div>
  );
}
