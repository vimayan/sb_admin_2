import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="container-fluid p-4 m-0" id="register">
      <div className="row">
        <div className="card border-0 shadow-lg col-10 col-sm-8 mx-auto my-5">
          <div className="card-body p-0">
            {/* Nested Row within Card Body */}
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">
                      Create an Account!
                    </h1>
                  </div>
                  <form className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3">
                        <input
                          type="text"
                          className="form-control form-control-user p-3"
                          id="exampleFirstName"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="text"
                          className="form-control form-control-user p-3"
                          id="exampleLastName"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control form-control-user p-3 mb-3"
                        id="exampleInputEmail"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3">
                        <input
                          type="password"
                          className="form-control form-control-user p-3"
                          id="exampleInputPassword"
                          placeholder="Password"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="password"
                          className="form-control form-control-user p-3"
                          id="exampleRepeatPassword"
                          placeholder="Repeat Password"
                        />
                      </div>
                    </div>
                    <Link
                      to="/login"
                      className="btn btn-primary btn-user col-12"
                    >
                      Register Account
                    </Link>
                    <hr />
                    <Link
                      to="/"
                      className="btn btn-google bg-danger btn-user col-12 mb-3"
                    >
                      <i className="fab fa-google fa-fw"></i> Register with
                      Google
                    </Link>
                    <Link
                      to="/"
                      className="btn btn-facebook btn-user bg-primary col-12"
                    >
                      <i className="fab fa-facebook-f fa-fw"></i> Register with
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
                    <Link className="small" to="/">
                      Already have an account? Login!
                    </Link>
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

export default Register;
