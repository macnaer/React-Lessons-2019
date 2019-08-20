import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componnents 
import Header from "./componnents/header/headerComponnent";
import ContactLists from "./componnents/contactsList/contactList";

const App = () => {
    const List = [
        { vip: false, sex: "women", avatar: 11 , contactName: "Camila Terry", contactDesc: "Camila Terry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
        { vip: true, sex: "men", avatar: 12 , contactName: "Bob Terry", contactDesc: "Bob Terry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" }
    ]
    return(
        <section className="row-section">
            <div className="container">
                <Header />
                <ContactLists ContactList={List} />
            </div>
        </section>
        
    );
};

ReactDOM.render(<App />, document.getElementById('root'));

