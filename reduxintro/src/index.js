import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// Components
import Counter from "./Components/Counter/Counter";
import { createStore} from "redux";
import RootReducer from "./Reducer/RootReducer";
//import Reducer from "./Reducer/Reducer";
// Redux
// console.log("Reducer", RootReducer);
const storeMy = createStore(RootReducer);

console.log("storeMy => ", storeMy.getState());

const App = () => {
    return (
        <Provider store={storeMy}>
          <Counter />
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));