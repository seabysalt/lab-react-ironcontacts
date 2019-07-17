import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ContactForm from './components/ContactForm'
import List from './components/List'

class App extends Component {
  state = {
    contacts: contacts.slice(0,5)
  };

  addContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)]

    const contactsCopy = [...this.state.contacts];

    contactsCopy.unshift(newContact);

    this.setState({ contacts: contactsCopy });
  };

  sortContacts = type => {
    let contacts = this.state.contacts.slice()

    if (type === "name") {
      contacts.sort((a,b) => a.name.localeCompare(b.name))
    } else if (type === "popularity") {
      contacts.sort((a,b) => b.popularity - a.popularity)
    }

    this.setState({
      contacts: contacts
    })

  }

  handleDelete = index => {
    let contacts = this.state.contacts.slice();
    contacts.splice(index, 1);

    this.setState({
      contacts
    });
  };

  pushContact = contact => {
    let contacts = [...this.state.contacts];
    contacts.push(contact);

    this.setState({ contacts: contacts });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ContactForm pushContact={this.pushContact}/>
        <List addContact={this.addContact} sortContacts={this.sortContacts} contacts={this.state.contacts} handleDelete={this.handleDelete}/>
      </div>
    );
  }
}
 
export default App;
