import React from "react";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dashboard
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Dashboard</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="assets/img/patients/patient.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Richard Wilson</h3>
                      <div className="patient-details">
                        <h5>
                          <i className="fas fa-birthday-cake"></i> 24 Jul 1983,
                          38 years
                        </h5>
                        <h5 className="mb-0">
                          <i className="fas fa-map-marker-alt"></i> Newyork, USA
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li className="active">
                        <Link to="/client-dashboard">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/favourites">
                          <i className="fas fa-bookmark"></i>
                          <span>Favourites</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/chat">
                          <i className="fas fa-comments"></i>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </Link>
                      </li>
                      <li>
                        <Link to="/videocall">
                          <i className="fas fa-comments"></i>
                          <span>Video Call</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/audiocall">
                          <i className="fas fa-comments"></i>
                          <span>Voice Call</span>
                          
                        </Link>
                      </li>
                      <li>
                        <Link to="/profile-settings">
                          <i className="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/change-password">
                          <i className="fas fa-lock"></i>
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body pt-0">
                  <nav className="user-tabs mb-4">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#pat_appointments"
                          data-toggle="tab"
                        >
                          Appointments
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#pat_Plans"
                          data-toggle="tab"
                        >
                          Plans
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#pat_medical_records"
                          data-toggle="tab"
                        >
                          <span className="med-records">Records</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="#pat_billing"
                          data-toggle="tab"
                        >
                          Billing
                        </a>
                      </li>
                    </ul>
                  </nav>

                  <div className="tab-content pt-0">
                    <div
                      id="pat_appointments"
                      className="tab-pane fade show active"
                    >
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Coach</th>
                                  <th>Appt Date</th>
                                  <th>Booking Date</th>
                                  <th>Amount</th>
                                  <th>Follow Up</th>
                                  <th>Status</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Ruby Perrin <span>Yoga Expert</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    14 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      10.00 AM
                                    </span>
                                  </td>
                                  <td>12 Feb 2022</td>
                                  <td>$160</td>
                                  <td>16 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Darren Elder <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    12 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      8.00 PM
                                    </span>
                                  </td>
                                  <td>12 Feb 2022</td>
                                  <td>$250</td>
                                  <td>14 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-03.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Deborah Angel{" "}
                                        <span>Kick Boxing</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    11 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      11.00 AM
                                    </span>
                                  </td>
                                  <td>10 Feb 2022</td>
                                  <td>$400</td>
                                  <td>13 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-danger-light">
                                      Cancelled
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-04.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Sofia Brient <span>Wellness Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    10 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      3.00 PM
                                    </span>
                                  </td>
                                  <td>10 Feb 2022</td>
                                  <td>$350</td>
                                  <td>12 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-warning-light">
                                      Pending
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-05.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Marvin Campbell{" "}
                                        <span>Paleo Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    9 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      7.00 PM
                                    </span>
                                  </td>
                                  <td>8 Feb 2022</td>
                                  <td>$75</td>
                                  <td>11 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-06.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Katharine Berthold{" "}
                                        <span>Paleo Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    8 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      9.00 AM
                                    </span>
                                  </td>
                                  <td>6 Feb 2022</td>
                                  <td>$175</td>
                                  <td>10 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-danger-light">
                                      Cancelled
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-07.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Linda Tobin <span>Paleo Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    8 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      6.00 PM
                                    </span>
                                  </td>
                                  <td>6 Feb 2022</td>
                                  <td>$450</td>
                                  <td>10 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-08.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Paul Richard{" "}
                                        <span>Paleo Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    7 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      9.00 PM
                                    </span>
                                  </td>
                                  <td>7 Feb 2022</td>
                                  <td>$275</td>
                                  <td>9 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-09.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. John Gibbs <span>Paleo Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    6 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      8.00 PM
                                    </span>
                                  </td>
                                  <td>4 Feb 2022</td>
                                  <td>$600</td>
                                  <td>8 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-10.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Olga Barlow <span>Paleo Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>
                                    5 Feb 2022{" "}
                                    <span className="d-block text-info">
                                      5.00 PM
                                    </span>
                                  </td>
                                  <td>1 Feb 2022</td>
                                  <td>$100</td>
                                  <td>7 Feb 2022</td>
                                  <td>
                                    <span className="badge badge-pill bg-success-light">
                                      Confirm
                                    </span>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="tab-pane fade" id="pat_Plans">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Date </th>
                                  <th>Name</th>
                                  <th>Created by </th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>14 Feb 2022</td>
                                  <td>Plan 1</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Ruby Perrin <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>13 Feb 2022</td>
                                  <td>Plan 2</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Darren Elder <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>12 Feb 2022</td>
                                  <td>Plan 3</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-03.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Deborah Angel{" "}
                                        <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>11 Feb 2022</td>
                                  <td>Plan 4</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-04.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Sofia Brient <span>Holistic Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>10 Feb 2022</td>
                                  <td>Plan 5</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-05.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Marvin Campbell <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>9 Feb 2022</td>
                                  <td>Plan 6</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-06.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Katharine Berthold{" "}
                                        <span>Wellness Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>8 Feb 2022</td>
                                  <td>Plan 7</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-07.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Linda Tobin <span>kick Boxing</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>7 Feb 2022</td>
                                  <td>Plan 8</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-08.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Paul Richard{" "}
                                        <span>Yoga Expert</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>6 Feb 2022</td>
                                  <td>Plan 9</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-09.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. John Gibbs <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>5 Feb 2022</td>
                                  <td>Plan 10</td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-10.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Olga Barlow <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="pat_medical_records" className="tab-pane fade">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>ID</th>
                                  <th>Date </th>
                                  <th>Description</th>
                                  <th>Attachment</th>
                                  <th>Created</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0010</a>
                                  </td>
                                  <td>14 Feb 2022</td>
                                  <td>Nutritionists Filling</td>
                                  <td>
                                    <a href="#">Nutritionists-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Ruby Perrin <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0009</a>
                                  </td>
                                  <td>13 Feb 2022</td>
                                  <td>Teeth Cleaning</td>
                                  <td>
                                    <a href="#">Nutritionists-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Darren Elder <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0008</a>
                                  </td>
                                  <td>12 Feb 2022</td>
                                  <td>General Checkup</td>
                                  <td>
                                    <a href="#">cardio-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-03.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Deborah Angel{" "}
                                        <span>Cardiology</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0007</a>
                                  </td>
                                  <td>11 Feb 2022</td>
                                  <td>General Test</td>
                                  <td>
                                    <a href="#">general-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-04.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Sofia Brient <span>Holistic Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0006</a>
                                  </td>
                                  <td>10 Feb 2022</td>
                                  <td>Eye Test</td>
                                  <td>
                                    <a href="#">eye-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-05.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Marvin Campbell{" "}
                                        <span>Ophthalmology</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0005</a>
                                  </td>
                                  <td>9 Feb 2022</td>
                                  <td>Leg Pain</td>
                                  <td>
                                    <a href="#">ortho-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-06.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Katharine Berthold{" "}
                                        <span>Wellness Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  {/* <td><a href="#">#MR-0004</a></td> */}
                                  <td>
                                    <a href="#">#MR-0004</a>
                                  </td>
                                  <td>8 Feb 2022</td>
                                  <td>Head pain</td>
                                  <td>
                                    <a href="#">neuro-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-07.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Linda Tobin <span>kick Boxing</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0003</a>
                                  </td>
                                  <td>7 Feb 2022</td>
                                  <td>Skin Alergy</td>
                                  <td>
                                    <a href="#">alergy-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-08.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Paul Richard{" "}
                                        <span>Yoga Expert</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0002</a>
                                  </td>
                                  <td>6 Feb 2022</td>
                                  <td>Nutritionists Removing</td>
                                  <td>
                                    <a href="#">Nutritionists-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-09.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. John Gibbs <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="#">#MR-0001</a>
                                  </td>
                                  <td>5 Feb 2022</td>
                                  <td>Nutritionists Filling</td>
                                  <td>
                                    <a href="#">Nutritionists-test.pdf</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-10.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Olga Barlow <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="pat_billing" className="tab-pane fade">
                      <div className="card card-table mb-0">
                        <div className="card-body">
                          <div className="table-responsive">
                            <table className="table table-hover table-center mb-0">
                              <thead>
                                <tr>
                                  <th>Invoice No</th>
                                  <th>Doctor</th>
                                  <th>Amount</th>
                                  <th>Paid On</th>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0010</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-01.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Ruby Perrin <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$450</td>
                                  <td>14 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0009</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-02.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Darren Elder <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$300</td>
                                  <td>13 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0008</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-03.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Deborah Angel{" "}
                                        <span>Cardiology</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$150</td>
                                  <td>12 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0007</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-04.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Sofia Brient <span>Holistic Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$50</td>
                                  <td>11 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0006</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-05.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Marvin Campbell{" "}
                                        <span>Ophthalmology</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$600</td>
                                  <td>10 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0005</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-06.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Katharine Berthold{" "}
                                        <span>Wellness Health</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$200</td>
                                  <td>9 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0004</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-07.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Linda Tobin <span>kick Boxing</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$100</td>
                                  <td>8 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0003</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-08.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Paul Richard{" "}
                                        <span>Yoga Expert</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$250</td>
                                  <td>7 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0002</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-09.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. John Gibbs <span>Nutritionists</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$175</td>
                                  <td>6 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <a href="invoice-view.html">#INV-0001</a>
                                  </td>
                                  <td>
                                    <h2 className="table-avatar">
                                      <a
                                        href="doctor-profile.html"
                                        className="avatar avatar-sm mr-2"
                                      >
                                        <img
                                          className="avatar-img rounded-circle"
                                          src="assets/img/doctors/doctor-thumb-10.jpg"
                                          alt="User Image"
                                        />
                                      </a>
                                      <a href="doctor-profile.html">
                                        Dr. Olga Barlow <span>#0010</span>
                                      </a>
                                    </h2>
                                  </td>
                                  <td>$550</td>
                                  <td>5 Feb 2022</td>
                                  <td className="text-right">
                                    <div className="table-action">
                                      <a
                                        href="invoice-view.html"
                                        className="btn btn-sm bg-info-light"
                                      >
                                        <i className="far fa-eye"></i> View
                                      </a>
                                      <a
                                        href="#"
                                        className="btn btn-sm bg-primary-light"
                                      >
                                        <i className="fas fa-print"></i> Print
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDashboard;
