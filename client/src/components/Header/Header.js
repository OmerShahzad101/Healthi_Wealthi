import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import moment from "moment";

const Header = () => {
  const logout = () => {
    localStorage.removeItem("accessToken");
  };
  const token = JSON.parse(localStorage.getItem("accessToken"));
  // let id = null;
  // let decoded = null;
  // if (token) {
  //   decoded = jwt_decode(token);
  //   let exp_date = decoded.exp;
  //   var dateString = moment.unix(exp_date).format("DD-MM-YYYY");
  //   if (dateString <= moment().format("DD-MM-YYYY")) {
  //     logout();
  //   }
  // }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="#">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/" className="navbar-brand logo">
            <img src="assets/img/Logo.svg" className="img-fluid" alt="Logo" />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/" className="menu-logo">
              <img src="assets/img/Logo.svg" className="img-fluid" alt="logo" />
            </Link>
            <a id="menu_close" className="menu-close" href="#;">
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>{" "}
            <li >
              <Link to="/about">About</Link>
            </li>
            <li >
              <Link to="/search-coach">Search Coach</Link>
            </li>
            <li >
              <Link to="/about">Contact us</Link>
            </li>
            
          </ul>
        </div>
        <ul className="nav header-navbar-rht">
          <li className="nav-item contact-item">
            <div className="header-contact-img">
              <i className="far fa-hospital"></i>
            </div>
            <div className="header-contact-detail">
              <p className="contact-header">Contact</p>
              <p className="contact-info-header">+1 315 369 5943</p>
            </div>
          </li>
          <li className="nav-item">
            {token ? (
              <Link
                className="nav-link header-logout"
                to="/login"
                onClick={logout}
              >
                logout
              </Link>
            ) : (
              <Link className="nav-link header-login" to="/login">
                login / Signup
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
