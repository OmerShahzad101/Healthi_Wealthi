import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg header-nav">
        <div className="navbar-header">
          <a id="mobile_btn" href="javascript:void(0);">
            <span className="bar-icon">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </a>
          <Link to="/" className="navbar-brand logo">
            <img
              src="assets/images/Logo.svg"
              className="img-fluid"
              alt="Logo"
            />
          </Link>
        </div>
        <div className="main-menu-wrapper">
          <div className="menu-header">
            <Link to="/" className="menu-logo">
              <img
                src="assets/images/Logo.svg"
                className="img-fluid"
                alt="logo"
              />
            </Link>
            <a
              id="menu_close"
              className="menu-close"
              href="javascript:void(0);"
            >
              <i className="fas fa-times"></i>
            </a>
          </div>
          <ul className="main-nav">
            <li className="active">
              <Link to="/">Home</Link>
            </li>
            <li className="has-submenu">
              <a href="#">
                Coach <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="submenu">
                <li>
                  <Link to="/coach-dashboard">Coach Dashboard</Link>
                </li>
                <li>
                  <Link to="appointments">Appointments</Link>
                </li>
                <li>
                  <a href="schedule-timings.html">Schedule Timing</a>
                </li>
                <li>
                  <a href="my-patients.html">Patients List</a>
                </li>
                <li>
                  <a href="patient-profile.html">Patients Profile</a>
                </li>
                <li>
                  <a href="chat-doctor.html">Chat</a>
                </li>
                <li>
                  <Link to="/invoice">Invoice</Link>
                </li>
                <li>
                  <a href="doctor-profile-settings.html">Profile Settings</a>
                </li>
                <li>
                  <a href="reviews.html">Reviews</a>
                </li>
                <li>
                  <a href="doctor-register.html">Doctor Register</a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">
                Patients <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="submenu">
                <li>
                  <Link to="/search-coach">Search Coach</Link>
                </li>
                <li>
                  <a href="/coach-profile">Coach Profile</a>
                </li>
                <li>
                  <Link to="/book-appointment">Booking</Link>
                </li>
                <li>
                  <Link to="/checkout">Checkout</Link>
                </li>
                <li>
                  <Link to="/booking-successful">Booking Success</Link>
                </li>
                <li>
                  <a href="patient-dashboard.html">Patient Dashboard</a>
                </li>
                <li>
                  <a href="favourites.html">Favourites</a>
                </li>
                {/* <li>
                  <a href="chat.html">Chat</a>
                </li> */}
                <li>
                  <a href="profile-settings.html">Profile Settings</a>
                </li>
                <li>
                  <a href="change-password.html">Change Password</a>
                </li>
              </ul>
            </li>
            <li className="has-submenu">
              <a href="#">
                Pages <i className="fas fa-chevron-down"></i>
              </a>
              <ul className="submenu">
                {/* <li>
                  <a href="voice-call.html">Voice Call</a>
                </li>
                <li>
                  <a href="video-call.html">Video Call</a>
                </li> */}
                <li>
                  <Link to="/search-coach">Search Coach</Link>
                </li>
                <li>
                  <Link to="/calendar">Calendar</Link>
                </li>

                <li className="has-submenu">
                  <a href="invoices.html">Invoices</a>
                  <ul className="submenu">
                    <li>
                      <Link to="/invoice">Invoices</Link>
                    </li>
                    <li>
                      <Link to="/invoices-view">Invoices View</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <a href="blank-page.html">Starter Page</a>
                </li> */}
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/forgot-password">Forgot Password</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="admin/index.html" target="_blank">
                Admin
              </a>
            </li>
            <li className="login-link">
              <Link to="/login">Login / Signup</Link>
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
            <Link className="nav-link header-login" to="/login">
              login / Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
