import React from "react";
import "./Footer.css";
import { footerItems } from "../../data/NavbarData";
function Footer() {
  return (
    <>
      <div className="footer__feedback">
        <h3>We’d love to hear what you think!</h3>
        <button>Give feedback</button>
      </div>
      <div className="footer">
        <ul>
          {footerItems?.map((items, index) => (
            <li key={index}>{items}</li>
          ))}
        </ul>
        <p>© {new Date().getFullYear()} Walmart. All Rights Reserved.</p>
      </div>
    </>
  );
}

export default Footer;
