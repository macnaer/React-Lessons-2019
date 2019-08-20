import React from 'react';

class ContactItem extends React.Component{

    state = {
        clicked: false,
        btnContectText: "Contact Now",
        avatar: this.props.avatar

    }

    onAvatar = () => {
        const ava = 99;
        this.setState({
            avatar: ava
        })
    }

    onContactClick = () => {
        console.log("Contact to ", this.props.contactName);
        if (!this.state.clicked){
            this.setState({
                clicked: true,
                btnContectText: "Clicked"
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
                <h4>{this.props.contactName}</h4>
                <p style={Style}> {this.props.contactDesc}</p>
                
            </div>
            <div className="media-right align-self-center" onClick={this.onContactClick}>
                <a href="#" className={btnContactName}>{this.state.btnContectText}</a>
            </div>
            <button type="button" className="btn btn-success" onClick={this.onAvatar}>Rand avatar</button>
        </div>
        )
    }
}
export default ContactItem;