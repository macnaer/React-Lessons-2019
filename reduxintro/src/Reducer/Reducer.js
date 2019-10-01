const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "ZERO":
      return (state = action.payload);
    case "DOUBLE":
        return state * action.count;
    default:
      return state;
  }
};

export default reducer;