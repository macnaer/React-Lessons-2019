import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Componnents 
import Header from "./componnents/header/headerComponnent";
import ContactLists from "./componnents/contactsList/contactList";
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

    onSearch = (searchValue) => {
         this.setState({
            findContact: searchValue
        })
    }

    onShowContact = (items, searchValue) => {
       
        if (searchValue.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.contactName.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        });
    }

    render(){
        const showContacts = this.onShowContact(this.state.List, this.state.findContact);
        return(
        <section className="row-section">
            <div className="container">
                <Header />
                <Router>
                    <Switch>
                        <Route path="/" exact render={() => <ContactLists ContactList={showContacts}
                         RemoveContact={this.RemoveContact}
                          onFavorite={this.onFavorite}
                           onSearch={this.onSearch} />} /> 
                        <Route path="/add" exact render={() => <AddContact addContact={this.addContact} />} />
                    </Switch>
                </Router>
            </div>
        </section>
        );
    }
    
};

ReactDOM.render(<App />, document.getElementById('root'));

