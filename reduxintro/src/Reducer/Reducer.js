const initialState = {
  counter: 0,
};

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      console.log("DEC dispatch");
      console.log('counter ', state);
      return state - 1;
    case "ZERO":
      return (state = action.payload);
    case "DOUBLE":
      return state * action.payload;
    default:
      return state;
  }
};
export default reducer;