import React from "react";
import "./CompanyInfo.css";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import LocationOnIcon from "@material-ui/icons/LocationOn";

function CompanyInfo() {
  return (
    <div className="companyInfo">
      <img
        className="companyInfo__logo"
        src="https://papupos.s3.amazonaws.com/media/eresto/0537a8f2-be6b-49af-b0b3-b33554a9b522/logo_465x320a.png"
        alt="logo"
      />
      <p className="companyInfo__name">Poznań - Wilda</p>
      <div className="companyInfo__phone">
        <PhoneEnabledIcon className="companyInfo__phoneIcon" />
        <p>123123123</p>
      </div>
      <div className="companyInfo__address">
        <LocationOnIcon className="companyInfo__locationIcon" />
        <p>Swoboda 20, 60-391, Poznań</p>
      </div>
      <div className="companyInfo__statusContainer">
        <p className="companyInfo__status">OTWRTE</p>
        <p className="companyInfo__hours">Zamykamy o: 22:00</p>
      </div>
    </div>
  );
}

export default CompanyInfo;
