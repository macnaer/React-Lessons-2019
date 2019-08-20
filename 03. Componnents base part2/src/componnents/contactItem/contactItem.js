import React from 'react';


const ContactItem = (props) => {
    console.log(props);
    const sex = props.sex;
    const url = `https://randomuser.me/api/portraits/${sex}/${props.avatar}.jpg`;
    const Style = {
        color: props.vip ? "green" : "pink",
        cursor: "pointer"
    }
    return(
            <div className="media">
                <div className="media-left align-self-center">
                    <img className="rounded-circle" src={url} />
                </div>
                <div className="media-body">
                    <h4>{props.contactName}</h4>
                    <p style={Style}> {props.contactDesc}</p>
                
                </div>
                <div className="media-right align-self-center">
                    <a href="#" className="btn btn-default">Contact Now</a>
                </div>
            </div>
    );
}

export default ContactItem;