import React from "react";
const MyClient = () => {
  return (
    <>
      <div className="breadcrumb-bar">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-md-12 col-12">
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index-2.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My Client
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">My Client</h2>
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
                        src="assets/img/doctors/doctor-thumb-02.jpg"
                        alt="User Image"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Dr. Darren Elder</h3>

                      <div className="patient-details">
                        <h5 className="mb-0">
                          BDS, MDS - Oral & Maxillofacial Surgery
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <a href="doctor-dashboard.html">
                          <i className="fas fa-columns"></i>
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="appointments.html">
                          <i className="fas fa-calendar-check"></i>
                          <span>Appointments</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="my-patients.html">
                          <i className="fas fa-user-injured"></i>
                          <span>My Patients</span>
                        </a>
                      </li>
                      <li>
                        <a href="schedule-timings.html">
                          <i className="fas fa-hourglass-start"></i>
                          <span>Schedule Timings</span>
                        </a>
                      </li>
                      <li>
                        <a href="invoices.html">
                          <i className="fas fa-file-invoice"></i>
                          <span>Invoices</span>
                        </a>
                      </li>
                      <li>
                        <a href="reviews.html">
                          <i className="fas fa-star"></i>
                          <span>Reviews</span>
                        </a>
                      </li>
                      <li>
                        <a href="chat-doctor.html">
                          <i className="fas fa-comments"></i>
                          <span>Message</span>
                          <small className="unread-msg">23</small>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-profile-settings.html">
                          <i className="fas fa-user-cog"></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a href="social-media.html">
                          <i className="fas fa-share-alt"></i>
                          <span>Social Media</span>
                        </a>
                      </li>
                      <li>
                        <a href="doctor-change-password.html">
                          <i className="fas fa-lock"></i>
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">
                          <i className="fas fa-sign-out-alt"></i>
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="row row-grid">
                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card widget-profile pat-widget-profile">
                    <div className="card-body">
                      <div className="pro-widget-content">
                        <div className="profile-info-widget">
                          <a
                            href="patient-profile.html"
                            className="booking-doc-img"
                          >
                            <img
                              src="assets/img/patients/patient.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div className="profile-det-info">
                            <h3>
                              <a href="patient-profile.html">Richard Wilson</a>
                            </h3>

                            <div className="patient-details">
                              <h5>
                                <b>Patient ID :</b> P0016
                              </h5>
                              <h5 className="mb-0">
                                <i className="fas fa-map-marker-alt"></i>{" "}
                                Alabama, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="patient-info">
                        <ul>
                          <li>
                            Phone <span>+1 952 001 8563</span>
                          </li>
                          <li>
                            Age <span>38 Years, Male</span>
                          </li>
                          <li>
                            Blood Group <span>AB+</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card widget-profile pat-widget-profile">
                    <div className="card-body">
                      <div className="pro-widget-content">
                        <div className="profile-info-widget">
                          <a
                            href="patient-profile.html"
                            className="booking-doc-img"
                          >
                            <img
                              src="assets/img/patients/patient1.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div className="profile-det-info">
                            <h3>
                              <a href="patient-profile.html">Charlene Reed</a>
                            </h3>

                            <div className="patient-details">
                              <h5>
                                <b>Patient ID :</b> P0001
                              </h5>
                              <h5 className="mb-0">
                                <i className="fas fa-map-marker-alt"></i> North
                                Carolina, USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="patient-info">
                        <ul>
                          <li>
                            Phone <span>+1 828 632 9170</span>
                          </li>
                          <li>
                            Age <span>29 Years, Female</span>
                          </li>
                          <li>
                            Blood Group <span>O+</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-3">
                  <div className="card widget-profile pat-widget-profile">
                    <div className="card-body">
                      <div className="pro-widget-content">
                        <div className="profile-info-widget">
                          <a href="#" className="booking-doc-img">
                            <img
                              src="assets/img/patients/patient2.jpg"
                              alt="User Image"
                            />
                          </a>
                          <div className="profile-det-info">
                            <h3>Travis Trimble </h3>
                            <div className="patient-details">
                              <h5>
                                <b>Patient ID :</b> PT0002
                              </h5>
                              <h5 className="mb-0">
                                <i className="fas fa-map-marker-alt"></i> Maine,
                                USA
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="patient-info">
                        <ul>
                          <li>
                            Phone <span>+1 207 729 9974</span>
                          </li>
                          <li>
                            Age <span>23 Years, Male</span>
                          </li>
                          <li>
                            Blood Group <span>B+</span>
                          </li>
                        </ul>
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
export default MyClient;