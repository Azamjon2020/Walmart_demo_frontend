import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import signInLogo from "../../assets/loginLogo.png";
import { FiX, FiCheck } from "react-icons/fi";
import "./Signup.css";
import axios from "axios";
import { toast } from "react-toastify";
// import nextId from "react-id-generator";
// import { useDispatch, useSelector } from "react-redux";
// import { createAccountAction } from "../../redux/actions/createAccountAction";

function Signup() {
  const [isFirstName, setIsFirstName] = useState(false);
  const [isLastName, setIsLastName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(true);

  // ******************* Send ******************* //

  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // ****************** redux ***************** //
  // let htmlId = nextId();
  // const users = useSelector((state) => state.createAccountReducer);
  // console.log(users);
  // const dispatch = useDispatch();
  // ****************** redux ***************** //

  const history = useHistory();
  const userLogin = async (e) => {
    e.preventDefault();
    if (!userFirstName || !userLastName || !userEmail) {
      return toast.warning("Please fill in all fields");
    } else if (
      !/[A-Z]/.test(userPassword) ||
      !/[0-9]/.test(userPassword) ||
      userPassword.split("").length < 7
    ) {
      return toast.warning("Create correcr password");
    } else if (userFirstName || userLastName || userEmail || userPassword) {
      await axios
        .post("http://localhost:8000/user/users", {
          userFirstName: userFirstName,
          userLastName: userLastName,
          userEmail: userEmail,
          userPassword: userPassword,
        })
        .then((user) => {
          <>
            {user.data !== "You can't use this email"
              ? (toast.success("Welcome!!!"), history.push("/"))
              : toast.warning(
                  "This email has already been used!!! Please change your Email"
                )}
          </>;
        })
        .catch((err) => console.error("err", err));
    }

    // setUserFirstName("");
    // setUserLastName("");
    // setUserEmail("");
    // setUserPassword("");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <form onSubmit={userLogin}>
          <Link to="/">
            <img src={signInLogo} alt="" />
          </Link>
          <h2>Sign in to your Walmart account</h2>

          <div className="loginAddress">
            {isFirstName && <span>First name</span>}
            <input
              onFocus={() => setIsFirstName(true)}
              onBlur={() => setIsFirstName(false)}
              type="text"
              placeholder="First name"
              value={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
              autoFocus
            />
          </div>
          <div className="loginAddress">
            {isLastName && <span>Last name</span>}
            <input
              onFocus={() => setIsLastName(true)}
              onBlur={() => setIsLastName(false)}
              type="text"
              placeholder="Last name"
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
            />
          </div>
          <div className="loginAddress">
            {isEmail && <span>Email address</span>}
            <input
              onFocus={() => setIsEmail(true)}
              onBlur={() => setIsEmail(false)}
              type="email"
              placeholder="Email address"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="loginPassword">
            {isPassword && <span>Password</span>}
            <input
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              onFocus={() => setIsPassword(true)}
              onBlur={() => setIsPassword(false)}
              type={passwordType ? "text" : "password"}
              placeholder="Create a password"
            />
            <h5 onClick={() => setPasswordType(!passwordType)}>
              {passwordType ? "Hide" : "Show"}
            </h5>
          </div>
          <div className="passwordFunc">
            <p>Your password must include the following:</p>
            <div className="passwordFuncChecked">
              <span>
                {userPassword.length > 7 ? (
                  <FiCheck className="svgGreen" />
                ) : (
                  <FiX className="svgRed" />
                )}
                8 – 100 characters
              </span>
              <span>
                {/[A-Z]/.test(userPassword) ? (
                  <FiCheck className="svgGreen" />
                ) : (
                  <FiX className="svgRed" />
                )}
                Upper & lowercase letters
              </span>
              <span>
                {/[0-9]/.test(userPassword) ? (
                  <FiCheck className="svgGreen" />
                ) : (
                  <FiX className="svgRed" />
                )}
                At least one number or special character
              </span>
            </div>
          </div>
          <div className="loginChekbox">
            <input type="checkbox" />
            <span>Keep me signed in</span>
          </div>
          <div className="unCheck">
            <p>Uncheck if using a public device.</p>
            <span>More</span>
          </div>
          <div className="loginChekboxSend">
            <input type="checkbox" />
            <span>
              Send me emails about new arrivals, hot items, daily savings, &
              more.
            </span>
          </div>
          <div className="unCheckSend">
            <p>
              By clicking Create Account, you acknowledge you have read and
              agreed to our
              <span>
                <span>Terms of Use</span> and <span>Privacy Policy.</span>
              </span>
            </p>
          </div>
          <div className="loginBtnsWrapper">
            <button
              to="/signup"
              className="loginBtns"
              style={
                userFirstName === "" ||
                userLastName === "" ||
                userPassword === "" ||
                userEmail === ""
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            >
              Create account
            </button>
            <h5 className="loginTitle">Already have an account?</h5>
            <Link to="/signin" className="signInBtns">
              Sign in
            </Link>
          </div>
        </form>
      </div>
      <div className="signInFooter">
        <ul>
          <li>Privacy & Security</li>
          <li>CA Privacy Rights</li>
          <li>Do Not Sell My Personal Information</li>
          <li>Request My Personal Information</li>
          <li>Help</li>
          <li>Terms of Use</li>
        </ul>
        <span>©2022 Walmart. All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Signup;
