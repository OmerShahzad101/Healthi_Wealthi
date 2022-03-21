import React from "react";

const Home = () => {
  return (
    // <!-- Home Banner -->
    <section class="section section-search">
      <div class="container-fluid">
        <div class="banner-wrapper">
          <div class="banner-header text-center">
            <h1>Search Couch, Make an Appointment</h1>
            <p>
              Discover the best Couch, clinic & hospital the city nearest to
              you.
            </p>
          </div>

          {/* <!-- Search --> */}
          <div class="search-box">
            <form action="templateshub.net">
              <div class="form-group search-location">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Location"
                />
                <span class="form-text">Based on your Location</span>
              </div>
              <div class="form-group search-info">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc"
                />
                <span class="form-text">Ex : Dental or Sugar Check up etc</span>
              </div>
              <button type="submit" class="btn btn-primary search-btn">
                <i class="fas fa-search"></i> <span>Search</span>
              </button>
            </form>
          </div>
          {/* <!-- /Search --> */}
        </div>
      </div>
    </section>
  );
};
export default Home;
