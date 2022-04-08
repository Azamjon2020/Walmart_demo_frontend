import React from "react";
import "./NavbarSignIn.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function NavbarSignIn({ hoverToSignIn, setSignInHover, signInHover }) {
  return (
    <>
      <div
        className={
          !signInHover ? "signIn__wrapper__on" : "signIn__wrapper__off"
        }
        onMouseEnter={() => hoverToSignIn()}
      >
        <div
          className="signIn__wrapper"
          onMouseEnter={() => setSignInHover(false)}
          onMouseLeave={() => setSignInHover(true)}
        >
          <div className="signIn__wrapper__top"></div>
          <div className="sign_in__btns">
            <Link className="button" to="/signin" style={{ color: "white" }}>
              Sign in
            </Link>
            <Link className="button" to="/signup" style={{ color: "black" }}>
              Create an account
            </Link>
          </div>
          <ul>
            <li>
              <IoDocumentTextOutline /> <span>Purchase History</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarSignIn;
