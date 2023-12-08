import React, { useContext } from "react";
import Lists from "./component/List";
import PeopleContext from "./context/context";
import Selector from "./component/Selector";

function StudentSelected() {
  const peopleContext = useContext(PeopleContext);
  const {
    list_mentor,
    selected_mentor,
    student,
    history_of_mentor_for_student,
    add_mentor_for_student,
    remove_mentor_from_student,
  } = peopleContext;

  const addMentor = ( mentor) => {
    add_mentor_for_student(student,mentor);
  };

  const remove_mentor = (list) => {
    remove_mentor_from_student(student,list._id)
  };
  return (
    <div className="container-fluid " id="mentor_page">
      <div className="row justify-content-center gap-5">
        <div className="col col-md-5 d-flex flex-column">
          <Selector
            placeholder={"select_mentor"}
            handleSubmit={addMentor}
            type={true}
            button={"Add_mentor"}
            name_list={list_mentor}
          />
        </div>
        <div className="col col-md-5 d-flex flex-column">
          <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
            Mentor_List
          </span>
          <h4> student:{student.name}</h4>
          <Lists
            name_list={history_of_mentor_for_student}
            path={"/teachers"}
            remove_id={remove_mentor}
            selectors={selected_mentor}
          />
        </div>
      </div>
    </div>
  );
}

export default StudentSelected;
