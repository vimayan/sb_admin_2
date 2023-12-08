import React, { useContext, useEffect } from "react";
import Lists from "./component/List";
import Inputs from "./component/Input";
import PeopleContext from "./context/context";
import { v4 as uuidv4 } from "uuid";


function Mentor() {
  const peopleContext = useContext(PeopleContext);
  const { list_mentor, remove_mentor , create_mentor, selected_mentor } =
    peopleContext;
  const addMentor = (name, email) => {
    if (!name || !email) alert("pls add name and email");
    else {
      const id = uuidv4();
      const mentor = { _id: id, name: name, email: email,students:[] };
      create_mentor(mentor);
    }
  };
  return (
    <div className="container-fluid " id="mentor_page">
      <div className="row justify-content-center gap-5">
        <div className="col col-md-5 d-flex flex-column">
          <Inputs button={"Add_Mentor"} handleSubmit={addMentor} />
        </div>
        <div className="col col-md-5 d-flex flex-column">
          <span className="fs-3 fw-bold  badge rounded-pill bg-primary">
            Teachers_List
          </span>
          <Lists
            name_list={list_mentor}
            path={"/teachers"}
            selectors={selected_mentor}
            remove_id={remove_mentor}
          />
        </div>
      </div>
    </div>
  );
}

export default Mentor;
