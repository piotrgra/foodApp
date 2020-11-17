import React from "react";
import "./Main.css";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

function Main() {
  return (
    <div className="main">
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default Main;
