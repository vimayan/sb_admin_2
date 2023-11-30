import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="container-fluid p-4 col-md-8" id="login">
      {/* Outer Row */}
      <div className="row justify-content-center">
        <div className=" col-sm-8 ">
          <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
              {/* Nested Row within Card Body */}
              <div className="row">
                <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                <div className="col-lg-6">
                  <div className="p-5">
                    <div className="text-center">
                      <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                    </div>
                    <form className="user">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-user p-3 mb-3"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Enter Email Address..."
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-user p-3"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="form-group text-start">
                        <div className="custom-control custom-checkbox small m-2">
                          <input
                            type="checkbox"
                            className="custom-control-input me-1"
                            id="customCheck"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="customCheck"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <Link to="/" className="btn btn-primary col-12 btn-user">
                        Login
                      </Link>
                      <hr />
                      <Link
                        to="/"
                        className="btn btn-google btn-user col-12 bg-danger mb-2 "
                      >
                        <i className="fab fa-google fa-fw"></i> Login with
                        Google
                      </Link>
                      <Link
                        to="/"
                        className="btn btn-facebook btn-user col-12 bg-primary"
                      >
                        <i className="fab fa-facebook-f fa-fw"></i> Login with
                        Facebook
                      </Link>
                    </form>
                    <hr />
                    <div className="text-center">
                      <Link className="small" to="/forgot_password">
                        Forgot Password?
                      </Link>
                    </div>
                    <div className="text-center">
                      <Link className="small" to="/register">
                        Create an Account!
                      </Link>
                    </div>
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

export default LoginForm;
