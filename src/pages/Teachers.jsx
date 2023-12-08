import React from "react";
import SideBar from "../component/SideBar";
import NavBar from "../component/NavBar";
import Mentor from "../task/Mentor";

function Teachers() {

  return (
    <>
      {" "}
      <div id="wrapper">
        <SideBar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <NavBar />
            <div className="container-fluid text-start" id="teachers">
            <h1 className="h3 mb-4 text-gray-800">Teachers</h1>
            <div className="row">
            <Mentor/>
            </div>
           
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;
