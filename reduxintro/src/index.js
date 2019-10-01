import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// Components
import Counter from "./Components/Counter/Counter";
import { createStore} from "redux";
import reducer from "./Reducer/Reducer";
// Redux
const store = createStore(reducer);

const App = () => {
    return (
        <Provider store={store}>
          <Counter />
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));