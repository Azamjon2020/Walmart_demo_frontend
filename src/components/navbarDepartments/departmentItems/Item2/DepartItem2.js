import React from "react";
// import "../Item1/DepartItem1.css";
import "./DepartItem2.css";
import {
  firstdepartmentsItem1,
  firstdepartmentsItem2,
  secondDepartmentsItem1,
} from "../../../../data/NavbarData";

function DepartItem2({ setDepartmentsLiHover2 }) {
  return (
    <>
      {" "}
      <div
        className="department__li__plus2"
        onMouseEnter={() => setDepartmentsLiHover2(true)}
        onMouseLeave={() => setDepartmentsLiHover2(false)}
      >
        <div className="department__left__scroll"></div>
        <div className="department__li__content2">
          <ul>
            {secondDepartmentsItem1?.map((navbarLinks, index) => (
              <li key={index}>{navbarLinks.title}</li>
            ))}
          </ul>
          <ul>
            {firstdepartmentsItem1?.map((navbarLinks, index) => (
              <li key={index}>{navbarLinks.title}</li>
            ))}
          </ul>
          <ul>
            {secondDepartmentsItem1?.map((navbarLinks, index) => (
              <li key={index}>{navbarLinks.title}</li>
            ))}
          </ul>
          <ul>
            {firstdepartmentsItem2?.map((navbarLinks, index) => (
              <li key={index}>{navbarLinks.title}</li>
            ))}
          </ul>
        </div>
        <div className="department__li__plus__addition">
          <div className="department__li__plus__addition__img"></div>
          <h2>Nutritious eats</h2>
          <p>Satisfying foods for your lifestyle and dietary needs.</p>
          <button>Shop now</button>
        </div>
      </div>
    </>
  );
}

export default DepartItem2;
