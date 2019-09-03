import React, { Component } from "react";
import "./addContact.css";


class AddContact extends Component{

    state = {
        name: '',
        desc: '',
        sex: ''
    }

    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    getDescription = (e) => {
        this.setState({
            desc: e.target.value
        }) 
    }

    onSex = (e) => {
        console.log(e.target.value);
        this.setState({
            sex: e.target.value
        })
    }

    sendData = (e) => {
        e.preventDefault();
        this.props.addContact(this.state.sex, this.state.name, this.state.desc);
    }

    render(){
        return(
            <div className = "col-md-10 offset-md-1 row-block">
                
                <form  onSubmit={this.sendData}>
                    <input type="text" placeholder="Name" className="form-control" onChange={this.getName} />
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="usersex" id="usersex1" onClick={this.onSex} value="women" />
                    <label className="form-check-label" htmlFor="usersex1">
                    Women
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="usersex" id="usersex2" onClick={this.onSex} value="men" />
                    <label className="form-check-label" htmlFor="usersex2">
                    Men
                    </label>
                </div> 
                    <textarea type="text" placeholder="Description" className="form-control" onChange={this.getDescription} />  
                    <button className="btn btn-success" type="submit">New Contact</button>
                </form>
                
            </div> 
        )
    }
}

export default AddContact;