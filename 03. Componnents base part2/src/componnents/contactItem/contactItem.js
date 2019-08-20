import React from 'react';

class ContactItem extends React.Component{
  
    render (){
        console.log("ContactItem component = ", this.props);
        const sex = this.props.sex;
        const url = `https://randomuser.me/api/portraits/${sex}/${this.props.avatar}.jpg`;
        const Style = {
            color: this.props.vip ? "green" : "pink",
            cursor: "pointer"
        };
        return(
        <div className="media">
            <div className="media-left align-self-center">
                    <img className="rounded-circle" src={url} />
            </div>
            <div className="media-body">
                <h4>{this.props.contactName}</h4>
                <p style={Style}> {this.props.contactDesc}</p>
                
            </div>
            <div className="media-right align-self-center">
                <a href="#" className="btn btn-default">Contact Now</a>
            </div>
        </div>
        )
    }
}
export default ContactItem;