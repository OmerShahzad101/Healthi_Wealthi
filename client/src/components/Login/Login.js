import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import auth from "../../services/auth.service";


//Initial Values
const InitialValues = {
  email: "",
  password: "",
};
const Login = () => {
  const [loginUser, setLoginUser] = useState(InitialValues);

  // JQuery for Input
  // setTimeout(function () {
  //   if ($(".floating").length > 0) {
  //     $(".floating")
  //       .on("focus blur", function (e) {
  //         $(this)
  //           .parents(".form-focus")
  //           .toggleClass(
  //             "focused",
  //             e.type === "focus" || this.value.length > 0
  //           );
  //       })
  //       .trigger("blur");
  //   }
  // }, 100);

  //Handle Changes to Get Values
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({
      ...loginUser,
      [name]: value,
    });
  };

  //API call
  const LoginCall = async () => {
    const { email, password } = loginUser;
    if (email && password) {
      console.log(loginUser);
      const res = await auth.login(`http://localhost:8080/api/auth/login`, loginUser);
      console.log(res)
      alert(res.message)
    }
  };

  return (
    <div className="account-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="account-content">
                <div className="row align-items-center justify-content-center">
                  <div className="col-md-7 col-lg-6 login-left">
                    <img
                      src="assets/img/login-banner.png"
                      className="img-fluid"
                      alt="Doccure Login"
                    />
                  </div>
                  <div className="col-md-12 col-lg-6 login-right">
                    <div className="login-header">
                      <h3>
                        Login <span>Healthi Wealthi</span>
                      </h3>
                    </div>
                    <form action="#">
                      <div className="form-group form-focus">
                        <input
                          type="email"
                          name="email"
                          value={loginUser.email}
                          onChange={handleChange}
                          className="form-control floating"
                        />
                        <label className="focus-label">Email</label>
                      </div>
                      <div className="form-group form-focus">
                        <input
                          type="password"
                          name="password"
                          value={loginUser.password}
                          onChange={handleChange}
                          className="form-control floating"
                        />
                        <label className="focus-label">Password</label>
                      </div>
                      <div className="text-right">
                        <Link className="forgot-link" to="/forgot-password">
                          Forgot Password ?
                        </Link>
                      </div>
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="button"
                        onClick={LoginCall}
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or</span>
                      </div>
                      <div className="row form-row social-login">
                        <div className="col-6">
                          <a href="#" className="btn btn-facebook btn-block">
                            <i className="fab fa-facebook-f mr-1"></i> Login
                          </a>
                        </div>
                        <div className="col-6">
                          <a href="#" className="btn btn-google btn-block">
                            <i className="fab fa-google mr-1"></i> Login
                          </a>
                        </div>
                      </div>
                      <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <Link to="/register">Register</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
