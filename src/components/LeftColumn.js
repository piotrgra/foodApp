import React from "react";
import CompanyInfo from "./CompanyInfo";
import Menu from "./Menu";
import "./LeftColumn.css";

function LeftColumn() {
  return (
    <div className="leftColumn">
      <CompanyInfo />
      <Menu />
    </div>
  );
}

export default LeftColumn;
