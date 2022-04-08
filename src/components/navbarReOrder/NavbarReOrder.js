import React from "react";
import "./NavbarReOrder.css";
import { FiDownload, FiHeart, FiBriefcase } from "react-icons/fi";
function NavbarReOrder({ reOrderHover, hoverToReOrder, setReOrderHover }) {
  return (
    <>
      <div
        className={
          !reOrderHover ? "reOrder__wrapper__on" : "reOrder__wrapper__off"
        }
        onMouseEnter={() => hoverToReOrder()}
      >
        <div
          className="reOrder__wrapper"
          onMouseEnter={() => setReOrderHover(false)}
          onMouseLeave={() => setReOrderHover(true)}
        >
          <div className="reOrder__wrapper__top"></div>
          <ul>
            <li>
              <FiDownload /> <span>Roorder</span>
            </li>
            <li>
              <FiHeart /> <span>Lists</span>
            </li>
            <li>
              <FiBriefcase /> <span>Registries</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarReOrder;
