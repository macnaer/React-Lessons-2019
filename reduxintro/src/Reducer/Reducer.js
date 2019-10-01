
const initialState = {
  counter: 0,
  name: "Null"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return state.counter + 1;
    case "DEC":
      return state.counter - 1;
    case "ZERO":
      return (state.counter = action.payload);
    case "DOUBLE":
      return state.counter * action.count;
    default:
      return state;
  }
};

export default reducer;