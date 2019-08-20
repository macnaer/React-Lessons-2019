import React from 'react';
import ContactItem from '../contactItem/contactItem';
import "./contact-list.css";


const ContactLists = (props) => {
    // console.log(props);
    const contactItem = props.ContactList.map((item) => {
        return(
            <ContactItem  key={item.id} vip={item.vip} sex={item.sex} avatar={item.avatar} contactName={item.contactName} contactDesc={item.contactDesc} />
        )
    })

    return(
        <div className="col-md-10 offset-md-1 row-block">
	        <ul id="sortable" className="contactList">
               {contactItem}
            </ul>
        </div>
    );
}

export default ContactLists;