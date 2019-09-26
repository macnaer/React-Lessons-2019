// import React from 'react';
// import ReactDOM from 'react-dom';

// const App = () => {
//     return (
//         <div>
//             Hello
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'));

import { createStore } from "redux";

const initialState = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);
document.getElementById("plus").addEventListener("click", () => {
  store.dispatch({ type: "INC" });
});

document.getElementById("minus").addEventListener("click", () => {
  store.dispatch({ type: "DEC" });
});

const update = () =>{
document.getElementById("counter").innerHTML = store.getState();
}

store.subscribe(update);