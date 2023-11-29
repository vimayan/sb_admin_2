import React, { useReducer } from "react";
import MenuReducer from "./MenuReducer";
import MenuContext from "./MenuContext";

function MenuAction(props) {
const initial_state={
    menu:false
}
const [state,dispatch]=useReducer(MenuReducer,initial_state);

const toggled = ()=>{
    dispatch("TOGGLE")
}
  return (
    <MenuContext.Provider
      value={{
        menu: state.menu,
        toggled:toggled
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
}

export default MenuAction;
