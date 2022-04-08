import React from "react";
import "./Departments.css";
import { departItem } from "../../data/NavbarData";
function Departments() {
  return (
    <div className="departments">
      <div className="departments__wrappper">
        <div className="departments__title">
          <h2>Your favorite departments</h2>
          <p>View all</p>
        </div>
        <div className="departments__collections">
          {departItem?.map((departItem, index) => (
            <div
              key={index}
              className="departments__collection__item"
              style={{
                backgroundImage: `url(${departItem.bgImage})`,
                backgroundPosition: "center",
                backgroundSize: "100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1>{departItem.title}</h1>
            </div>
          ))}
        </div>
        <h6>In season clothes</h6>
      </div>
    </div>
  );
}

export default Departments;
