import React from 'react';
import "./index.css";

class ContactItem extends React.Component{

    state = {
        clicked: false,
        btnContactText: "Contact Now",
        avatar: this.props.avatar,
        contactName: this.props.contactName,
    }

    onAvatar = () => {
        const ava = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        this.setState({
            avatar: ava
        })
    }


    onContactClick = () => {
        //console.log("Contact to ", this.props.id);
        if (!this.state.clicked){
            this.setState({
                clicked: true,
                btnContactText: "Clicked",
            })
        }
        else {
            this.setState({
                clicked: false,
                btnContactText: "Contact Now"
            })
        }
       
    }

     onStar = () => {
         this.setState(() => {
             return {
                 star: !this.state.star
             }
         })
         this.props.onFavorite();
     }

    getContact = () => {
        const id = this.props.id;
        this.props.contactDetails(id);
    } 
    render (){
        console.log("Item props ", this.props);

        let btnContactName = "btn btn-default";
        if (this.state.clicked){
            btnContactName = "btn btn-danger"
        }
    

        let vipStatus = this.props.vip;
        let starClass = "fa fa-star-o fa-2x star";
        if (vipStatus) {
            starClass = "fa fa-star fa-2x star"
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
                <p style={Style} onClick={this.getContact}> {this.props.contactDesc}</p>
                
            </div>
            <div className="media-right align-self-center" onClick={this.onContactClick}>
                <a href="#" className={btnContactName}>{this.state.btnContactText}</a>
            </div>
            <div className="media-right align-self-center">
                 <button type="button" className="btn btn-success" onClick={this.onAvatar}>Rand avatar</button>
            </div>
            <div className="media-right align-self-center">
                 <i className={starClass} aria-hidden="true" onClick={this.onStar}></i>
                 <i className="fa fa-times fa-2x close" aria-hidden="true" onClick={this.props.RemoveContact}></i>
            </div>
        </div>
        )
    }
}
export default ContactItem;