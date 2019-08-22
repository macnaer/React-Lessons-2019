import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componnents 
import Header from "./componnents/header/headerComponnent";
import ContactLists from "./componnents/contactsList/contactList";
import Search from "./componnents/search/search";

const App = () => {

    const RemoveContact = (id) => {
        console.log("Remove contact => ", id);
    }

    const List = [
        { id: 1, vip: false, sex: "women", avatar: 11 , contactName: "Camila Terry", contactDesc: "Camila Terry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
        { id: 2, vip: true, sex: "men", avatar: 34 , contactName: "Bob Terry", contactDesc: "Bob Terry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
        { id: 3, vip: true, sex: "women", avatar: 72 , contactName: "Jesica Smith", contactDesc: "Jesica Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
        { id: 4, vip: true, sex: "men", avatar: 95 , contactName: "Jack Sparrow", contactDesc: "Jack Sparrow Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" }
    ]
    return(
        <section className="row-section">
            <div className="container">
                <Header />
                <Search />
                <ContactLists ContactList={List}  RemoveContact={RemoveContact} />
            </div>
        </section>
        
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

