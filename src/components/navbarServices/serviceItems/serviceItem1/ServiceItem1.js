import React from "react";
import {
  firstdepartmentsItem1,
  firstdepartmentsItem2,
} from "../../../../data/NavbarData";
import "./ServiceItem1.css";

function ServiceItem1({ setServicesLiHover1 }) {
  return (
    <>
      <div
        className="service__li__plus"
        onMouseEnter={() => setServicesLiHover1(true)}
        onMouseLeave={() => setServicesLiHover1(false)}
      >
        <div className="service__li__content">
          <ul>
            {firstdepartmentsItem2?.map((navbarLinks, index) => (
              <li key={index}>{navbarLinks.title}</li>
            ))}
          </ul>
          <ul>
            {firstdepartmentsItem1?.map((navbarLinks, index) => (
              <li key={index}>{navbarLinks.title}</li>
            ))}
          </ul>
        </div>
        <div className="service__li__plus__addition">
          <div className="service__li__plus__addition__img"></div>
          <h2>Make a list & more</h2>
          <p>From wish lists to gift finder to registries.</p>
          <button>Order online</button>
        </div>
      </div>
    </>
  );
}

export default ServiceItem1;
