import React from "react";

const NotFound = () => {
  return (
    <section id="underconstruction" className="background-white">
      <div id="content">
        <div className="container text-center">
          <div className="row">
            <div className="col-sm-8 offset-sm-2" id="error-page">
              <div>
                <img
                  className="img img-fluid"
                  src="assets/img/404.png"
                  alt="404 not found"
                />
                <h1>Page Not Found</h1>
                <hr />
                <h3 className="text-muted">
                  Sorry, The Page You Are Looking For Does Not Exist!
                </h3>
                <p className="buttons">
                  <a className="my-4 p-3 btn view-btn" href="/">
                    <i className="fa fa-home"></i>&nbsp;&nbsp;&nbsp;Homepage
                  </a>
                </p>
                <h3 className="text-muted">
                  Click the above button to go back homepage
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
