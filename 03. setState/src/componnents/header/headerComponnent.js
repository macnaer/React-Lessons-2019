import React from 'react';
import { Link } from "react-router-dom";
 

const Header = () => {
    return(
        <div className="row">
            <ul>
                <li>
                    <Link  to="/">Home </Link>
                </li>
                <li>
                    <Link  to="/add">Add new contact </Link>
                </li>
            </ul>
		    <h2 className="text-center"><span>Contact List</span>Created with <i className="fa fa-heart"></i> from me</h2>
	    </div>
    );
}

export default Header;