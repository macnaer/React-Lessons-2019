import React from 'react';
import ContactItem from '../contactItem/contactItem';
import "./contact-list.css";
import Search from "../search/search";


const ContactLists = ({ContactList, RemoveContact, onFavorite, onSearch}) => {
    const contactItem = ContactList.map((item) => {
        return(
            <ContactItem onFavorite={() => onFavorite(item.id)} RemoveContact={() => RemoveContact(item.id)}  key={item.id} id={item.id} vip={item.vip} sex={item.sex} avatar={item.avatar} contactName={item.contactName} contactDesc={item.contactDesc} />
        )
    })

    return(
        <div>
            <Search onSearch={onSearch} />
            <div className="col-md-10 offset-md-1 row-block">
	        <ul id="sortable" className="contactList">
               {contactItem}
            </ul>
        </div>
        </div>
        
    );
}

export default ContactLists;