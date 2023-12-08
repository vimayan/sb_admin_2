import React, { useContext, useEffect } from "react";
import Lists from "./component/List";
import Inputs from "./component/Input";
import { v4 as uuidv4 } from "uuid";
import PeopleContext from "./context/context";

function Student() {
  const peopleContext = useContext(PeopleContext);
  const { list_student, remove_student, create_student } = peopleContext;
  const addStudent = (name, email) => {
    if (!name || !email) alert("pls add name and email");
    else {
      const id = uuidv4();
      const student = { _id: id, name: name, email: email,mentors:[] };
      create_student(student);
    }
  };

  return (
    <div className="container-fluid " id="student_page">
      <div className="row justify-content-center gap-5">
        <div className="col col-md-5 d-flex flex-column">
          <Inputs button={"Add_Student"} handleSubmit={addStudent} />
        </div>
        <div className="col col-md-5 d-flex flex-column">
          <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
            Student_List
          </span>
          <div className="d-flex flex-column">
            <Lists
              name_list={list_student}
              path={"/students"}
              remove_id={remove_student}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
