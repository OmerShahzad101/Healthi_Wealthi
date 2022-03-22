import React from "react";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className="main-wrapper">
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
                    Reviews
                  </li>
                </ol>
              </nav>
              <h2 className="breadcrumb-title">Reviews</h2>
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
              {/* <!-- Profile Sidebar --> */}
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
                      <li>
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
                      <li className="active">
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
              {/* <!-- /Profile Sidebar --> */}
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="doc-review review-listing">
                {/* <!-- Review Listing --> */}
                <ul className="comments-list">
                  {/* <!-- Comment List --> */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User Image"
                        src="assets/img/patients/patient.jpg"
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Richard Wilson</span>
                          <span className="comment-date">Reviewed 2 Days ago</span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star"></i>
                          </div>
                        </div>
                        <p className="recommended">
                          <i className="far fa-thumbs-up"></i> I recommend the
                          doctor
                        </p>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <a className="comment-btn" href="#">
                            <i className="fas fa-reply"></i> Reply
                          </a>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <a href="#" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </a>
                            <a href="#" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Comment Reply --> */}
                    <ul className="comments-reply">
                      {/* <!-- Comment Reply List --> */}
                      <li>
                        <div className="comment">
                          <img
                            className="avatar rounded-circle"
                            alt="User Image"
                            src="assets/img/doctors/doctor-thumb-02.jpg"
                          />
                          <div className="comment-body">
                            <div className="meta-data">
                              <span className="comment-author">
                                Dr. Darren Elder
                              </span>
                              <span className="comment-date">
                                Reviewed 3 Days ago
                              </span>
                            </div>
                            <p className="comment-content">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam. Curabitur non nulla sit amet nisl tempus
                            </p>
                            <div className="comment-reply">
                              <a className="comment-btn" href="#">
                                <i className="fas fa-reply"></i> Reply
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                      {/* <!-- /Comment Reply List --> */}
                    </ul>
                    {/* <!-- /Comment Reply --> */}
                  </li>
                  {/* <!-- /Comment List --> */}

                  {/* <!-- Comment List --> */}
                  <li>
                    <div className="comment">
                      <img
                        className="avatar rounded-circle"
                        alt="User Image"
                        src="assets/img/patients/patient2.jpg"
                      />
                      <div className="comment-body">
                        <div className="meta-data">
                          <span className="comment-author">Travis Trimble</span>
                          <span className="comment-date">Reviewed 4 Days ago</span>
                          <div className="review-count rating">
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                            <i className="fas fa-star filled"></i>
                          </div>
                        </div>
                        <p className="comment-content">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation. Curabitur non nulla sit amet
                          nisl tempus
                        </p>
                        <div className="comment-reply">
                          <a className="comment-btn" href="#">
                            <i className="fas fa-reply"></i> Reply
                          </a>
                          <p className="recommend-btn">
                            <span>Recommend?</span>
                            <a href="#" className="like-btn">
                              <i className="far fa-thumbs-up"></i> Yes
                            </a>
                            <a href="#" className="dislike-btn">
                              <i className="far fa-thumbs-down"></i> No
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/* <!-- /Comment List --> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- /Page Content --> */}
      
    </div>
  );
};

export default Reviews;
