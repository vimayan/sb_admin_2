const GraphReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
       ...state,
      ...action.payload
      };
    default:
      return state;
  }
};

export default GraphReducer;
