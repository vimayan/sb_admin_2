import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import StudentSelected from "../task/StudentSelected";

function ViewStudents() {


  return (
    <>
      {" "}
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid text-start" id="students_view">
            <h1 className="h3 mb-4 text-gray-800">Student</h1>
            <div>
            <StudentSelected/>
            </div>
      
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewStudents;
