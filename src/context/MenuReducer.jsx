const MenuReducer = (state, action) => {
  switch (action) {
    case "TOGGLE":
      return {
        menu: !state.menu,
      };
    default:
      return state;
  }
};

export default MenuReducer;
