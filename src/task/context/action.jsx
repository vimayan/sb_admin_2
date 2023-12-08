import React, { useReducer } from "react";
import PeopleReducer from "./reducer";
import PeopleContext from "./context";

const PeopleAction = (props) => {
  const initialstate = {
    list_student: [],
    list_mentor: [],
    student: "",
    mentor: "",
    students_for_selected_mentor: [],
    history_of_mentor_for_student: [],
  };
  const [state, dispatch] = useReducer(PeopleReducer, initialstate);

  const selected_student = (student) => {
    dispatch({ type: "student", payload: student });
  };

  const selected_mentor = (mentor) => {
    dispatch({ type: "mentor", payload: mentor });
  };

  const create_student = (student) => {
    // console.log(res.data);
    dispatch({ type: "list_student", payload: student });
    alert("student created");
  };

  const create_mentor = (mentor) => {
    dispatch({ type: "list_mentor", payload: mentor });
    alert("mentor created");
  };

  const remove_student = (student) => {
    dispatch({ type: "remove_student", payload: student });
    alert("student removed");
  };

  const remove_mentor = (mentor) => {
    dispatch({ type: "remove_mentor", payload: mentor });
    alert("mentor removed");
  };

  const student_list_for_selected_mentor = (mentor) => {
    const students = [];
    mentor.students.forEach(
      (id) =>
        state.list_student.find((student) => student._id == id) &&
        students.push(state.list_student.find((student) => student._id == id))
    );

    dispatch({ type: "show_students_forMentor", payload: [...students] });
  };

  const add_students_for_mentor = (mentor, student_id) => {
    const student = state.list_student.filter((std) =>
      student_id.find((id) => std._id === id)
    );
    const data = [...state.students_for_selected_mentor, ...student];

    const new_students = [...mentor.students, ...student_id];
    const new_mentor = { ...mentor, students: [...new_students] };

    dispatch({ type: "mentor_update", payload: { ...new_mentor } });

    dispatch({ type: "show_students_forMentor", payload: [...data] });

    const update_add_mentor_for_student = (student, mentor_id) => {
      const new_mentors = [...student.mentors, ...mentor_id];
      const new_student = { ...student, mentors: [...new_mentors] };

      dispatch({ type: "student_update", payload: { ...new_student } });
    };

    student.forEach((student) =>
      update_add_mentor_for_student(student, [mentor._id])
    );
  };

  const remove_student_from_mentor = (mentor, student_id) => {
    const students = state.students_for_selected_mentor.filter(
      (student) => student._id != student_id
    );

    const new_students = mentor.students.filter(
      (student) => student !== student_id
    );
    const new_mentor = { ...mentor, students: [...new_students] };

    dispatch({ type: "mentor_update", payload: { ...new_mentor } });
    dispatch({ type: "show_students_forMentor", payload: [...students] });

    const update_remove_mentor_from_student = (student, mentor_id) => {
      const new_mentors = student.mentors.filter(
        (mentor) => mentor != mentor_id
      );
      const new_student = { ...student, mentors: [...new_mentors] };
      dispatch({ type: "student_update", payload: { ...new_student } });
    };

    const removing_student = state.list_student.find(
      (std) => std._id == student_id
    );
    update_remove_mentor_from_student(removing_student, mentor._id);
  };

  const mentor_list_for_selected_student = (student) => {
    const mentors = [];
    student.mentors.forEach(
      (id) =>
        state.list_mentor.find((mentor) => mentor._id === id) &&
        mentors.push(state.list_mentor.find((mentor) => mentor._id === id))
    );

    dispatch({
      type: "mentor_history_forStudent",
      payload: [...mentors],
    });
  };
  const add_mentor_for_student = (student, mentor_id) => {
    const mentors = state.list_mentor.filter((mentor) =>
      mentor_id.find((id) => mentor._id === id)
    );

    const new_mentors = [...student.mentors, ...mentor_id];
    const new_student = { ...student, mentors: [...new_mentors] };

    dispatch({ type: "student_update", payload: { ...new_student } });

    const data = [...state.history_of_mentor_for_student, ...mentors];
    dispatch({
      type: "mentor_history_forStudent",
      payload: data,
    });

    const update_add_students_for_mentor = (mentor, student_id) => {
      const new_students = [...mentor.students, ...student_id];
      const new_mentor = { ...mentor, students: [...new_students] };
      dispatch({ type: "mentor_update", payload: { ...new_mentor } });
    };
    mentors.forEach((mentor) =>
      update_add_students_for_mentor(mentor, [student._id])
    );
  };
  const remove_mentor_from_student = (student, mentor_id) => {
    const mentors = state.history_of_mentor_for_student.filter(
      (mentor) => mentor._id != mentor_id
    );

    const new_mentors = student.mentors.filter(
      (mentor) => mentor !== mentor_id
    );
    const new_student = { ...student, mentors: [...new_mentors] };

    dispatch({ type: "student_update", payload: { ...new_student } });
    dispatch({
      type: "mentor_history_forStudent",
      payload: [...mentors],
    });

    const update_remove_student_from_mentor = (mentor, student_id) => {
      const new_students = mentor.students.filter(
        (student) => student != student_id
      );
      const new_mentor = { ...mentor, students: [...new_students] };

      dispatch({ type: "mentor_update", payload: { ...new_mentor } });
    };
    const removing_mentor = state.list_mentor.find(
      (ment) => ment._id == mentor_id
    );
    update_remove_student_from_mentor(removing_mentor, student._id);
  };

  return (
    <PeopleContext.Provider
      value={{
        list_student: state.list_student,
        list_mentor: state.list_mentor,
        students_for_selected_mentor: state.students_for_selected_mentor,
        mentor_for_selected_student: state.mentor_for_selected_student,
        history_of_mentor_for_student: state.history_of_mentor_for_student,
        student: state.student,
        mentor: state.mentor,
        create_student,
        create_mentor,
        student_list_for_selected_mentor,
        mentor_list_for_selected_student,
        add_students_for_mentor,
        add_mentor_for_student,
        selected_student,
        selected_mentor,
        remove_student,
        remove_mentor,
        remove_student_from_mentor,
        remove_mentor_from_student,
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleAction;
