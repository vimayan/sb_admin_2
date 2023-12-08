import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import Student from "../task/Student";

function Students() {
  return (
    <>
      {" "}
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid text-start" id="students">
              <h1 className="h3 mb-4 text-gray-800">Students</h1>

              <div className="row">
                <Student />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Students;
