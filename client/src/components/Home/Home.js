import React from "react";

const Home = () => {
  return (
    // <!-- Home Banner -->
    <section className="section section-search">
      <div className="container-fluid">
        <div className="banner-wrapper">
          <div className="banner-header text-center">
            <h1>Search Coach, Make an Appointment</h1>
            <p>
              Discover the best Couch nearest to you.
            </p>
          </div>

          {/* <!-- Search --> */}
          <div className="search-box">
            <form action="#">
              <div className="form-group search-location">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Location"
                />
                <span className="form-text">Based on your Location</span>
              </div>
              <div className="form-group search-info">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Coach"
                />
                <span className="form-text">Ex : Nutritionists or Yoga Expert etc</span>
              </div>
              <button type="submit" className="btn btn-primary search-btn">
                <i className="fas fa-search"></i> <span>Search</span>
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
