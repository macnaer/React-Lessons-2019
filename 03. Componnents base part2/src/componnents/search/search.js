import React from 'react';
import "./search.css";


const Search = (props) => {
    // console.log(props);
    return(
        <div className="col-md-10 offset-md-1 row-block">
            <input type="text" className="form-control searchInput" placeholder="Search..." />
            <button className="btn btn-primary" type="button" >Top</button>
            <button className="btn btn-danger" type="button" >VIP</button>
        </div>
    );
}

export default Search;