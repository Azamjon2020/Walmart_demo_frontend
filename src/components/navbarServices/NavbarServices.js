import React, { useState } from "react";
import "./NavbarServices.css";
import ServiceItem1 from "./serviceItems/serviceItem1/ServiceItem1";
import ServiceItem2 from "./serviceItems/serviceItem2/ServiceItem2";

function NavbarServices({ servicesHover, hoverToServices, setServicesHover }) {
  const [servicesLiHover1, setServicesLiHover1] = useState(false);
  const [servicesLiHover2, setServicesLiHover2] = useState(false);
  const [servicesLiHover3, setServicesLiHover3] = useState(false);
  const [servicesLiHover4, setServicesLiHover4] = useState(false);
  const [servicesLiHover5, setServicesLiHover5] = useState(false);
  const [servicesLiHover6, setServicesLiHover6] = useState(false);
  const [servicesLiHover7, setServicesLiHover7] = useState(false);
  const [servicesLiHover8, setServicesLiHover8] = useState(false);
  return (
    <>
      <div
        className={
          !servicesHover ? "services__wrapper__on" : "services__wrapper__off"
        }
        onMouseEnter={() => hoverToServices()}
      >
        <div
          className="services__wrapper"
          onMouseEnter={() => setServicesHover(false)}
          onMouseLeave={() => setServicesHover(true)}
        >
          <div className="services__wrapper__top"></div>
          {servicesLiHover1 && (
            <ServiceItem1
              hoverToServices={hoverToServices}
              setServicesLiHover1={setServicesLiHover1}
              servicesLiHover1={servicesLiHover1}
            />
          )}
          {servicesLiHover2 && (
            <ServiceItem2
              hoverToServices={hoverToServices}
              setServicesLiHover2={setServicesLiHover2}
              servicesLiHover2={servicesLiHover2}
            />
          )}
          {servicesLiHover3 && (
            <ServiceItem1
              hoverToServices={hoverToServices}
              setServicesLiHover1={setServicesLiHover1}
              servicesLiHover1={servicesLiHover1}
            />
          )}
          {servicesLiHover4 && (
            <ServiceItem2
              hoverToServices={hoverToServices}
              setServicesLiHover2={setServicesLiHover2}
              servicesLiHover2={servicesLiHover2}
            />
          )}
          {servicesLiHover5 && (
            <ServiceItem1
              hoverToServices={hoverToServices}
              setServicesLiHover1={setServicesLiHover1}
              servicesLiHover1={servicesLiHover1}
            />
          )}

          {servicesLiHover6 && (
            <ServiceItem1
              hoverToServices={hoverToServices}
              setServicesLiHover1={setServicesLiHover1}
              servicesLiHover1={servicesLiHover1}
            />
          )}
          {servicesLiHover7 && (
            <ServiceItem2
              hoverToServices={hoverToServices}
              setServicesLiHover2={setServicesLiHover2}
              servicesLiHover2={servicesLiHover2}
            />
          )}
          {servicesLiHover8 && (
            <ServiceItem1
              hoverToServices={hoverToServices}
              setServicesLiHover1={setServicesLiHover1}
              servicesLiHover1={servicesLiHover1}
            />
          )}

          <ul>
            <h5>All services</h5>
            <li
              className={
                servicesLiHover1 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover1(true)}
              onMouseLeave={() => setServicesLiHover1(false)}
            >
              {servicesLiHover1 ? <div></div> : <></>}
              Auto Care Center Services
            </li>
            <li
              className={
                servicesLiHover2 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover2(true)}
              onMouseLeave={() => setServicesLiHover2(false)}
            >
              {servicesLiHover2 ? <div></div> : <></>}
              Health Services
            </li>
            <li
              className={
                servicesLiHover3 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover3(true)}
              onMouseLeave={() => setServicesLiHover3(false)}
            >
              {servicesLiHover3 ? <div></div> : <></>}
              Registry, Lists, Gifts
            </li>
            <li
              className={
                servicesLiHover4 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover4(true)}
              onMouseLeave={() => setServicesLiHover4(false)}
            >
              {servicesLiHover4 ? <div></div> : <></>}
              Custom Cakes
            </li>
            <li
              className={
                servicesLiHover5 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover5(true)}
              onMouseLeave={() => setServicesLiHover5(false)}
            >
              {servicesLiHover5 ? <div></div> : <></>}
              Photo Services
            </li>
            <li
              className={
                servicesLiHover6 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover6(true)}
              onMouseLeave={() => setServicesLiHover6(false)}
            >
              {servicesLiHover6 ? <div></div> : <></>}
              Financial Services
            </li>
            <li
              className={
                servicesLiHover7 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover7(true)}
              onMouseLeave={() => setServicesLiHover7(false)}
            >
              {servicesLiHover7 ? <div></div> : <></>}
              Get Inspited
            </li>
            <li
              className={
                servicesLiHover8 ? "service__item__on" : "service__item__off"
              }
              onMouseEnter={() => setServicesLiHover8(true)}
              onMouseLeave={() => setServicesLiHover8(false)}
            >
              {servicesLiHover8 ? <div></div> : <></>}
              Community & Giving
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarServices;
