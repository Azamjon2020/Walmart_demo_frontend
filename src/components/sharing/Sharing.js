import React from "react";
import { sharing } from "../../data/NavbarData";
import "./Sharing.css";
function Sharing() {
  return (
    <>
      <div className="sharingInfo">
        <div className="sharingInfo__wrapper">
          <div className="sharingInfo__title">
            <h2>Sharing our values</h2>
          </div>
          <div className="sharingInfo__collections">
            {sharing?.map((sharing, index) => (
              <div key={index} className="sharingInfo__item">
                <img src={sharing.img} alt="" />
                <h1>{sharing.header}</h1>
                <h4>{sharing.title}</h4>
                <button>{sharing.btnWords}</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sharing;
