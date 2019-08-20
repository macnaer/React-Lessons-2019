import React from 'react';
import ContactItem from '../contactItem/contactItem';


const ContactLists = (props) => {
    // console.log(props);
    const contactItem = props.ContactList.map((item) => {
        return(
             <ContactItem vip={item.vip} sex={item.sex} avatar={item.avatar} contactName={item.contactName} contactDesc={item.contactDesc} />
        )
    })

    return(
        <div className="col-md-10 offset-md-1 row-block">
	        <ul id="sortable">
               {contactItem}
            </ul>
        </div>
    );
}

export default ContactLists;