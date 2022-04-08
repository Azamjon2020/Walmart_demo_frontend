import React from "react";
import {
  firstdepartmentsItem1,
  firstdepartmentsItem2,
} from "../../../../data/NavbarData";
import "../serviceItem1/ServiceItem1.css";

function ServiceItem2({ setServicesLiHover2 }) {
  return (
    <>
      <div
        className="service__li__plus"
        onMouseEnter={() => setServicesLiHover2(true)}
        onMouseLeave={() => setServicesLiHover2(false)}
      >
        <div className="service__li__content">
          <ul>
            {firstdepartmentsItem1?.map((navbarLinks, index) => (
              <li key={index}>{navbarLinks.title}</li>
            ))}
          </ul>
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
          <h2>Don't miss out!</h2>
          <p>Save BIG winter faves!</p>
          <button>Shop now</button>
        </div>
      </div>
    </>
  );
}

export default ServiceItem2;
