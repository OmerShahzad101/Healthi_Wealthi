import React from "react";

const NotFound = () => {
  return (
    <section id="underconstruction" class="background-white">
      <div id="content">
        <div class="container">
          <div class="col-sm-8 col-sm-offset-2" id="error-page">
            <div>
              <img
                class="img img-responsive"
                src="assets/img/404.png"
                alt="404 not found"
              />
              <h1>Page Not Found</h1>
              <hr />
              <h3 class="text-muted">
                Sorry, The Page You Are Looking For Does Not Exist!
              </h3>
              <p class="buttons">
                <a class="mt-23 btn no-radius btn-outline" href="../">
                  <i class="fa fa-home"></i>&nbsp;&nbsp;&nbsp;Homepage
                </a>
              </p>
              <h3 class="text-muted">
                Click the above button to go back homepage
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound