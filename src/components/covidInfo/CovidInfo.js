import React from "react";
import "./CovidInfo.css";
import { covidInfo } from "../../data/NavbarData";
function CovidInfo() {
  return (
    <>
      <div className="covidInfo">
        <div className="covidInfo__wrapper">
          <div className="covidInfo__title">
            <h2>Get ready for game day</h2>
          </div>
          <div className="covidInfo__collections">
            {covidInfo?.map((covidInfo, index) => (
              <div key={index} className="covidInfo__item">
                <img src={covidInfo.img} alt="" />
                <h1>{covidInfo.header}</h1>
                <h4>{covidInfo.title}</h4>
                <button>{covidInfo.btnWords}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="covirInfo__footer">Trending in beverages</p>
    </>
  );
}

export default CovidInfo;
