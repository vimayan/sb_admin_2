import React, { useContext } from "react";
import Lists from "./component/List";
import Selector from "./component/Selector";
import PeopleContext from "./context/context";
import { useNavigate } from "react-router-dom";

function MentorPage() {
  const navigate = useNavigate();
  const peopleContext = useContext(PeopleContext);
  const {
    list_student,
    mentor,
    students_for_selected_mentor,
    add_students_for_mentor,
    remove_student_from_mentor,
  } = peopleContext;

  const addStudent = (student) => {
    if (student.length === 0) alert("please select student");
    else add_students_for_mentor(mentor, student);
  };

  const remove_student = (list) => {
    remove_student_from_mentor(mentor, list._id);
  };
  return (
    <div className="container-fluid " id="mentor_page">
      <div className="row justify-content-center gap-5">
        <div className="col col-md-5 d-flex flex-column">
          <Selector
            placeholder={"select_student"}
            handleSubmit={addStudent}
            type={true}
            button={"Add_Student"}
            name_list={list_student}
          />
        </div>
        <div className="col col-md-5 d-flex flex-column" id="teacher_view">
          <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
            Student_List
          </span>
          <h4> Teacher:{mentor.name}</h4>
          <Lists
            name_list={students_for_selected_mentor}
            path={"/students"}
            remove_id={remove_student}
          />
        </div>
      </div>
    </div>
  );
}

export default MentorPage;
