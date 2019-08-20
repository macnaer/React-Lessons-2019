import React from 'react';
import ReactDOM from 'react-dom';
import MainNav from "./componnents/MainNav";
import SearchPanel from "./componnents/SearchPanel";


const App = () => {
    return (
        <div>
            <MainNav />
            <SearchPanel />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

