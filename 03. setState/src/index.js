import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Componnents 
import Header from "./componnents/header/headerComponnent";
import ContactLists from "./componnents/contactsList/contactList";
import Search from "./componnents/search/search";
import AddContact from "./componnents/addContact/addContact";

class App extends React.Component  {

    counterID = 1000;

    state = {
        List : [
            { id: 1, vip: false, sex: "women", avatar: 11 , contactName: "Camila Terry", contactDesc: "Camila Terry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
            { id: 2, vip: true, sex: "men", avatar: 34 , contactName: "Bob Terry", contactDesc: "Bob Terry Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
            { id: 3, vip: false, sex: "women", avatar: 72 , contactName: "Jesica Smith", contactDesc: "Jesica Smith Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" },
            { id: 4, vip: false, sex: "men", avatar: 95 , contactName: "Jack Sparrow", contactDesc: "Jack Sparrow Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation" }
        ],
        findContact: ""
    }

    RemoveContact = (id) => {
        //console.log("Remove contact => ", id);
        this.setState((state) => {
            const index = this.state.List.findIndex((elem) => elem.id === id);
            //console.log("index", index);
            
            const firstPart = this.state.List.slice(0,index);
            const lastPart = this.state.List.slice(index + 1);
            const newList = [...firstPart, ...lastPart];

            return{
                List: newList
            }
        })
    }

    addNewContact = (sex, contactName, contactDesc) => {
        return{
            id: this.counterID++,
            vip: false,
            sex: sex,
            avatar: Math.floor(Math.random() * (99 - 1 + 1)) + 1,
            contactName: contactName,
            contactDesc: contactDesc
        }
    }

    onFavorite = (id) => {

        this.setState((state) => {

            const index = this.state.List.findIndex((elem) => elem.id === id);
             
            const newVip = this.state.List.slice();
            newVip[index].vip = !newVip[index].vip;
            //console.log(newVip[index].vip);
            return {
                vip: !this.newVip
            }
        })
        
    }

    addContact = (sex, name, description) => {
        const contact = this.addNewContact(sex, name, description);

        const newContactArr = [
            ...this.state.List,
            contact
        ];

        this.setState((state) => {
            return{
                List: newContactArr
            }
        })
    }

    onSearch = (item) => {
        console.log(item);
    }

    onShowContact = () => {
        return this.state.List;
    }

    render(){
        let showContacts = this.onShowContact();
        return(
        <section className="row-section">
            <div className="container">
                <Header />
                <Search onSearch={this.onSearch} / >
                <ContactLists ContactList={showContacts}
                  RemoveContact={this.RemoveContact}
                  onFavorite={this.onFavorite} / >
                <AddContact addContact={this.addContact} />
            </div>
        </section>
        );
    }
    
};

ReactDOM.render(<App />, document.getElementById('root'));

