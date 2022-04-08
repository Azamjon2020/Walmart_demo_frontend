import React, { useState } from "react";
import "./Navbar.css";
import { IoGrid } from "react-icons/io5";
import { MdOutlineGridView } from "react-icons/md";
import { HiOutlineViewGrid, HiViewGrid } from "react-icons/hi";
import { FiX, FiSearch, FiDownload, FiChevronsRight } from "react-icons/fi";
import { BsPersonPlus } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import NavbarDepartments from "../navbarDepartments/NavbarDepartments";
import NavbarServices from "../navbarServices/NavbarServices";
import NavbarReOrder from "../navbarReOrder/NavbarReOrder";
import NavbarSignIn from "../navbarSignIn/NavbarSignIn";
import Basket from "../basket/Basket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Navbar() {
  const product = useSelector((state) => state.product);
  let counts = product.products
    ?.map((coust) => +coust.productCost)
    .reduce((a, b) => a + b, 0);

  const [isInputOutline, setIsInputOutline] = useState("");
  const [hasInput, setHasInput] = useState("");
  const [departmentsHover, setDepartmentsHover] = useState(true);
  const [servicesHover, setServicesHover] = useState(true);
  const [reOrderHover, setReOrderHover] = useState(true);
  const [signInHover, setSignInHover] = useState(true);
  const [basketCliked, setBasketCliked] = useState(true);

  const hoverToDepartments = () => {
    setDepartmentsHover(!departmentsHover);
  };
  const hoverToServices = () => {
    setServicesHover(!servicesHover);
  };
  const hoverToReOrder = () => {
    setReOrderHover(!reOrderHover);
  };
  const hoverToSignIn = () => {
    setSignInHover(!signInHover);
  };
  // searching
  const [searchResults, setSearchResults] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const searchedPro = (value) => {
    if (value !== "") {
      axios
        .post("http://localhost:8000/create/search", {
          productName: value,
        })
        .then((response) => setSearchResults(response.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="walmart__navbar">
      <NavbarDepartments
        hoverToDepartments={hoverToDepartments}
        setDepartmentsHover={setDepartmentsHover}
        departmentsHover={departmentsHover}
      />
      <NavbarServices
        setServicesHover={setServicesHover}
        hoverToServices={hoverToServices}
        servicesHover={servicesHover}
      />
      <NavbarReOrder
        reOrderHover={reOrderHover}
        hoverToReOrder={hoverToReOrder}
        setReOrderHover={setReOrderHover}
      />
      <NavbarSignIn
        hoverToSignIn={hoverToSignIn}
        setSignInHover={setSignInHover}
        signInHover={signInHover}
      />
      <Basket basketCliked={basketCliked} setBasketCliked={setBasketCliked} />
      <Link to="/" className="walmart__logo">
        <img
          src="https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg"
          alt="walmart logo's beautifull img"
        />
      </Link>
      <div
        className="walmart__departments"
        onMouseEnter={() => setDepartmentsHover(false)}
        onMouseLeave={() => setDepartmentsHover(true)}
      >
        {departmentsHover ? <MdOutlineGridView /> : <IoGrid />}
        <h5>Departments</h5>
      </div>
      <div
        className="walmart__services"
        onMouseEnter={() => setServicesHover(false)}
        onMouseLeave={() => setServicesHover(true)}
      >
        {servicesHover ? <HiOutlineViewGrid /> : <HiViewGrid />}
        <h5>Services</h5>
      </div>
      <div
        className="walmart__search"
        style={
          isInputOutline ? { borderRadius: "0px" } : { borderRadius: "20px" }
        }
      >
        <div
          className={
            isInputOutline
              ? "walmart__search__outline"
              : "walmart__search__outline__none"
          }
        ></div>
        <div className="walmart__search__border">
          <input
            type="text"
            placeholder="Search everything at Walmart online and in store"
            // value={hasInput}
            onFocus={() => {
              setIsInputOutline(true);
              setSearchActive(false);
            }}
            onChange={(e) => {
              setHasInput(e.target.value);
              searchedPro(e.target.value);
            }}
            onBlur={() => setIsInputOutline(false)}
          />
          <FiX
            onClick={() => setHasInput("")}
            className={
              hasInput.length
                ? "walmart__search__x"
                : "walmart__search__x__none"
            }
          />
          <div className="walmart__search__bg">
            <FiSearch onClick={() => setIsInputOutline("")} />
          </div>
          <ul
            className="search_collection_product"
            style={
              searchActive && searchResults.productName === ""
                ? { display: "none" }
                : { display: "block" }
            }
          >
            {!searchActive &&
              searchResults?.map((searchItem, index) => (
                <Link
                  key={index}
                  className="searched_item__product__wrapper"
                  onClick={() => setSearchActive(true)}
                  to={`/products/search/${searchItem?._id}`}
                >
                  <li className="searched_item__product">
                    {searchItem?.productName}
                    <FiChevronsRight />
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      </div>
      <div
        className="walmart__reorder"
        onMouseEnter={() => setReOrderHover(false)}
        onMouseLeave={() => hoverToReOrder(true)}
      >
        <FiDownload />
        <div className="walmart__reorder__text">
          <h6>Reorder</h6>
          <h5>My items</h5>
        </div>
      </div>
      <div
        className="walmart__sig_in"
        onMouseEnter={() => setSignInHover(false)}
        onMouseLeave={() => setSignInHover(true)}
      >
        <BsPersonPlus />
        <div className="walmart__sig_in__text">
          <h6>Sign in</h6>
          <h5>Account</h5>
        </div>
      </div>
      <div className="walmart__basket" onClick={() => setBasketCliked(false)}>
        <CgShoppingCart />
        <span
          style={
            product.products?.length < 2
              ? { fontSize: "12px" }
              : { fontSize: "10px" }
          }
        >
          {product?.products && product.products?.length}
        </span>
        <p>{`$ ${counts}`}</p>
      </div>
    </div>
  );
}

export default Navbar;
