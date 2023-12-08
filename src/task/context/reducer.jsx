const PeopleReducer = (state, action) => {
  switch (action.type) {
    case "list_mentor":
      return (state = {
        ...state,
        list_mentor: [...state.list_mentor, action.payload],
      });

    case "remove_mentor":
      return (state = {
        ...state,
        list_mentor: state.list_mentor.filter(
          (mentor) => mentor._id !== action.payload._id
        ),
      });

    case "mentor_update":
      return (state = {
        ...state,
        list_mentor: state.list_mentor.map((mentor) =>
          mentor._id === action.payload._id ? action.payload : mentor
        ),
      });
    case "list_student":
      return (state = {
        ...state,
        list_student: [...state.list_student, action.payload],
      });
    case "remove_student":
      return (state = {
        ...state,
        list_student: state.list_student.filter(
          (student) => student._id !== action.payload._id
        ),
      });

    case "student_update":
      return (state = {
        ...state,
        list_student: state.list_student.map((student) =>
          student._id === action.payload._id ? action.payload : student
        ),
      });

    case "student":
      return (state = { ...state, student: action.payload });
    case "mentor":
      return (state = { ...state, mentor: action.payload });

    case "show_students_forMentor":
      return (state = {
        ...state,
        students_for_selected_mentor: action.payload,
      });
    case "mentor_history_forStudent":
      return (state = {
        ...state,
        history_of_mentor_for_student:action.payload,
      });

    default:
      return state;
  }
};

export default PeopleReducer;
