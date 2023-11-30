import React, { useReducer } from "react";
import GraphReducer from "./GraphReducer";
import GraphContext from "./GraphContext";

function GraphAction(props) {
  const initial_state = {
    data: [0, 10000, 5000, 15000],
    year: [
      2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
      2012,
    ],
  };
  const [state, dispatch] = useReducer(GraphReducer, initial_state);
  const modify = (data) => {
    dispatch({
      type: "CHANGE",
      payload: { data: [...data] },
    });
  };

  const remove = () => {
    dispatch({
      type: "CHANGE",
      payload: { ...state, data: [] },
    });
  };

  const insert = (value) => {
    let new_data = [...state.data];
    new_data.push(value);
    let new_year = [...state.year];

    if (new_data.length > new_year.length) {
      let add = new_year[new_year.length - 1] + 1;
      new_year.push(add);
    }
    dispatch({
      type: "CHANGE",
      payload: { data: [...new_data], year: [...new_year] },
    });
  };

  const minus = () => {
    let new_data = [...state.data];
    new_data.pop();
    dispatch({
      type: "CHANGE",
      payload: { ...state, data: [...new_data] },
    });
  };
  return (
    <GraphContext.Provider
      value={{
        data: state.data,
        year: state.year,
        modify: modify,
        remove: remove,
        insert: insert,
        minus: minus,
      }}
    >
      {props.children}
    </GraphContext.Provider>
  );
}

export default GraphAction;
