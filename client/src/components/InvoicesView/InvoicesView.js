import React from "react";
import { Link } from "react-router-dom";

const InvoicesView = () => {
  return (
    <div>
      {/* <!-- Breadcrumb --> */}
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
                    Invoices
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Invoices</h2>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Breadcrumb --> */}

      {/* <!-- Page Content --> */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Dr. Darren Elder</h3>

                      <div className="patient-details">
                        <h5 className="mb-0">
                        Donec sollicitudin molestie malesuada.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li >
                        <Link to="/coach-dashboard">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/appointments">
                          <i className="fas fa-calendar-check"></i>
                          <span>Appointments</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/my-clients">
                          <i className="fas fa-user-injured"></i>
                          <span>My Clients</span>
                        </Link>
                      </li>
                      {/* <li>
                        <a href="schedule-timings.html">
                          <i className="fas fa-hourglass-start"></i>
                          <span>Schedule Timings</span>
                        </a>
                      </li> */}
                      <li className="active">
                        <Link to="/invoices-view">
                          <i className="fas fa-file-invoice"></i>
                          <span>Invoices</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/reviews">
                          <i className="fas fa-star"></i>
                          <span>Reviews</span>
                        </Link>
                      </li>
                      {/* <li>
                        <a href="chat-doctor.html">
                          <i className="fas fa-comments"></i>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li> */}
                      <li>
                        <Link to="/coach-profile-setting">
                          <i className="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </Link>
                      </li>
                      {/* <li>
                        <Link to="/social-media">
                          <i className="fas fa-share-alt"></i>
                          <span>Social Media</span>
                        </Link>
                      </li> */}
                      <li>
                        <Link to="/coach-change-password">
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
              <div className="card card-table">
                <div className="card-body">
                  {/* <!-- Invoice Table --> */}
                  <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                      <thead>
                        <tr>
                          <th>Invoice No</th>
                          <th>Client</th>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Richard Wilson <span>#PT0016</span>
                              </a>
                            </h2>
                          </td>
                          <td>$450</td>
                          <td>14 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient1.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Charlene Reed <span>#PT0001</span>
                              </a>
                            </h2>
                          </td>
                          <td>$200</td>
                          <td>13 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient2.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Travis Trimble <span>#PT0002</span>
                              </a>
                            </h2>
                          </td>
                          <td>$100</td>
                          <td>12 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient3.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Carl Kelly <span>#PT0003</span>
                              </a>
                            </h2>
                          </td>
                          <td>$350</td>
                          <td>11 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient4.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Michelle Fairfax <span>#PT0004</span>
                              </a>
                            </h2>
                          </td>
                          <td>$275</td>
                          <td>10 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient5.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Gina Moore <span>#PT0005</span>
                              </a>
                            </h2>
                          </td>
                          <td>$600</td>
                          <td>9 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient6.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Elsie Gilley <span>#PT0006</span>
                              </a>
                            </h2>
                          </td>
                          <td>$50</td>
                          <td>8 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient7.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Joan Gardner <span>#PT0007</span>
                              </a>
                            </h2>
                          </td>
                          <td>$400</td>
                          <td>7 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient8.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Daniel Griffing <span>#PT0008</span>
                              </a>
                            </h2>
                          </td>
                          <td>$550</td>
                          <td>6 Nov 2019</td>
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
                                href="patient-profile.html"
                                className="avatar avatar-sm mr-2"
                              >
                                <img
                                  className="avatar-img rounded-circle"
                                  src="assets/img/patients/patient9.jpg"
                                  alt="User Image"
                                />
                              </a>
                              <a href="patient-profile.html">
                                Walter Roberson <span>#PT0009</span>
                              </a>
                            </h2>
                          </td>
                          <td>$100</td>
                          <td>5 Nov 2019</td>
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
                  {/* <!-- /Invoice Table --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Content -->   */}
    </div>
  );
};

export default InvoicesView;
