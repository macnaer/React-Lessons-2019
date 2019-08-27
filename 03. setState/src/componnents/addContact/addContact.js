import React, { Component } from "react";
import "./addContact.css";


class AddContact extends Component{
    render(){
        return(
            <div className = "col-md-10 offset-md-1 row-block">
                <button className="btn btn-success" type="button" onClick={this.props.addContact}>New Contact</button>
            </div> 
        )
    }
}

export default AddContact;