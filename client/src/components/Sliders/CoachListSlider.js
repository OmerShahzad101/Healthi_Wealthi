import React from "react";
import Slider from "react-slick";

const CoachListSlider = () => {
  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    variableWidth: true,
  };
  return (
    <section class="section section-doctor">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4">
            <div class="section-header ">
              <h2>Book Our Coach</h2>
              <p>Lorem Ipsum is simply dummy text </p>
            </div>
            <div class="about-content">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum.
              </p>
              <p>
                web page editors now use Lorem Ipsum as their default model
                text, and a search for 'lorem ipsum' will uncover many web sites
                still in their infancy. Various versions have evolved over the
                years, sometimes
              </p>
              <a href="javascript:;">Read More..</a>
            </div>
          </div>
          <div class="col-lg-8">
            <Slider {...settings} className="doctor-slider slider">
              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-01.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Ruby Perrin</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    MDS - Periodontology and Oral Implantology, BDS
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <span class="d-inline-block average-rating">(17)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Florida, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $300 - $1000
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Doctor Widget --> */}

              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-02.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Darren Elder</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    BDS, MDS - Oral & Maxillofacial Surgery
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(35)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Newyork, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $50 - $300
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Doctor Widget --> */}

              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-03.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Deborah Angel</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    MBBS, MD - General Medicine, DNB - Cardiology
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(27)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Georgia, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $100 - $400
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Doctor Widget --> */}

              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-04.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Sofia Brient</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    MBBS, MS - General Surgery, MCh - Urology
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(4)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Louisiana, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $150 - $250
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Doctor Widget --> */}

              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-05.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Marvin Campbell</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    MBBS, MD - Ophthalmology, DNB - Ophthalmology
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(66)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Michigan, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $50 - $700
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Doctor Widget --> */}

              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-06.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Katharine Berthold</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    MS - Orthopaedics, MBBS, M.Ch - Orthopaedics
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(52)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Texas, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $100 - $500
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Doctor Widget --> */}

              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-07.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Linda Tobin</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    MBBS, MD - General Medicine, DM - Neurology
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(43)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> Kansas, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $100 - $1000
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- /Doctor Widget --> */}

              {/* <!-- Doctor Widget --> */}
              <div class="profile-widget">
                <div class="doc-img">
                  <a href="doctor-profile.html">
                    <img
                      class="img-fluid"
                      alt="User Image"
                      src="assets/img/doctors/doctor-08.jpg"
                    />
                  </a>
                  <a href="#" class="fav-btn">
                    <i class="far fa-bookmark"></i>
                  </a>
                </div>
                <div class="pro-content">
                  <h3 class="title">
                    <a href="doctor-profile.html">Paul Richard</a>
                    <i class="fas fa-check-circle verified"></i>
                  </h3>
                  <p class="speciality">
                    MBBS, MD - Dermatology , Venereology & Lepros
                  </p>
                  <div class="rating">
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star filled"></i>
                    <i class="fas fa-star"></i>
                    <span class="d-inline-block average-rating">(49)</span>
                  </div>
                  <ul class="available-info">
                    <li>
                      <i class="fas fa-map-marker-alt"></i> California, USA
                    </li>
                    <li>
                      <i class="far fa-clock"></i> Available on Fri, 22 Mar
                    </li>
                    <li>
                      <i class="far fa-money-bill-alt"></i> $100 - $400
                      <i
                        class="fas fa-info-circle"
                        data-toggle="tooltip"
                        title="Lorem Ipsum"
                      ></i>
                    </li>
                  </ul>
                  <div class="row row-sm">
                    <div class="col-6">
                      <a href="doctor-profile.html" class="btn view-btn">
                        View Profile
                      </a>
                    </div>
                    <div class="col-6">
                      <a href="booking.html" class="btn book-btn">
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Doctor Widget --> */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachListSlider;
