import React, { useState } from "react";
import "./SignIn.css";
import signInLogo from "../../assets/loginLogo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { adminAction } from "../../redux/actions/adminAction";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [isAddress, setIsAddress] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [passwordType, setPasswordType] = useState(true);

  const [user, setUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(user);
  const loginToAdmin = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/admin/auth", {
        email: email,
        password: password,
      })
      .then((user) => {
        if (user?.data) {
          setUser(user?.data);
          dispatch(adminAction(user.data));
          history.push("/admin/new");
        }
        toast.success("Welcome to admin panel");
      })
      .catch((err) => console.log(err));
    await axios
      .post("http://localhost:8000/user/signin", {
        userEmail: email,
        userPassword: password,
      })
      .then((user) => {
        // console.log(user);
        <>
          {user.data === "You are registered"
            ? (toast.success("Welcome!!!"), history.push("/"))
            : toast.warning("You are not yet registered")}
        </>;
      })
      .catch((err) => console.log(err));

    if (email === "" || password === "") {
      return toast.warning("Please fill in all fields");
    }
  };
  return (
    <div className="SignIn">
      <div className="signInWrapper">
        <form onSubmit={loginToAdmin}>
          <Link to="/">
            <img src={signInLogo} alt="" />
          </Link>
          <h2>Sign in to your Walmart account</h2>
          <div className="signInAddress">
            {isAddress && <span>Email address</span>}
            <input
              onFocus={() => setIsAddress(true)}
              onBlur={() => setIsAddress(false)}
              type="text"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
            />
          </div>
          <div className="signInPassword">
            {isPassword && <span>Password</span>}
            <input
              onFocus={() => setIsPassword(true)}
              onBlur={() => setIsPassword(false)}
              type={passwordType ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <h5 onClick={() => setPasswordType(!passwordType)}>
              {passwordType ? "Hide" : "Show"}
            </h5>
          </div>
          <h6>Forgot password?</h6>
          <div className="sigiInChekbox">
            <input type="checkbox" />
            <span>Keep me signed in</span>
          </div>
          <div className="unCheck">
            <p>Uncheck if using a public device.</p>
            <span>More</span>
          </div>
          <button
            className="signInBtn"
            type="submit"
            style={
              email === "" && password === ""
                ? { cursor: "not-allowed" }
                : { cursor: "pointer" }
            }
          >
            Sign in
          </button>
          <h5>Don't have an account?</h5>
          <Link to="/signup" className="loginBtn">
            Create account
          </Link>
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

export default SignIn;
