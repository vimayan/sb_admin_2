import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import MentorPage from "../task/MentorSelected";

function ViewTeachers() {
  return (
    <>
      {" "}
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid text-start" id="teachers_view">
              <h1 className="h3 mb-4 text-gray-800">Teacher</h1>
              <div className="row">
                <MentorPage />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewTeachers;
