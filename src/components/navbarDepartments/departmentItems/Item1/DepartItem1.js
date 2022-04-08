import React from "react";
import "./DepartItem1.css";
import {
  firstdepartmentsItem1,
  firstdepartmentsItem2,
} from "../../../../data/NavbarData";

function DepartItem1({ setDepartmentsLiHover1 }) {
  return (
    <>
      <div
        className="department__li__plus"
        onMouseEnter={() => setDepartmentsLiHover1(true)}
        onMouseLeave={() => setDepartmentsLiHover1(false)}
      >
        <div className="department__left__scroll"></div>

        <div className="department__li__content">
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
        </div>
        <div className="department__li__plus__addition">
          <div className="department__li__plus__addition__img"></div>
          <h2>Don't miss out!</h2>
          <p>Save BIG winter faves!</p>
          <button>Shop now</button>
        </div>
      </div>
    </>
  );
}

export default DepartItem1;
