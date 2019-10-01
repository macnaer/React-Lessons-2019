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

import { createStore, bindActionCreators } from "redux";
import reducer from "./Reducer/Reducer";
import * as actions from "./Actions/Action";

const store = createStore(reducer);
const { dispatch } = store;


const { INC, DEC, ZERO, DOUBLE } = bindActionCreators(actions, dispatch);

 
document.getElementById("plus").addEventListener("click", INC);
document.getElementById("minus").addEventListener("click", DEC);
document.getElementById("double").addEventListener("click", () => {
  const count = 2;
  DOUBLE(count);
});
document.getElementById("null").addEventListener("click", () =>  {
  const payload = 0;
  ZERO(payload);
});

const update = () =>{
document.getElementById("counter").innerHTML = store.getState();
}

store.subscribe(update);