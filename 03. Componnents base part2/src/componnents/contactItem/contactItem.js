import React from 'react';

class ContactItem extends React.Component{

    state = {
        clicked: false,
        btnContectText: "Contact Now",
        avatar: this.props.avatar,
        contactName: this.props.contactName

    }

    onAvatar = () => {
        const ava = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        this.setState({
            avatar: ava
        })
    }

    onContactClick = () => {
        console.log("Contact to ", this.props.contactName);
        if (!this.state.clicked){
            this.setState({
                clicked: true,
                btnContectText: "Clicked",
                contactName: "Sara"
            })
        }
        else {
            this.setState({
                clicked: false,
                btnContectText: "Contact Now"
            })
        }
       
    }
    render (){
        console.log("ContactItem component = ", this.props);

        let btnContactName = "btn btn-default";

        if (this.state.clicked){
            btnContactName = "btn btn-danger"
        }
       
        
        const sex = this.props.sex;
        const url = `https://randomuser.me/api/portraits/${sex}/${this.state.avatar}.jpg`;
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
                <h4>{this.state.contactName}</h4>
                <p style={Style}> {this.props.contactDesc}</p>
                
            </div>
            <div className="media-right align-self-center" onClick={this.onContactClick}>
                <a href="#" className={btnContactName}>{this.state.btnContectText}</a>
                <button type="button" className="btn btn-success" onClick={this.onAvatar}>Rand avatar</button>
            </div>
           
        </div>
        )
    }
}

export default ContactItem;