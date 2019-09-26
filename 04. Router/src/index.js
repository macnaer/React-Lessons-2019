import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";




class App extends React.Component {
    render(){
        return(
           <Router>
                {/* <Route path="/" exact render={() => (
                        <h1> Hello World! </h1>
                    )}  /> */}
                <Route path="/" exact component={Home}  />
                <Route path="/about" exact component={About} />
                {/* <Route path="*" exact component={NotFound} /> */}

           </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));