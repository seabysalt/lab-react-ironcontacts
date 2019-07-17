import React, { Component } from 'react';
// import contacts from '../contacts.json';
import Contacts from './Contacts';

class List extends Component {
  render() {
    const elements = this.props.contacts.map((contact,i) => {
    return <Contacts key={contact.id} data={contact} handleDelete={() => this.props.handleDelete(i)} />
  })
  return (
      <div className="List">

        <div>
         <button onClick={this.props.addContact}>Add Contact</button>
         <button onClick={() => this.props.sortContacts('name')}>Sort by Name</button>
         <button onClick={() => this.props.sortContacts('popularity')}>Sort by Popularity</button>
        </div>
        
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {elements}
        </table>

      </div>
    )
}
}


export default List;
