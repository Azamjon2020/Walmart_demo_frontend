import React, { useState } from "react";
import "./NavbarDepartments.css";

import DepartItem1 from "./departmentItems/Item1/DepartItem1";
import DepartItem2 from "./departmentItems/Item2/DepartItem2";
function NavbarDepartments({
  departmentsHover,
  hoverToDepartments,
  setDepartmentsHover,
}) {
  const [departmentsLiHover1, setDepartmentsLiHover1] = useState(false);
  const [departmentsLiHover2, setDepartmentsLiHover2] = useState(false);
  const [departmentsLiHover3, setDepartmentsLiHover3] = useState(false);
  const [departmentsLiHover4, setDepartmentsLiHover4] = useState(false);
  const [departmentsLiHover5, setDepartmentsLiHover5] = useState(false);
  const [departmentsLiHover6, setDepartmentsLiHover6] = useState(false);
  const [departmentsLiHover7, setDepartmentsLiHover7] = useState(false);
  const [departmentsLiHover8, setDepartmentsLiHover8] = useState(false);
  const [departmentsLiHover9, setDepartmentsLiHover9] = useState(false);
  const [departmentsLiHover10, setDepartmentsLiHover10] = useState(false);
  const [departmentsLiHover11, setDepartmentsLiHover11] = useState(false);
  return (
    <>
      <div
        className={
          !departmentsHover
            ? "departments__wrapper__on"
            : "departments__wrapper__off"
        }
        onMouseEnter={() => hoverToDepartments()}
      >
        <div
          className="departments__wrapper"
          onMouseEnter={() => setDepartmentsHover(false)}
          onMouseLeave={() => setDepartmentsHover(true)}
        >
          <div className="departments__wrapper__top"></div>
          {departmentsLiHover1 && (
            <DepartItem1
              hoverToDepartments={hoverToDepartments}
              setDepartmentsLiHover1={setDepartmentsLiHover1}
              departmentsLiHover1={departmentsLiHover1}
            />
          )}
          {departmentsLiHover2 && (
            <DepartItem2 setDepartmentsLiHover2={setDepartmentsLiHover2} />
          )}
          {departmentsLiHover3 && (
            <DepartItem1
              hoverToDepartments={hoverToDepartments}
              setDepartmentsLiHover1={setDepartmentsLiHover1}
              departmentsLiHover1={departmentsLiHover1}
            />
          )}
          {departmentsLiHover4 && (
            <DepartItem2 setDepartmentsLiHover2={setDepartmentsLiHover2} />
          )}
          {departmentsLiHover5 && (
            <DepartItem1
              hoverToDepartments={hoverToDepartments}
              setDepartmentsLiHover1={setDepartmentsLiHover1}
              departmentsLiHover1={departmentsLiHover1}
            />
          )}
          {departmentsLiHover6 && (
            <DepartItem2 setDepartmentsLiHover2={setDepartmentsLiHover2} />
          )}
          {departmentsLiHover7 && (
            <DepartItem1
              hoverToDepartments={hoverToDepartments}
              setDepartmentsLiHover1={setDepartmentsLiHover1}
              departmentsLiHover1={departmentsLiHover1}
            />
          )}
          {departmentsLiHover8 && (
            <DepartItem2 setDepartmentsLiHover2={setDepartmentsLiHover2} />
          )}
          {departmentsLiHover9 && (
            <DepartItem1
              hoverToDepartments={hoverToDepartments}
              setDepartmentsLiHover1={setDepartmentsLiHover1}
              departmentsLiHover1={departmentsLiHover1}
            />
          )}
          {departmentsLiHover10 && (
            <DepartItem2 setDepartmentsLiHover2={setDepartmentsLiHover2} />
          )}

          <ul>
            <h5>All departments</h5>
            <li
              className={
                departmentsLiHover1
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover1(true)}
              onMouseLeave={() => setDepartmentsLiHover1(false)}
            >
              {departmentsLiHover1 ? <div></div> : <></>}
              Saving & Featured Shops
            </li>
            <li
              className={
                departmentsLiHover2
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover2(true)}
              onMouseLeave={() => setDepartmentsLiHover2(false)}
            >
              {departmentsLiHover2 ? <div></div> : <></>}
              Grocery
            </li>
            <li
              className={
                departmentsLiHover3
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover3(true)}
              onMouseLeave={() => setDepartmentsLiHover3(false)}
            >
              {departmentsLiHover3 ? <div></div> : <></>}
              Electronics
            </li>
            <li
              className={
                departmentsLiHover4
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover4(true)}
              onMouseLeave={() => setDepartmentsLiHover4(false)}
            >
              {departmentsLiHover4 ? <div></div> : <></>}
              Clothing, Shoes & Accessories
            </li>
            <li
              className={
                departmentsLiHover5
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover5(true)}
              onMouseLeave={() => setDepartmentsLiHover5(false)}
            >
              {departmentsLiHover5 ? <div></div> : <></>}
              Home, Furniture & Appliances
            </li>
            <li
              className={
                departmentsLiHover6
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover6(true)}
              onMouseLeave={() => setDepartmentsLiHover6(false)}
            >
              {departmentsLiHover6 ? <div></div> : <></>}
              Toys & Video Games
            </li>
            <li
              className={
                departmentsLiHover7
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover7(true)}
              onMouseLeave={() => setDepartmentsLiHover7(false)}
            >
              {departmentsLiHover7 ? <div></div> : <></>}
              Home Improvement
            </li>
            <li
              className={
                departmentsLiHover8
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover8(true)}
              onMouseLeave={() => setDepartmentsLiHover8(false)}
            >
              {departmentsLiHover8 ? <div></div> : <></>}
              Baby
            </li>
            <li
              className={
                departmentsLiHover9
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover9(true)}
              onMouseLeave={() => setDepartmentsLiHover9(false)}
            >
              {departmentsLiHover9 ? <div></div> : <></>}
              Patio & Garden
            </li>
            <li
              className={
                departmentsLiHover10
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover10(true)}
              onMouseLeave={() => setDepartmentsLiHover10(false)}
            >
              {departmentsLiHover10 ? <div></div> : <></>}
              Household Essentials
            </li>
            <li
              className={
                departmentsLiHover11
                  ? "department__item__on"
                  : "department__item__off"
              }
              onMouseEnter={() => setDepartmentsLiHover11(true)}
              onMouseLeave={() => setDepartmentsLiHover11(false)}
            >
              {departmentsLiHover11 ? <div></div> : <></>}
              Beauty
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarDepartments;
